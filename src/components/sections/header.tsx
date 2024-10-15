const Header = ( { username }: { username: string } ) => {

    return (
        <div className="w-full py-8 bg-blue-950 text-white text-2xl font-bold">

            <div className='container mx-auto flex justify-between'>
            
                <div className='flex gap-2'><p className='font-normal'>olá,</p> {username}</div>
                <h1>Nutriclick</h1>
            
            </div>

        </div>
    )
}

export default Header;