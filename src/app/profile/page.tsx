import { Container } from "@/components/Container"
import Image from "next/image"
import { FaShareAlt } from 'react-icons/fa'
import userImg from 'public/user.png'

import { FavoritCard } from "./components/Favorite"

import { Metadata } from "next"


export const metadata: Metadata ={
    title: "Meu Perfil - sua plataforma de jogos!",
    description: 'Perfil Player 1 | GazetaGames'
}

export default function Profile() {
    return (
        <main className="w-full text-headertext">
            <Container>
                <section className="mt-8 mb-6 flex flex-col items-center justify-between relative gap-3 sm:flex-row">
                    <div className="w-full items-center gap-4 text-lg flex-col sm:flex-row justify-center sm:justify-normal">
                        <Image src={userImg}
                            alt="imagem user"
                            className="rounded-full w-36 h-36 object-cover"
                        />
                        <h1 className="font-bold text-2xl">Player 1</h1>
                    </div>
                    <div className="sm:absolute top-0 right-0 gap-3 flex items-center justify-center">
                        <button className="bg-headertext px-4 py-3 rounded-lg text-headerbg">
                            Configurações
                        </button>
                        <button className="px-4 py-3 rounded-lg">
                            <FaShareAlt size={24} color="#fff" />
                        </button>
                    </div>
                </section>

                <section className="flex flex-wrap gap-5 flex-col md:flex-row">

                    <div className="flex-grow flex-wrap">
                        <FavoritCard />
                    </div>

                    <div className="flex-grow flex-wrap">
                        <FavoritCard />
                    </div>

                    <div className="flex-grow flex-wrap">
                        <FavoritCard />
                    </div>

                </section>

            </Container>
        </main>
    )
}