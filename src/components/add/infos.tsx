import { api } from '@/app/utils/api'
import { User } from '@/types/user'
import { useEffect, useState } from 'react'

type Props = {
    user: User,
    getDate: () => void,
    mealTime: string,
    array: any[],
}

export const Infos = ({user, getDate, mealTime, array}:Props) => {

    const [inputValues, setInputValues] = useState<{ [key: number]: number }>({});

    const handleInputChange = (id: number, value: number) => {
      setInputValues(prevValues => ({
        ...prevValues,
        [id]: value 
      }));
    };

    const [AddedFood, setAddedFood] = useState<boolean>(false);
    const [hasError, setHasError] = useState<boolean>(false)
    const handleAddFood = async (food_id:number) => {
        const gramas = inputValues[food_id]
        if(gramas == undefined || gramas == 0) {
            setHasError(!hasError)
            setTimeout(() => {
                setHasError(false)
            }, 2000)
            return
        }

        try {
            const response = await api.post('/user/consume/', {
                user_id: user.id,
                food_id: food_id,
                data_ingestao: getDate(),
                meal_time: mealTime,
                gramas: gramas,
            })
            handleInputChange(food_id, 0)
            if(response.status === 201) {
                setAddedFood(!AddedFood)
                setTimeout(() => {
                    setAddedFood(false)
                }, 2000)
            }
        } 
        catch (error) {
            console.log(error)
        }

    }

    const [textButton, setTextButton] = useState('');
    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
        
            if (width < 640) {
                setTextButton('Adc');
            } else {
                setTextButton('Adicionar');
            } 
        };

        handleResize()    

        window.addEventListener('resize', handleResize);
    }, [])

    return (
        <>
            {array.map(food => (

                <li key={food.id} className='p-4 border border-black/50 rounded-lg flex flex-col justify-between gap-2'>
                    <div>
                        
                        <p className='capitalize font-bold text-xs sm:text-sm md:text-base lg:text-xl '>{food.nome}</p>
                       
                        <input 
                        value={inputValues[food.id] === undefined || inputValues[food.id] == 0 ? '' : inputValues[food.id]} 
                        onChange={(e)=> handleInputChange(food.id, Number(e.target.value))}
                        type="number"
                        placeholder='Gramas' 
                        className={`w-full outline-none py-1 rounded-lg px-2 placeholder:text-xs placeholder:text-black/30}
                        md:placeholder:text-sm placeholder:italic typeNumber`}/>
                    </div>

                    <div className='md:ml-2 xl:ml-4 text-xs md:text-sm'>
                        
                        <div className='grid grid-cols-1 sm:flex py-1 sm:py-0 sm:gap-2 truncate' >
                            <p>Carboidratos:</p>
                            <p>{food.carboidratos}</p>
                        </div>

                        <div className='grid grid-cols-1 sm:flex py-1 sm:py-0 sm:gap-2 truncate'>
                            <p>Gorduras:</p>
                            <p>{food.gorduras}</p>
                        </div>

                        <div className='grid grid-cols-1 sm:flex py-1 sm:py-0 sm:gap-2 truncate'>
                            <p>Proteínas:</p>
                            <p>{food.proteinas}</p>
                        </div>

                    </div>

                    <button 
                        onClick={() => handleAddFood(food.id)}
                        className='bg-blue-900 text-xs md:text-base px-2 md:px-4 py-2 rounded-lg text-white font-bold'
                    >{textButton}</button>

                </li>
                ))}

                {AddedFood && 
                    <div className='absolute bottom-10 right-10 px-4 py-2 bg-amber-600 border border-black text-neutral-100 font-bold'>
                        Alimento adicionado!
                    </div>
                }

                {hasError && 
                    <div className='absolute bottom-10 right-10 px-4 py-2 bg-red-800 border border-black text-neutral-100 font-bold'>
                        Adicione um valor válido!
                    </div>
                }
        </>
    )
}