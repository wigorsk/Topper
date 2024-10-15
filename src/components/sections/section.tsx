import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { useState } from "react";

const Section = () => {

    const [currentDate, setCurrentDate] = useState(new Date());

    const formatDate = (date: Date) => {
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        return `${day}/${month}`;
    };

    const moveDate = (days: number) => {
        const newDate = new Date(currentDate);
        newDate.setDate(currentDate.getDate() + days); 
        setCurrentDate(newDate);
    };
    
    return (
        <div className="flex items-center gap-4 text-2xl font-bold"> 

            <button 
                onClick={() => moveDate(-1)} >
                    <ChevronLeftIcon className="size-10 hover:text-black/70"/>
            </button>

                <h1>{formatDate(currentDate)}</h1>  

            <button 
                onClick={() => moveDate(+1)} >
                    <ChevronRightIcon className="size-10 hover:text-black/70"/>
            </button>

        </div>
    )
}

export default Section;