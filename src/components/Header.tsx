import Link from "next/link";
import { HamburgerMenuIcon, Cross1Icon } from '@radix-ui/react-icons';
import { useState } from "react";


export const Header = () => {

    const [hamburguer, setHamburguer] = useState<boolean>(false)

    const clickMenu = () => {
        setHamburguer(!hamburguer)
    }

    return (
        <div className="w-screen h-24 bg-blue-950 flex items-center justify-between px-10">

            <div className="w-16 h-16 rounded-full bg-neutral-100 hover:cursor-pointer"></div>

            <button onClick={clickMenu} className="md:hidden flex items-center justify-center"><HamburgerMenuIcon className="text-white size-12"/></button>
            
            {hamburguer &&
                <div className="absolute left-0 top-0 h-full w-full  flex justify-end md:hidden bg-black/50">

                    <div className="bg-blue-950 flex flex-col gap-10 items-center p-5 text-neutral-100 text-2xl font-bold">
                        <button onClick={clickMenu} className="p-5"><Cross1Icon  className="size-8 w-full"/></button>
                        <Link href={""}>Home</Link>
                        <Link href={"/meal"}>Refeições</Link>
                        <Link href={"/about"}>Sobre</Link>
                    </div>

                </div>
            }

            <nav className="text-2xl font-bold text-neutral-100 hidden gap-10 md:flex">  
                <Link href={""}>Home</Link>
                <Link href={"/meal"}>Refeições</Link>
                <Link href={"/about"}>Sobre</Link>
            </nav>

        </div>
    )
}