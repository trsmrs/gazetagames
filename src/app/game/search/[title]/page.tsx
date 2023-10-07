import { Input } from "@/components/Input"
import { Container } from "@/components/Container"
import { GameProps } from "@/utils/types/game"
import { GameCard } from "@/components/GameCard"


async function getData(title: string) {

    try {
        const decode = decodeURI(title)

        const res = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=game&title=${decode}`)
        return res.json()

    } catch (error) {
        return null
    }
}


export default async function Search({
    params: { title }
}: {
    params: { title: string }
}) {

    const games: GameProps[] = await getData(title)

    return (
        <main className="w-full">
            <Container>
                <Input />
                <h1 className="font-bold text-headertext text-xl mt-8 mb-5">Veja oque encontramos para você: </h1>
                {!games &&
                    (
                        <p className="text-headertext">Este jogo não foi encontrado...</p>
                    )
                }
                <section className='grid gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                    {games && games.map((item) => (
                        <GameCard key={item.id}
                            data={item}
                        />
                    ))}
                </section>
            </Container>
        </main>
    )
}