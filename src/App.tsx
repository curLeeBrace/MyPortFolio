import {Routes, Route} from "react-router"
import LoadingScreen from "./components/LoadingScreen/LoadingScreen"
import Logo from "./components/MyLogo/Logo"
import NavBar from "./components/NavBar/NavBar"
import Home from "./routes/Home"
import Test from "./test_area/Test"


function App() {
  


  return (
    <>
      <NavBar/>
      {/* <LoadingScreen/> */}
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/home" element = {<Home/>}/>
        <Route path="/test" element = {<Test/>}/>
        <Route path="*" element = {"404 not found"}/>

      </Routes>

   

    </>
  )

  
}




export default App
