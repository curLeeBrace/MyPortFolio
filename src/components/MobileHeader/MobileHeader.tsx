import ShinyText from "../ShinyText/ShinyText"
import { motion, MotionValue } from "motion/react";
import {COLOR} from "../../utils/color_picker";

interface MobileHeaderProps {
    header_name : string
    setOpenSideNav : React.Dispatch<React.SetStateAction<boolean>>
    bg_color? : MotionValue<string>

}

const MobileHeader = ({header_name, setOpenSideNav, bg_color}:MobileHeaderProps) => {

    
    return(
          <motion.div className={`h-14 w-full pl-2 py-5 sticky top-0 flex items-center gap-4`} style={{backgroundColor : bg_color ? bg_color : COLOR.gray}}>
                <div className="w-8 h-9 active:bg-gray-700/50 rounded-full flex justify-center" onClick={()=> setOpenSideNav((prev:boolean)=> !prev)}>
                    <img src="/assets/ham_menu2.svg" className="ml-1"/>
                </div>
                
                <div className="mb-1">
                    <ShinyText text={`${header_name}`} speed={5} className="text-2xl"/>
                </div>
            </motion.div>
    )


}


export default MobileHeader