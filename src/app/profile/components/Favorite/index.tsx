'use client'
import { useState } from 'react'
import { FiEdit, FiX, FiPlus } from 'react-icons/fi'

export function FavoritCard() {
    const [input, setInput] = useState("")
    const [showInput, setShowInput] = useState(false)
    const [gameName, setGameName] = useState('')


    function handleButton() {
        setShowInput(!showInput)

        if (input !== '') {
            setGameName(input)
        }

        setInput('')
    }

    return (
        <div className="w-full p-4 h-44 bg-headertext text-headerbg rounded-lg flex justify-between flex-col">
            {showInput ? (
                <div className='flex items-center justify-center gap-3'>
                    <input className='w-full rounded-md h-8 bg-headerbg text-headertext px-2'
                        autoFocus
                        type='text'
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        
                    />

                    {!input ? (
                        <button onClick={handleButton}>
                            <FiX size={24} color="#000" />
                        </button>

                    ) :
                        <button onClick={handleButton}>
                            <FiPlus size={24} color="#000" />
                        </button>
                    }
                </div>
            ) :
                <button className='self-start hover:scale-110 duration-200 transition-all'
                    onClick={handleButton}
                >
                    <FiEdit size={24} color='#000' />
                </button>
            }
            {gameName && (
                <div>
                    <span className='text-headerbg'>Jogo Favorito:</span>
                    <p className='font-bold text-headerbg'>{gameName}</p>
                </div>
            )}
            {!gameName && (
                <p className='font-bold text-headerbg'>Adicionar Jogo</p>
            )}
        </div >
    )
}