import { HamburgerMenuIcon, Cross1Icon } from '@radix-ui/react-icons';
import { useState } from "react";

type Props = {
    username: string
}


export const Header = ( { username }: Props) => {

    return (
        <div className="w-screen h-24 bg-blue-950 flex">
            <div className='container mx-auto flex items-center justify-between text-white text-2xl font-bold'>
            <div className='flex items-center gap-4'>
                {/* <div className="w-16 h-16 rounded-full bg-neutral-100 hover:cursor-pointer"></div> */}
                <h1 className='flex gap-2'><p className='font-normal'>olá,</p> {username}</h1>
            </div>

            <h1>Nutriclick</h1>
            </div>
        </div>
    )
}