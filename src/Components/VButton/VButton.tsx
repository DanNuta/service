import React, { PropsWithChildren } from "react";
import {VButtonView} from "./VButton.view";


type Props = {
    onClick?: (e: React.FormEvent<HTMLInputElement>) => void,
    bg?: string,
    color?: string,
    href: string
}


export const VButton: React.FC<PropsWithChildren<Props>> = (props: PropsWithChildren<Props>) =>{
    return <VButtonView href={props.href} color={props.color} bg={props.bg} onClick={() => props.onClick}>{props.children}</VButtonView>
}