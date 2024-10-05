type Props = {
    basis: string
}

export const InfosTable = ({ basis }:Props) => {
    
    return (
        <div className="flex text-center text-xs md:text-sm font-semibold mb-5 sm:mb-0">
            <h1 className="flex-1"></h1>
            <h1 className={`${basis}`}>quantidade</h1>
            <h1 className={`${basis}`}>carboidratos</h1>
            <h1 className={`${basis}`}>gorduras</h1>
            <h1 className={`${basis}`}>proteínas</h1>
        </div>
    )
}