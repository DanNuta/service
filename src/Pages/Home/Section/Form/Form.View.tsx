import React, { ChangeEvent, PropsWithChildren, useRef } from "react";
import { VButton } from "../../../../Components/VButton/VButton";
import { InputView } from "../../../../Components/VInput/InputView";
import * as Style from "./Form";
import bg_form from "../../../../Icons/bg/form.png";



type Props = {
    nume?: string,
    prenume?: string,
    telephon?: string,
    message?: string,
    email?: string,
    numeFn: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    emailFn: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    telephonFn: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    messageFn: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    data: (e: React.FormEvent<HTMLFormElement>, form: React.MutableRefObject<HTMLFormElement | null>) => void,
    prenumeFn: (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    errorNume: string,
    errorEmail: string,
    errorPrenume: string,
    errorMessage: string,
    errorTel: string,
    pending?: boolean | null
}





export const FormView: React.FC<PropsWithChildren<Props>> = (props: PropsWithChildren<Props>) =>{

    const form = useRef<HTMLFormElement | null>(null)

    return <Style.Form id="Contacte" ref={form} onSubmit={(e) => props.data(e, form)}>
          <h1 className="title">Contacteaza-ne</h1>

          <div className="form_photo">


            <div className="form_element">

               

            <div className="form_input">
                    <div>
                        <InputView name="nume" error={props.errorNume}  value={props.nume}  onChange={(e) => props.numeFn(e)} labelText="Nume" placeholder="Nume" type="text" id="Nume"/>
                        <InputView name="email" error={props.errorEmail} value={props.email}  onChange={(e) => props.emailFn(e)} labelText="Email" placeholder="Email" type="email" id="Email"/>
                    </div>

                    <div>
                        <InputView name="prenume" error={props.errorPrenume} value={props.prenume}  onChange={(e) => props.prenumeFn(e)} labelText="Prenume" placeholder="Prenume" type="text" id="prenume"/>
                        <InputView name="telefon" error={props.errorTel}  value={props.telephon} onChange={(e) => props.telephonFn(e)} labelText="Telefon" placeholder="Numar de telefon" type="tel" id="Telefon"/>
                    </div>

            </div>

                <div className="textarea">
                        <InputView name="mesaj" error={props.errorMessage} value={props.message} onChange={(e) => props.messageFn(e)} labelText="Mesaj" placeholder="Mesaj" type="texarea" id="Mesaj"/>
                </div>

                 <Style.Button  >{props.pending ? "Sending..." : "Contacteaza-ne"}</Style.Button>
            </div>


                <Style.PhotoRight>
                    <Style.Img src={bg_form}></Style.Img>
                </Style.PhotoRight>

            </div>

          </Style.Form>
}