import { Cross1Icon } from '@radix-ui/react-icons';
import { ReactNode } from "react";

type Props = {
    children: ReactNode,
    onClick: () => void
}

export const Popup = ({ children, onClick }:Props) => {
    return (
        <tr>
            <td>
                <div className="absolute top-0 left-0 w-full h-screen bg-black/50 flex items-center justify-center">
                    <div className="w-80 p-2 bg-neutral-100">

                        <div className="w-full flex justify-end">
                            <button className="p-2" onClick={onClick}>
                                <Cross1Icon className="size-6"/>
                            </button>
                        </div>

                        {children}
                    </div>
                </div>
            </td>
        </tr>
        
    )
}