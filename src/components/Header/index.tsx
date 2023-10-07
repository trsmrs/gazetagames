import LogoImg from 'public/logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import { LiaGamepadSolid } from 'react-icons/lia'

export function Header() {
    return (
        <header className="w-full h-28 text-headertext px-2 bg-headerbg">
            <div className="max-w-screen-xl mx-auto flex justify-center items-center h-28 sm:justify-between">
                <nav className='flex justify-center items-center gap-4'>
                    <Link href='/'>
                        <Image
                            src={LogoImg}
                            alt='logo'
                            quality={100}
                            priority={true}
                            className='w-full'
                        />
                    </Link>

                    <Link href='/games'>
                        Games
                    </Link>

                    <Link href='/profile'>
                        Perfil
                    </Link>
                </nav>

                <div className='hidden sm:flex'>
                    <Link href='/profile'>
                    <LiaGamepadSolid 
                        size={34}
                        color="#21c328"
                    />
                    </Link>
                </div>
            </div>
        </header>
    )
}