import { api } from '@/app/utils/api'
import { FoodType } from '@/types/food'
import { User } from '@/types/user' // Type 
import { useState } from 'react'

type Props = {
    user: User,
    getDate: () => void,
    mealTime: string,
    array: any[],
}

export const FoodSearch = ({user, getDate, mealTime, array}:Props) => {

    const [inputValues, setInputValues] = useState<{ [key: number]: number }>({});

    // Função para lidar com a mudança no input
    const handleInputChange = (id: number, value: number) => {
      setInputValues(prevValues => ({
        ...prevValues,
        [id]: value // atualiza o valor do input para o alimento com o id correspondente
      }));
    };

    const handleAddFood = (food_id:number) => {
        const gramas = inputValues[food_id]
        if(gramas == undefined || gramas == 0) return alert('digite um valor válido')

        try {

            const response = api.post('/user/consume/', {
                user_id: user.id,
                food_id,
                data_ingestao: getDate(),
                meal_time: mealTime,
                gramas
            })
            .then(function(response) {
                console.log("Success!")
                console.log(response)
            })

        } catch (error) {
            console.log(error)
        }

    }

    return (
        <>
            {array.map(food => (

                <li key={food.id} className='p-4 border border-black/50 rounded-lg flex flex-col gap-2'>
                    <div>
                        <p className='capitalize font-bold text-2xl'>{food.nome}</p>
                        <input 
                        value={inputValues[food.id] !== undefined ? inputValues[food.id] : ''} 
                        onChange={(e)=> handleInputChange(food.id, Number(e.target.value))}
                        type="number"
                        placeholder='Quantidade em gramas' 
                        className='w-full outline-none py-1 rounded-lg px-2 placeholder:text-sm placeholder:italic typeNumber placeholder:text-black/30'/>
                    </div>

                    <div className='ml-4 text-sm'>
                        <div className='flex gap-2 ' >
                            <p>Carboidratos:</p><p>{food.carboidratos}</p>
                        </div>
                        <div className='flex gap-2'>
                            <p>Gorduras:</p><p>{food.gorduras}</p>
                        </div>
                        <div className='flex gap-2'>
                            <p>Proteínas:</p><p>{food.proteinas}</p>
                        </div>
                    </div>

                    <button 
                        onClick={() => handleAddFood(food.id)}
                        className='bg-blue-900 px-4 py-2 rounded-lg text-white font-bold'
                    >Adicionar</button>

                </li>
                ))}
        </>
    )
}