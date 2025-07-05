import {Routes, Route} from "react-router"
import NavBar from "./components/NavBar/NavBar"
import Home from "./routes/Home"
import Test from "./test_area/Test"
import About from "./routes/About/About"
import Particles from "./components/Particles/Particles"
import MyWorks from "./routes/MyWorks"



import { COLOR } from "./utils/color_picker"

function App() {
  


  return (
    <>
     <div className="fixed h-full w-full">
        <Particles
            particleColors={[COLOR["royal-purple"], COLOR["royal-purple"]]}
        
            particleCount={700}
            particleSpread={20}
            particleBaseSize={150}  
            speed={2}
            disableRotation
            className=""
                              
        />
    
      </div>

      <NavBar/>

      <Routes>

        <Route path="/" element = {<Home/>}/>
        <Route path="/home" element = {<Home/>}/>
        <Route path="/about-me" element = {<About/>}/>
        <Route path="/projects" element = {<MyWorks/>}/>
        <Route path="/test" element = {<Test/>}/>
        <Route path="*" element = {"404 not found"}/>

      </Routes>

   

    </>
  )

  
}




export default App
