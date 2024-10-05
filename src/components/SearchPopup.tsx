type Props = {
    mealTime: string,
    onClick: () => void,
    handleAddButton: () => void
}

import { Cross1Icon } from '@radix-ui/react-icons';
import { useState } from 'react';
import { api } from '@/app/utils/api';
import { FoodData } from './FoodSearch';

export const SearchPopup = ( { mealTime, onClick, handleAddButton }: Props) => {

    const [search, setSearch] = useState<string>('');
    const [foodList, setFoodList] = useState<any[]>([]);
    const [error, setError] = useState<string>('');

    const handleSearchButton = async () => {

        try {
            const response = await api.get('/food/', {
                params: {
                    nome: search
                }
            });

            if (response.data.status && Array.isArray(response.data.data)) {
                setFoodList(response.data.data); 
                setError('')
            } else {
                setError('A resposta não contém dados válidos.');
            }

        } catch (error) {
            setError('Alimento não encontrado!');
            setFoodList([]);
        }
    }


    return (
        <div className="absolute top-0 left-0 w-screen h-screen bg-black/50 flex items-center justify-center">
          <div className="w-2/4 h-3/4 pb-10 bg-neutral-100 flex flex-col items-center">

            <div className="w-full flex justify-end">
              <button className="p-2" onClick={onClick}>
                <Cross1Icon className="size-6"/>
              </button>
            </div>
            
            <div className="flex gap-5">

                <input 
                type="text" 
                placeholder="Pesquisar alimento"
                value={search}
                onChange={(e => setSearch(e.target.value))} 
                className="px-2 py-1 outline-none bg-transparent border-b border-neutral-950"
                />

                <button 
                type='submit'
                onClick={handleSearchButton}
                className='bg-blue-900 px-4 rounded-lg text-white font-bold'
                >buscar</button>

            </div>

            <p className="text-xs mt-2">Os macronutrientes levam em consideração uma quantidade base de 50g.</p>

            {error && <div className='h-full w-full flex items-center justify-center'><p>{error}</p></div>}

            {foodList &&
                <ul className='mt-5 w-full overflow-y-scroll grid grid-cols-3 gap-5 px-5'>

                    <FoodData 
                        array={foodList}
                        handleAddButton={handleAddButton}
                    />
                </ul>
            }
            
          </div>
        </div>
    )
}