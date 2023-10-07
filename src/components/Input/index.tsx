'use client'
import { FormEvent, useState } from "react"
import { BsSearch } from 'react-icons/bs'
import { useRouter } from "next/navigation"


export function Input() {
    const [input, setInput] = useState("")
    const router = useRouter()


    function handleSearch(e: FormEvent) {
            e.preventDefault()
            if(input === "") return;

            router.push(`/game/search/${input}`)
    }

    return (
        <form onSubmit={handleSearch} className="w-full
        bg-slate-200 
        my-5 flex 
        gasp-2 
        items-center 
        justify-between
        rounded-lg
        p-2
        ">
            
            <input
                className={"bg-slate-200 outline-none w-11/12"}
                type="text"
                placeholder="Digite o nome de algum jogo"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                color="#000"
                
            />

            <button type="submit">
            <BsSearch size={24} />
            </button>
        </form>
    )
}