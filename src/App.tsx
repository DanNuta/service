import { useState } from 'react'
import { VNavbar } from './Components/VNavbar/VNavbar';
import {GlobalStyle} from "./Css/Global.style";
import { HomeView } from './Pages/Home/Home.View';
import {VFooter} from "./Components/VFooter/VFooterView";

function App() {


  
  
  const [loadContent, setLoadContentState] = useState(true);
  
  window.onload = (event) =>{

    
    setLoadContentState(false)


  }
  return (

    <>

   

   {loadContent ? <p>Loadedd</p> :
   
   <>
    <GlobalStyle/>
    <VNavbar/>

    <HomeView/>

    <VFooter id="Contacte"/>
   
   </> 
   
   }
    
    </>
  )
}

export default App
