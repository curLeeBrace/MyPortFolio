import { COLOR } from "../../utils/color_picker";
import StarBorder from "../StarBorder/StarBorder";

export interface DialogBoxProps {
    dialog_title : string;
    dialog_content : React.ReactNode;
    handleOnclick : () => void;

}

const DialogBox = ({dialog_content, dialog_title, handleOnclick} : DialogBoxProps) => {
    return(
                <div className="w-full flex flex-col bg-dark-gray items-center border-royal-purple border-[2px] shadow-2xl gap-10 py-[10px]">

                    <div className="w-[70%] text-center border-b-[2px] p-[5px] font-semibold text-2xl pb-[15px] mt-[20px]">{dialog_title}</div>
                    
                    <div className="text-wrap max-w-[250px]">
                        {dialog_content}
                    </div>

                    <div 
                        className="px-[5px] cursor-pointer w-[30%]"
                        onClick={()=>handleOnclick()}
                    >
                        <StarBorder
                            as="button"
                            className="w-full cursor-pointer"
                            speed="3s"
                            thickness={4}
                            color={COLOR["royal-purple"]}
                          
                        >
                            OK
                        </StarBorder>
                    </div>

                </div>

    )
}


export default DialogBox