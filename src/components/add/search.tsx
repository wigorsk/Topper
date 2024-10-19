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
                    onChange={(e) => setSearch(e.target.value)} 
                    className="px-2 py-1 outline-none bg-transparent border-b border-neutral-950"
                />

                <button 
                    type='submit'
                    onClick={handleAddButton}
                    className='bg-blue-900 px-4 rounded-lg text-white font-bold'
                >buscar</button>

            </div>

            <p className="text-xs pt-2">Os macronutrientes levam em consideração uma quantidade base de 50g.</p>

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