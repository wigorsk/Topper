import { FoodType } from "@/types/food";

type Props = {
    onClick: () => void;
    kcal: string | undefined;
    carb: string | undefined;
    gord: string | undefined;
    prot: string | undefined;
}

const TotalsRow = ({ onClick, kcal, carb, gord, prot }: Props) => {

    const basis = 'basis-20 md:basis-28 lg:basis-44 text-xs sm:text-sm md:text-base';


    return (
        <tr className="flex items-center text-center bg-blue-950 text-neutral-100">
            <td className="flex-1 text-start">
            <button 
                onClick={onClick}
                className="px-5 md:px-10 py-2 text-xs sm:text-sm md:text-base" 
                >Adicionar</button>
            </td>
            <td className={`${basis}`}>{kcal}kcal</td>
            <td className={`${basis}`}>{carb}g</td>
            <td className={`${basis}`}>{gord}g</td>
            <td className={`${basis}`}>{prot}g</td>
            
        </tr>
    )
}

export default TotalsRow;