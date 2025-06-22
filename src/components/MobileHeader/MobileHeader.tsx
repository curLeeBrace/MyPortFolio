import { useState, type SetStateAction } from "react";
import ShinyText from "../ShinyText/ShinyText"

interface MobileHeaderProps {
    header_name : string
    setOpenSideNav : React.Dispatch<React.SetStateAction<boolean>>
}

const MobileHeader = ({header_name, setOpenSideNav}:MobileHeaderProps) => {

    
    return(
          <div className="h-14 bg-gray sticky top-0 flex items-center gap-4">
                <div className="ml-2 w-12 h-12 active:bg-gray-700/50 rounded-full flex justify-center" onClick={()=> setOpenSideNav((prev:boolean)=> !prev)}>
                    <img src="/assets/ham_menu2.svg" className="ml-1"/>
                </div>
                
                <div className="mb-1">
                    <ShinyText text={`{ ${header_name} }`} speed={5} className="text-3xl"/>
                </div>
            </div>
    )


}


export default MobileHeader