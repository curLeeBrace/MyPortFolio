import Logo from "../MyLogo/Logo"
import Squares from "../Squares/Squares"

const LoadingScreen = () => {

    return(
        <div className="w-dvw h-dvh bg-gray">
            <div className="w-full h-full">
                <Squares direction="diagonal" squareSize={30} speed={.5}/>

            </div>

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[40px] cursor-default">
                <Logo/>
            </div>
           
        </div>

    )
}


export default LoadingScreen