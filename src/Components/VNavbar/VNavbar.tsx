import React, { PropsWithChildren , useState} from "react";
import { VNavbarView } from "./VNavbar.View";






export const VNavbar:React.FC<PropsWithChildren> = (props: PropsWithChildren) =>{
    
    const [toggle, setToggle] = useState(false);

    function toggleBard(){
        setToggle(prev => !prev)
    }


   
    return <VNavbarView toggle={toggle} toggleBard={toggleBard}>{props.children}</VNavbarView>
}