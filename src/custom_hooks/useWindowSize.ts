import { useEffect, useState } from "react"

const usekWindowSize = ():number => {
    
    const [window_size, set_window_size] = useState(window.innerWidth)


    useEffect(()=>{

        window.addEventListener("resize", ()=> set_window_size(window.innerWidth))
            
    },[])

    return window_size
}



export default usekWindowSize



