 import {Navbar} from "./Components/Navbar"
import {Home} from './Components/Home/Home'
import {About} from "./Components/About/About"
import {Portfolio} from "./Components/Portfolio/Portfolio"
import {Experience} from "./Components/Experience/Experience"
import {Contact} from "./Components/Contact/Contact"
import { Footer } from "./Components/Footer/Footer"


function App() {
  return (
  <>
    <Navbar/>
    <Home/>
    <About/>
    <Portfolio/>
     <Experience/>
     <Contact/>
     <Footer/>
    
   
  </>
  );
}

export default App;
