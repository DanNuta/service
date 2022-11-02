import { ChangeEvent } from "react"

export type InputModel = {
    labelText?: string,
    type?: string,
    id?: string,
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    placeholder?: string, 
    value?: string,
    error?: string
    name?:string
}