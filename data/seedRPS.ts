/* Rock, Paper, Scissors 101 */

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

interface IRPSMatch {
  name: string;
  action: string;
}

interface IRockPaperScissors {
  name: string;
  winningMatches: IRPSMatch[]
}

async function main() {
  const url = "https://rps101.pythonanywhere.com/api/v1/objects/",
    request = await fetch(url + "all"),
    // get all objects
    allObjects: string[] = await request.json(),
    objectOutcomes: IRockPaperScissors[] = []

  // get object data for each object
  for (const object of allObjects) {
    const getObject = await fetch(url + object),
      playObject = await getObject.json(),
      winningOutcomes: Array<[string, string]> = playObject['winning outcomes'],
      winningMatches: IRPSMatch[] = []

    // create winning outcomes
    for (const outcome of winningOutcomes) {
      const upperCaseAction = outcome[0].charAt(0).toUpperCase() + outcome[0].slice(1),
        action = outcome[0] === "-" ? "Overpowers" : upperCaseAction
      winningMatches.push({
        action, name: outcome[1]
      })
    }

    objectOutcomes.push({
      name: object, winningMatches
    })
  }

  for (const object of objectOutcomes) {
    const RPSObject = await prisma.rockPaperScissor.create({
      data: {
        name: object.name,
        winningMatches: {
          create: object.winningMatches
        }
      }
    })

    console.log(RPSObject)
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
