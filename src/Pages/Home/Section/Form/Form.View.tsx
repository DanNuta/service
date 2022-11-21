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

    return <Style.Form id="Contactez-nous" ref={form} onSubmit={(e) => props.data(e, form)}>
          <h2 className="title">Demandez un devis en remplissant le formulaire de contact</h2>

          <div className="form_photo">


            <div className="form_element">

                <p className="motto">Réactif et professionnel, nous répondons rapidement à vos demandes en matière de reprogrammation de moteur.</p>

               

            <div className="form_input">
                    <div>
                        <InputView name="nume" error={props.errorNume}  value={props.nume}  onChange={(e) => props.numeFn(e)} labelText="Votre nom" placeholder="Votre nom" type="text" id="Nume"/>
                        <InputView name="prenume" error={props.errorPrenume} value={props.prenume}  onChange={(e) => props.prenumeFn(e)} labelText="Votre prénom " placeholder="Votre prénom " type="text" id="prenume"/>
                    </div>

                    <div>
                        
                        <InputView name="email" error={props.errorEmail} value={props.email}  onChange={(e) => props.emailFn(e)} labelText="Votre email" placeholder="Votre email" type="email" id="Email"/>
                        <InputView name="telefon" error={props.errorTel}  value={props.telephon} onChange={(e) => props.telephonFn(e)} labelText="Votre téléphone " placeholder="Votre téléphone " type="tel" id="Telefon"/>
                    </div>

            </div>

                <div className="textarea">
                        <InputView name="mesaj" error={props.errorMessage} value={props.message} onChange={(e) => props.messageFn(e)} labelText="Mesaj" placeholder="Votre message" type="texarea" id="Mesaj"/>
                </div>

                 <Style.Button  >{props.pending ? "Sending..." : "Contact"}</Style.Button>
            </div>


                <Style.PhotoRight>
                    <Style.Img src={bg_form}></Style.Img>
                </Style.PhotoRight>

            </div>

          </Style.Form>
}