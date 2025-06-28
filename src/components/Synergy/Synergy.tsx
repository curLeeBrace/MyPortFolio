import { useEffect, useState } from "react";
import CircularLogo from "../CircularLogo/CircularLogo";

interface SynergyProps {
    img_src : string;
    title:string;
    rate : number;

}


const Synergy = ({img_src, title, rate}:SynergyProps) => {

  
    const ratio = rate/10
     const [width, setWidth] = useState('0%');

    useEffect(() => {
        const percent = `${ratio * 100}%`;
        setTimeout(() => setWidth(percent), 50); // triggers transition
    }, []);

    
    return(
        <div className= {`w-full h-full min-w-[100px] flex gap-6`}>

            <div className="flex-[8%] shrink-0 flex justify-center ">
                <CircularLogo
                    src= {img_src}
                    size="100%"
                    padding={10}
                   
                />
            </div>

            <div className="flex-3/5 min-w-[200px] h-full relative flex flex-col justify-center">
            
                {/* Title and Rate*/}
                <div className="text-start mb-[5px] ml-[10px]">
                    <span>
                        <span className="text-lg font-semibold ">{title}</span> <span className="text-white/80">{rate}/10</span>
                    </span>

                </div>

                {/* Progressive Bar */}
                <div className="border-2 rounded-2xl p-1 h-[40%]">
                    <div className={`bg-royal-purple h-full rounded-2xl transition-all duration-700 ease-in-out shadow-[0_0_20px_5px_rgba(126,34,206,0.6)]`}
                        style={{
                            width: rate > 10 ?"100%" : width 
                        }}
                    >

                    </div>
                </div>

            </div>
        </div>
    )
}




export default Synergy

