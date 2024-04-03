<h1 id="title" align="center">Random Stuff</h1>

<p align="center"><img src="./public/screenshots/Pass The Time.png" alt="project-image"></p>

<p id="description">Discover the unexpected with Random Stuff a dynamic Next.js creation that brings together a medley of functionalities from diverse external APIs. Dive into interactive experiences from classic games like rock-paper-scissors to browsing delicious recipes sourced from TheMealDB. With a focus on accessibility and SEO Random Stuff serves up an array of engaging activities seamlessly persisting user interactions in a robust database. Embrace the randomness and explore a world of endless possibilities all in one captivating website. Plus enjoy the convenience of its progressive web app (PWA) capabilities for enhanced accessibility on the go.</p>

<h2>🚀 Demo</h2>

[https://random-stuff-one.vercel.app/](https://random-stuff-one.vercel.app/)

<h2>Project Screenshots:</h2>

<img src="./public/screenshots/Pass The Time-1.png" alt="project-screenshot" width="1366" height="655/">

<img src="./public/screenshots/Pass The Time-10.png" alt="project-screenshot" width="1366" height="655/">

<img src="./public/screenshots/Pass The Time-8.png" alt="project-screenshot" width="1366" height="655/">

<img src="./public/screenshots/Pass The Time-3.png" alt="project-screenshot" width="1366" height="655/">



<h2>🧐 Features</h2>

Here're some of the project's best features:

*   Responsive and interactive web application
*   Explore different kinds of fruit and information on them
*   Play Rock Paper Scissors with 101 objects aginst the computer
*   Explore hunderds of poems and recipes
*   Consume external APIs to provide different functionaity

<h2>📦 Requirements</h2>

* [Bun (Interoparable with Node.js)](https://bun.sh/)
* [Code Editor](https://code.visualstudio.com/)
* [PostgreSQL database](https://www.postgresql.org/)
* [Typescript](https://www.typescriptlang.org/download)

<h2>🔒 Environment variables</h2>

<p>Add the following variable to `.env` at the root of the project

    DATABASE_URL="Connection to database via connection pooling"
    DIRECT_URL="Direct connection to the database"

<h2>🗃 Fill database with data</h2>

<p>The app consumes external APIs to generate different user interfaces. Run the following to generate data:</p>

* Fill fruits
```bash
bunx tsc data/seedFruits.ts && node data/seedFruits.js
```

* Fill Rock, Paper, Scissors
```bash
bunx tsc data/seedRPS.ts && node data/seedRPS.js
```

* Fill recipes
```bash
bunx tsc data/seedRecipes.ts && node data/seedRecipes.js
```

* Fill poems
```bash
bunx tsc data/seedPoems.ts && node data/seedPoems.js
```

<h2>🛠️ Installation Steps:</h2>

<p>1. Clone this repo</p>

```
git clone https://github.com/mdesignscode/passthetime/
```

<p>2. Change directory</p>

```
cd passthetime
```

<p>3. Start development server</p>

```
bun run dev
```



<h2>💻 Built with</h2>

Technologies used in the project:

*   Next.js
*   Typescript
*   React
*   Framer Motion
*   Prismajs
*   PostgreSQL

<h2>🛡️ License:</h2>

This project is licensed under the MIT
