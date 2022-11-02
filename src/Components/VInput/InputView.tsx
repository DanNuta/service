import React, { PropsWithChildren } from "react";
import * as Style from "./Input";
import {InputModel} from "../../Models/Input";
import error from "../../Icons/error/error.svg";


export const InputView: React.FC<PropsWithChildren<InputModel>> = (props: PropsWithChildren<InputModel>) =>{

    return <Style.LabelInput>
           
             <Style.Input name={props.name} err={props.error ? true : false} value={props.value} placeholder={props.placeholder} id={props.id} type={props.type} onChange={props.onChange} />
             {props.error && <img src={error}/>}
             <p>{props.error && props.error}</p>

         </Style.LabelInput>
}