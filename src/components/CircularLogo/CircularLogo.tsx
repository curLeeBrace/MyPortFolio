interface CircularLogoProps {
    src : string;
    border_color? : string;
    border_size? : string
    link ? : string
    border_none? : boolean
    size?:string
    padding? : number

}



const CircularLogo = ({src, border_color = "#7E22CE",border_size = "5px", size = "100px", border_none = false , link, padding = 0}:CircularLogoProps) => {


    return(
        <div 
            className={`aspect-square p-[${String(padding)}px] overflow-hidden rounded-full relative hover:scale-110 ease-in-out duration-200 ${link ? "cursor-pointer" : ""}`}
            style={border_none ? {
                maxWidth : size
            } :
            {
                maxWidth : size,
                borderColor : border_color,
                borderWidth : border_size
            }}
            onClick={() => {
                if(link){
                    window.open(link)
                }
            }}
        >
            <img src={src} className="h-full w-full"/>

        </div>
    )
}


export default CircularLogo