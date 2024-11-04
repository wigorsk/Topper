import { InstagramLogoIcon } from '@radix-ui/react-icons';
import Link from 'next/link';


const Footer = () => {
    return (
        <div className="w-full h-60 bg-neutral-950 text-neutral-400 flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold">Nutriclick</h1>
            <h3 >Projeto Extensionista da FSG</h3>
            <p className="text-xs italic mt-5">Trabalho desenvolvido por:</p>
           
           <div className='flex gap-5 pt-2'>
                <Link href={'https://www.instagram.com/wigorsk/'} target='blank' rel='noopener noreferrer'>
                    <div className='flex items-center gap-1 underline cursor-pointer'>
                            <p className='text-sm'>@wigorsk</p>
                            <InstagramLogoIcon className='size-4'/>
                    </div>
                </Link>

                <Link href={'https://www.instagram.com/murilin_u.u/'} target='blank' rel='noopener noreferrer'>
                    <div className='flex items-center gap-1 underline cursor-pointer'>
                            <p className='text-sm'>@murilin_u.u</p>
                            <InstagramLogoIcon className='size-4'/>
                    </div>
                </Link>

                <Link href={'https://www.instagram.com/laralahm_/'} target='blank' rel='noopener noreferrer'>
                    <div className='flex items-center gap-1 underline cursor-pointer'>
                            <p className='text-sm'>@laralahm_</p>
                            <InstagramLogoIcon className='size-4'/>
                    </div>
                </Link>
            </div>

        </div>
    )
}

export default Footer;