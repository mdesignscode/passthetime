import prisma from "../lib/prisma";

async function main() {
    const req = await fetch("https://www.fruityvice.com/api/fruit/all"),
        res = await req.json();

    res.forEach(async (fruit: any) => {
        const { nutritions } = fruit
        delete fruit.nutritions

        console.log(await prisma.fruit.create({

            data: {
                ...fruit,
                nutritions: {
                    create: nutritions
                }
            },

        }))
    })

}

main()
    .then(async () => {
        console.log("Fruits table seeded")
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
