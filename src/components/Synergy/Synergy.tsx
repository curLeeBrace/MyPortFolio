import { useEffect, useState } from "react";
import CircularLogo from "../CircularLogo/CircularLogo";

interface SynergyProps {
    img_src : string;
    title:string;
    rate : number;
    years_ofExp : string;

}


const Synergy = ({img_src, title, rate, years_ofExp}:SynergyProps) => {

  
    const ratio = rate/10
     const [width, setWidth] = useState('0%');

    useEffect(() => {
        const percent = `${ratio * 100}%`;
        setTimeout(() => setWidth(percent), 50); // triggers transition
    }, []);

    
    return(
        <div className= {`w-full h-full xs:min-w-[100px] md:min-w-[350px] flex gap-3`}>

            <div className="flex-[8%] shrink-0 flex justify-center max-w-[90px]">
                <CircularLogo
                    src= {img_src}
                    size="100%"
                    padding={10}
                   
                />
            </div>

            <div className="flex-3/5 min-w-[250px] h-full relative flex flex-col justify-center">
            
                {/* Title and Rate*/}
                <div className="text-start mb-[5px] ml-[10px] ">
                    <span className="flex items-center gap-2">
                        <span className="xs:text-[13px] md:text-lg font-semibold  ">{title}</span> 
                        <span className="xs:max-sm:text-[12px] text-white/80 ">{rate}/10</span>
                        <span className="w-full xs:max-sm:text-[12px] text-nowrap text-white/80 ">{`- ${years_ofExp}`}</span>
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

