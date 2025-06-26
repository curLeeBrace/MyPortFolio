

interface CircularLogoProps {
    src : string;
    border_color? : string;
    border_size? : string
    link ? : string
    border_none? : boolean
    size?:number
}



const CircularLogo = ({src, border_color = "#7E22CE",border_size = "5px", size = 100, border_none = false , link}:CircularLogoProps) => {

    return(
        <div 
            className={`aspect-square rounded-full relative hover:scale-110 ease-in-out duration-200 ${link ? "cursor-pointer" : ""}`}
            style={border_none ? {
                maxWidth : `${size}px`
            } :
            {
                maxWidth : `${size}px`,
                borderColor : border_color,
                borderWidth : border_size
            }}
            onClick={() => {
                if(link){
                    window.open(link)
                }
            }}
        >
            <img src={src} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-5/6 w-5/6 p-1 object-contain"/>

        </div>
    )
}


export default CircularLogo