import { useEffect, useState } from "react";


interface ModalProps {
    children : React.ReactNode
    setShow : React.Dispatch<React.SetStateAction<boolean>>

}
const Modal = ({children, setShow}:ModalProps) => {
    
   const [vissible, setVissible] = useState(false)

   useEffect(()=>{
    document.body.style.overflowY = "hidden";
    setVissible(true)

    return ()=>{
        document.body.style.overflowY = "auto";
    }

    },[])

    return(
        <div className="fixed z-50 top-0 left-0 flex flex-col w-full h-full justify-center items-center bg-black/80 px-[10px]">
            
           

            <div className={`${vissible ? "relative translate-y-0 opacity-100 w-full transition-all max-w-[800px] delay-200 ease-in" : "-translate-y-5 opacity-0"}`}>
                {children}
            
                <div className="absolute -top-10 right-3 text-4xl cursor-pointer hover:text-royal-purple"
                    onClick={()=>{
                        setShow(false)
                    }}
                >x</div>
            </div>
        </div>
    )
}


export default Modal