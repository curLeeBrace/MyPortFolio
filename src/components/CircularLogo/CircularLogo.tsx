interface CircularLogoProps {
    src : string;
    border_color? : string;
    border_size? : string
    link ? : string
    border_none? : boolean
    size?:string
    padding? : number

}



const CircularLogo = ({src, border_color = "#7E22CE",border_size = "5px", border_none = false , link, padding = 0, size}:CircularLogoProps) => {


    return(
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
    )
}


export default CircularLogo