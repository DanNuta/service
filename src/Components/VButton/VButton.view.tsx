import React, { PropsWithChildren } from "react";
import * as Style from "./VButton.style";

type Props = {
    onClick?: () => void,
    bg?: string,
    color?: string,
    href: string
}


export const VButtonView : React.FC<PropsWithChildren<Props>>= (props: PropsWithChildren<Props>) =>{
    return <Style.Button href={props.href} color={props.color} bg={props.bg} onClick={props.onClick}>{props.children}</Style.Button>
}