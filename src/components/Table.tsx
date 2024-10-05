
type Props = {
    mealTime: string
}

import { SearchPopup } from '@/components/SearchPopup';
import { useState } from 'react';

export const Table = ({ mealTime }:Props ) => {

    const [popup, setPopup] = useState<boolean>(false);
    const handleSearchPopup = () => {
    setPopup(!popup);
    }

    const handleExpandFood = () => {
        alert('foi')
    }

  const basis = 'basis-20 md:basis-28 lg:basis-44'

    return (
        <div>

            <table className="flex flex-col">
                
                {/* Período da Refeição */}
                <thead className="font-bold text-sm sm:text-lg md:text-xl xl:text-2xl">
                <tr><th className="flex-1 text-start">{mealTime}</th></tr>
                </thead>

                {/* Body */}
                <tbody className="flex flex-col gap-2">

                {/* Alimento Adicionado */}
                    <tr className="py-2 flex items-center text-center bg-neutral-300 text-neutral-950">
                        <td className="flex-1 text-start ml-5 md:ml-10 text-xs sm:text-sm md:text-base line-clamp-1">Nome do alimento</td>
                        <td className={`${basis}`}>...</td>
                        <td className={`${basis}`}>...</td>
                        <td className={`${basis}`}>...</td>
                        <td className={`${basis}`}>...</td>
                    </tr>

                    {/* Button de Adicionar Comida */}
                    <tr className="flex items-center text-center bg-blue-950 text-neutral-100">
                        <td className="flex-1 text-start">
                        <button 
                            onClick={handleSearchPopup}
                            className="px-5 md:px-10 py-2 text-xs sm:text-sm md:text-base" 
                            >Adicionar</button>
                        </td>
                        <td className={`${basis}`}>...</td>
                        <td className={`${basis}`}>...</td>
                        <td className={`${basis}`}>...</td>
                        <td className={`${basis}`}>...</td>
                    </tr>
                
                </tbody>

            </table>

            {popup && 
                <SearchPopup 
                mealTime={mealTime}
                onClick={handleSearchPopup}
                />
            }

        </div>
)}