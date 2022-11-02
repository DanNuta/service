import {Container, Grid} from  '@mui/material';
import { AboutView } from './Section/About/About.view';
import { Index } from './Section/Index/Index';
import { Servicii } from './Section/Service/Servicii.View';
import {Form} from "../Home/Section/Form/Formular";
import { GaleryView } from './Section/Galery/Galery.View';



export const HomeView: React.FC= () =>{

    return (

        <>
           <Index/>


          

           <AboutView/>

           <Servicii/>

           <GaleryView/>


           <Form/>
          

          
        </>
    )

}