

interface CircularLogoProps {
    src : string;
    border_color? : string;
    border_size? : string
    link ? : string
}



const CircularLogo = ({src, border_color = "#7E22CE",border_size = "5px", link}:CircularLogoProps) => {

    return(
        <div 
            className={`w-full h-full rounded-full relative hover:scale-110 ease-in-out duration-200 ${link ? "cursor-pointer" : ""}`}
            style={{
                borderColor : border_color,
                borderWidth : border_size
            }}
            onClick={() => {
                if(link){
                    window.open(link)
                }
            }}
        >
            <img src={src} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-full p-3"/>

        </div>
    )
}


export default CircularLogo