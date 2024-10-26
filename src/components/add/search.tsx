type Props = {
    user: User,
    mealTime: string,
    onClick: () => void,
}

import { Cross1Icon } from '@radix-ui/react-icons';
import { useContext, useState } from 'react';
import { api } from '@/app/utils/api';
import { Infos } from './infos';
import { User } from '@/types/user';
import { TableContext } from '@/contexts/tableContext';

const Search = ( { user, mealTime, onClick }: Props) => {

    const { getDate } = useContext(TableContext);

    const [search, setSearch] = useState<string>('');
    const [error, setError] = useState<string>('');
    
    const [list, setList] = useState<any[]>([]);

    const handleAddButton = async () => {

        try {
            const response = await api.get('/food/', {
                params: {
                    nome: search
                }
            });

            if (response.data.status && Array.isArray(response.data.data)) {
                setList(response.data.data); 
                setError('')
            }
        } 
        catch (error) {
            setError('Alimento não encontrado!');
            setList([]);
        }
    }

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="w-full sm:w-3/4 lg:w-2/4 h-3/4 pb-10 bg-neutral-100 flex flex-col items-center">

            <div className="w-full flex justify-end">
              <button className="p-2" onClick={onClick}>
                <Cross1Icon className="size-6"/>
              </button>
            </div>
            
            <div className="grid grid-cols-3 px-5">

                <input 
                    type="text" 
                    placeholder="Pesquisar alimento"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)} 
                    className="text-sm md:text-base px-2 py-1 col-span-2 outline-none bg-transparent border-b border-neutral-950"
                />

                <button 
                    type='submit'
                    onClick={handleAddButton}
                    className='text-sm md:text-base bg-blue-900 mx-2 px-2 md:px-4 py-2 md:py-1 rounded-lg text-white font-bold'
                >buscar</button>

                <p className="text-xs text-center pt-2 col-span-3">Os macronutrientes levam em consideração uma quantidade base de 50g.</p>

            </div>


            {error && <div className='h-full w-full flex items-center justify-center'><p>{error}</p></div>}

            {list &&
                <ul className='mt-5 w-full overflow-y-scroll grid grid-cols-3 gap-5 px-5'>
                    <Infos
                        user={user}
                        getDate={getDate}
                        mealTime={mealTime}
                        array={list}
                    />
                </ul>
            }
            
          </div>
        </div>
    )
}

export default Search;