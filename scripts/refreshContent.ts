/**
 * Fetches content for the trivia, gallery, jokes and card game activities and
 * stores it in data/ and public/images/. Run with: bun run refresh-content
 * Nothing is written to data/ until every source has succeeded.
 */
import { mkdirSync, writeFileSync } from "fs";
import sharp from "sharp";

const USER_AGENT = "random-stuff-content-refresh";
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function fetchOk(url: string) {
  for (let attempt = 1; ; attempt++) {
    const response = await fetch(url, {
      headers: { "User-Agent": USER_AGENT, "AIC-User-Agent": USER_AGENT },
      signal: AbortSignal.timeout(45000),
    });
    if (response.ok) return response;
    if (attempt === 4) throw new Error(`${response.status} for ${url}`);
    await sleep(attempt * 6000);
  }
}

async function saveImage(url: string, path: string, width: number) {
  const buffer = Buffer.from(await (await fetchOk(url)).arrayBuffer());
  await sharp(buffer)
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(path);
}

async function inBatches<T>(items: T[], size: number, task: (item: T) => Promise<void>) {
  const queue = [...items];
  await Promise.all(
    Array.from({ length: size }, async () => {
      while (queue.length) await task(queue.shift() as T);
    })
  );
}

const TRIVIA_CATEGORIES = [
  [9, "General Knowledge"],
  [17, "Science & Nature"],
  [18, "Computers"],
  [22, "Geography"],
  [23, "History"],
  [21, "Sports"],
  [11, "Film"],
  [15, "Video Games"],
] as const;

async function getTrivia() {
  const questions = [];

  for (const [id, category] of TRIVIA_CATEGORIES) {
    const response = await fetchOk(
      `https://opentdb.com/api.php?amount=30&type=multiple&encode=url3986&category=${id}`
    );
    const { response_code, results } = await response.json();
    if (response_code !== 0) throw new Error(`Open Trivia code ${response_code}`);

    for (const result of results) {
      questions.push({
        category,
        difficulty: result.difficulty,
        question: decodeURIComponent(result.question),
        correctAnswer: decodeURIComponent(result.correct_answer),
        incorrectAnswers: result.incorrect_answers.map(decodeURIComponent),
      });
    }
    // Open Trivia allows one request every five seconds
    await sleep(6000);
  }

  return questions.map((question, index) => ({ id: index + 1, ...question }));
}

async function getArt() {
  const params = new URLSearchParams({
    "query[bool][must][0][term][is_public_domain]": "true",
    "query[bool][must][1][term][is_boosted]": "true",
    "query[bool][must][2][exists][field]": "image_id",
    fields:
      "id,title,artist_title,date_display,medium_display,place_of_origin,credit_line,image_id,is_public_domain",
    limit: "48",
  });
  const response = await fetchOk(
    `https://api.artic.edu/api/v1/artworks/search?${params}`
  );
  const { data } = await response.json();
  const artworks = data.filter(
    (art: any) => art.is_public_domain === true && art.image_id
  );

  mkdirSync("public/images/art", { recursive: true });
  await inBatches<any>(artworks, 4, (art) =>
    saveImage(
      `https://www.artic.edu/iiif/2/${art.image_id}/full/843,/0/default.jpg`,
      `public/images/art/${art.id}.webp`,
      843
    )
  );

  return artworks.map((art: any) => ({
    id: art.id,
    title: art.title,
    artist: art.artist_title ?? "Unknown artist",
    date: art.date_display,
    medium: art.medium_display,
    place: art.place_of_origin,
    credit: art.credit_line,
    image: `/images/art/${art.id}.webp`,
  }));
}

async function getJokes() {
  const jokes = new Map<number, object>();
  const url =
    "https://v2.jokeapi.dev/joke/Programming,Misc,Pun,Spooky,Christmas?safe-mode&blacklistFlags=nsfw,religious,political,racist,sexist,explicit&amount=10";

  for (let call = 0; call < 25 && jokes.size < 120; call++) {
    const { error, jokes: batch } = await (await fetchOk(url)).json();
    if (error) throw new Error("JokeAPI returned an error");

    for (const joke of batch) {
      jokes.set(joke.id, {
        id: joke.id,
        category: joke.category,
        setup: joke.type === "twopart" ? joke.setup : joke.joke,
        punchline: joke.type === "twopart" ? joke.delivery : null,
      });
    }
    await sleep(700);
  }

  return Array.from(jokes.values());
}

async function getCards() {
  const suits = [
    ["S", "Spades"],
    ["H", "Hearts"],
    ["D", "Diamonds"],
    ["C", "Clubs"],
  ];
  const ranks = [
    ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"],
    ["8", "8"], ["9", "9"], ["0", "10"], ["J", "Jack"], ["Q", "Queen"],
    ["K", "King"], ["A", "Ace"],
  ];
  const cards = suits.flatMap(([suit, suitName]) =>
    ranks.map(([rank, rankName], index) => ({
      code: `${rank}${suit}`,
      name: `${rankName} of ${suitName}`,
      // aces are high
      rank: index + 2,
      image: `/images/cards/${rank}${suit}.webp`,
    }))
  );

  mkdirSync("public/images/cards", { recursive: true });
  await inBatches([...cards.map((card) => card.code), "back"], 6, (code) =>
    saveImage(
      `https://deckofcardsapi.com/static/img/${code}.png`,
      `public/images/cards/${code}.webp`,
      300
    )
  );

  return cards;
}

async function main() {
  const sources = {
    trivia: await getTrivia(),
    art: await getArt(),
    jokes: await getJokes(),
    cards: await getCards(),
  };

  for (const [name, content] of Object.entries(sources)) {
    writeFileSync(`data/${name}.json`, JSON.stringify(content, null, 2) + "\n");
    console.log(`${name}: ${content.length}`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
