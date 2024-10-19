const Thead = ({ mealTime }: { mealTime:string }) => {
    return (
        <thead className="font-bold text-sm sm:text-lg md:text-xl xl:text-2xl">
            <tr><th className="flex-1 text-start">{mealTime}</th></tr>
        </thead>
    )
}

export default Thead;