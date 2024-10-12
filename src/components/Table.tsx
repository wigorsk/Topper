import { SearchPopup } from '@/components/SearchPopup';
import { FoodTable } from '@/components/FoodTable';

import { api } from '@/app/utils/api'
import { useEffect, useState } from 'react';

import { User } from '@/types/user' // Type 
import { FoodType } from '@/types/food' // Type 

type Props = {
    user: User,
    mealTime: string
}

export const Table = ({user, mealTime }:Props ) => {

    const [list, setList] = useState<FoodType[]>([])

    const getDate = () => {
        const date = new Date()

        const ano = date.getFullYear();
        const mes = (date.getMonth() + 1).toString().padStart(2, '0');
        const dia = date.getDate().toString().padStart(2, '0');

        return `${ano}-${mes}-${dia}`;

    }

    const refreshTable = async () => {
        if (!user) {
            console.warn("Usuário não definido. Não é possível buscar dados.");
            return;
        }
        
     
        try {
            const response = await api.get(`user/consume/`, {
                params: {
                    user_id: user.id,
                    data_ingestao: getDate()
                }    
            });
    
            setList(response.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if(user) {
            refreshTable()
        }
    }, [user])
    
    const [popup, setPopup] = useState<boolean>(false);
    const handleSearchPopup = () => {
        setPopup(!popup);
    }

    const closePupup = () => {
        setPopup(!popup);
        refreshTable();
    }

    const basis = 'basis-20 md:basis-28 lg:basis-44';

    return (
        <div>

            <table className="flex flex-col">
                
                <thead className="font-bold text-sm sm:text-lg md:text-xl xl:text-2xl">
                    <tr><th className="flex-1 text-start">{mealTime}</th></tr>
                </thead>

                <tbody id={mealTime} className="flex flex-col gap-2">
                    
                    {/* MOSTRA OS ALIMENTOS ADICIONADOS NA LISTA */}
                    {list.map((item, index) => 
                        mealTime == item.meal_time ? (
                        <FoodTable 
                        key={index}
                        foodName={item.nome}
                        gramas={item.gramas}
                        calorias={item.calorias}
                        carboidratos={item.carboidratos}
                        gorduras={item.gorduras}
                        proteinas={item.proteinas}
                        />
                    )   : null )}

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
                user={user}
                getDate={getDate}
                mealTime={mealTime}
                onClick={closePupup}
                />
            }

        </div>
)}