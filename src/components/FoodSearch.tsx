type Props = {
    array: any[],
    handleAddButton: () => void
}

export const FoodData = ({array, handleAddButton}:Props) => {

    return (
        <>
            {array.map((food) => (

                <li key={food.id} className='p-4 border border-black/50 rounded-lg flex flex-col gap-2'>
                    <div>
                        <p className='capitalize font-bold text-2xl'>{food.nome}</p>
                        <input 
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
                        onClick={handleAddButton}
                        className='bg-blue-900 px-4 py-2 rounded-lg text-white font-bold'
                    >Adicionar</button>

                </li>
                ))}
        </>
    )
}