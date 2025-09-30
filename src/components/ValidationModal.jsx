import {useRef, useImperativeHandle} from 'react';
import { createPortal } from 'react-dom';

export default function ValidationModal({ref,children}){
    const dialog = useRef();

    useImperativeHandle(ref,()=>{
        return {
            open() {
                dialog.current.showModal();
            }
        }
    });

    return createPortal(<dialog className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md" ref={dialog}>
        {children}
        <form method="dialog">
            <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Close</button>
        </form>
    </dialog>,
    document.getElementById("modal-root")
    )
}