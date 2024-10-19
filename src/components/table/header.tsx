export const Header = () => {
    
    const basis = 'basis-20 md:basis-28 lg:basis-44 text-xs sm:text-sm md:text-base';

    return (
        <div className="flex text-center font-semibold">
            <h1 className="flex-1"></h1>
            <h1 className={`${basis}`}>calorias</h1>
            <h1 className={`${basis}`}>carboidratos</h1>
            <h1 className={`${basis}`}>gorduras</h1>
            <h1 className={`${basis}`}>proteínas</h1>
        </div>
    )
}