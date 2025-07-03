import {useRef, useState } from "react";

interface CircularLogoProps {
    src : string;
    border_color? : string;
    border_size? : string
    link ? : string
    border_none? : boolean
    size?:string
    padding? : number
    tooltip? : string;

}

interface Position {
  x: number;
  y: number;
}

const CircularLogo = ({src, border_color = "#7E22CE",border_size = "5px", border_none = false , link, padding = 0, size, tooltip}:CircularLogoProps) => {
    const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
    const divRef = useRef<HTMLDivElement>(null);
    const [isMouseEntered, setIsMouseEntered] = useState<boolean>(false);




    const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {

        if (!divRef.current) return;
        
        const rect = divRef.current.getBoundingClientRect();
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

      
    const handleMouseEnter = () => {
        setIsMouseEntered(true)
        console.log("Mouse Entered!")

    }


    const handleMouseExit = () => {
        setIsMouseEntered(false)
        console.log("Mouse Exited!")
    }





    return(
        <div 
            ref={divRef} className="relative"
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseExit}
            // onClick={()=>}

        
        >
        
        
            <div 
                className={`aspect-square overflow-hidden rounded-full relative hover:scale-110 ease-in-out duration-200 ${link ? "cursor-pointer" : ""}`}
                style={border_none ? {
                    height : size,
                    // maxWidth : size,
                    padding : `${padding}px`
                } :
                {
                    height : size,
                    padding : `${padding}px`,
                    // maxWidth : size,
                    borderColor : border_color,
                    borderWidth : border_size
                }}
                onClick={() => {
                    if(link){
                        window.open(link)
                    }
                }}
            >
                <img src={src} className="h-full w-full object-contain"/>

            </div>

            {
                tooltip &&
                <div className={`absolute px-[10px] rounded-md bg-dark-gray border-royal-purple border-[1px]  text-royal-purple text-nowrap ${isMouseEntered ? "opacity-100 transition-opacity delay-150 duration-150 ease-in" : "opacity-0"}`}
                    style={{
                        top: position.y - 25,
                        left: position.x + 5,
                    }}      
                >
                    {tooltip}

                </div>
            }
      
        </div>
    )
}


export default CircularLogo