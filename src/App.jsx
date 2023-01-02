import Ambasadors from "./components/Ambasadors/Ambasadors"
import BlackNav from "./components/BlackNav/BlackNav"
import Footer from "./components/Footer/Footer"
import Hero from "./components/hero/Hero"
import NavBar from "./components/navbar/Navbar"
import Services from "./components/services/Services"
import Students from "./components/students/Students"
import Universities from "./components/universities/Universities"

function App() {
  return (
   <div>
    <NavBar />
    <Hero />
    <Universities />
    <Services />
    <Ambasadors />
    <Students />
    <BlackNav />
    <Footer />
    
  
   </div>
  )
}

export default App
