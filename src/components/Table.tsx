"use client"

import FoodRow from '@/components/table/foodRow';

import { useContext, useEffect, useState } from 'react';

import { User } from '@/types/user' // Type 
import { TableContext } from '@/contexts/tableContext';

import Thead from './table/thead';
import TotalsRow from '@/components/table/totalsRow';
import Search from './add/search';
import { FoodType } from '@/types/food';

interface Macronutrientes {
    calorias: number;
    carboidratos: number;
    gorduras: number;
    proteinas: number;
}

export const Table = ({user, mealTime }: {user: User, mealTime: string}) => {
    
    const { refreshTable, expense, list } = useContext(TableContext);
    
    useEffect(()=> {
        refreshTable()
    }, [user])

    const [searchModal, setSearchModal] = useState<boolean>(false);
    useEffect(() => {
        if (searchModal) {
            document.body.style.overflow = 'hidden'
        }

        return () => {
            document.body.style.overflow = '';
            refreshTable()
        }

    }, [searchModal])

    const [totals, setTotals] = useState<Macronutrientes | null>(null);
    useEffect(() => {

        if (list == null || list.length <= 0) return

        const soma = (list: FoodType[]): Macronutrientes => {
            return list.reduce<Macronutrientes>((acumulador, food) => {
                    acumulador.calorias += food.calorias;
                    acumulador.carboidratos += food.carboidratos;
                    acumulador.gorduras += food.gorduras;
                    acumulador.proteinas += food.proteinas;
                    return acumulador;
                }, { calorias: 0, carboidratos: 0, gorduras: 0, proteinas: 0 });
        };
            
        const newList = list.filter((food) => food.meal_time == mealTime)
        setTotals( soma(newList) );

        const kcalTotal = list.reduce((acumulador, food) => {
            return acumulador + food.calorias
        }, 0 ) 

        expense(kcalTotal)
        
    }, [list]);

    

    return (
        <>  

            <table className="flex flex-col">
                <Thead mealTime={mealTime}/>
                <tbody className='flex flex-col gap-2'>

                    {list !== null && list.map((item) => mealTime == item.meal_time ? (
                        <FoodRow 
                            key={item.id_consume}
                            meal_time={mealTime}
                            consume_id={item.id_consume}
                            foodName={item.nome}
                            gramas={item.gramas}
                            calorias={item.calorias}
                            carboidratos={item.carboidratos}
                            gorduras={item.gorduras}
                            proteinas={item.proteinas}
                        />
                    ) : null )}

                    <TotalsRow 
                        kcal={totals?.calorias.toFixed(2)}
                        carb={totals?.carboidratos.toFixed(2)}
                        gord={totals?.gorduras.toFixed(2)}
                        prot={totals?.proteinas.toFixed(2)}
                        onClick={() => setSearchModal(!searchModal)} 
                    /> 

                </tbody>
            </table>

            {searchModal && 
                <Search
                    user={user}
                    mealTime={mealTime}
                    onClick={() => setSearchModal(!searchModal)}
                />
            }
        </>
    )
}