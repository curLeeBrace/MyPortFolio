import Logo from "../MyLogo/Logo"
import Squares from "../Squares/Squares"

const LoadingScreen = () => {

    return(
        <div className="w-dvw h-dvh">
            <div className="w-full h-full">
                <Squares direction="diagonal" squareSize={70}/>

            </div>

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-9xl cursor-default">
                <Logo/>
            </div>
           
        </div>

    )
}


export default LoadingScreen