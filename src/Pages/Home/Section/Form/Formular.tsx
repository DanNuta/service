import React, {ChangeEvent, PropsWithChildren, useState} from "react";
import {FormView} from "./Form.View";
import emailjs from '@emailjs/browser';


export const Form: React.FC<PropsWithChildren> = (props: PropsWithChildren) =>{

    

    const [numeState, setNumeState] = useState("");
    const [prenumeState, setPrenumeState] = useState("");
    const [telState, setTelState] = useState<string>("");
    const [messageState, setMesageState] = useState("");
    const [email, setEmail] = useState("");

    const [errorNameState, setErrorNumeState] = useState("")
    const [errorEmail, setErrorState] = useState("")
    const [errorPrenume, setErrorPrenume] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const [errorTel, setErrorTel] = useState("")

    const [pending, setPending] = useState<boolean | null>(null)




    const patter = {

        telephone:/^\d{10}$/,
        userName: /^[a-zA-Z]{3,7}$/,
        message: /^[a-zA-Z]{3,30}$/,
        prenume: /^[a-zA-Z]{3,7}$/,
        email: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
    }

    const numeFn = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
        const value = e.target.value; 
        setNumeState(value)
    }

    React.useEffect(() => {

        if(numeState){
                const validateName = patter["userName"].test(numeState);
                validateName ? setErrorNumeState("") : setErrorNumeState("Vous devez saisir un numéro valide")
        }
        else{
           
            setErrorNumeState("") 
                
        }


    }, [numeState])


    const emailFn = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
        const value = e.target.value;

        setEmail(value)
    }



    React.useEffect(() => {

        if(email){
                const validateName = patter["email"].test(email);
                validateName ? setErrorState("") : setErrorState("Vous devez avoir un email valide")
        }
        else{
           
            setErrorState("") 
                
        }


    }, [email])

    const telFn = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
        const value = e.target.value;

        setTelState(value)
    }


    React.useEffect(() => {

        if(telState){
                const validateName = patter["telephone"].test(telState);
                validateName ? setErrorTel("") : setErrorTel("Vous devez saisir un numéro valide")
        }
        else{
           
            setErrorTel("") 
                
        }


    }, [telState])


    const messageFn = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
        const value = e.target.value;

        setMesageState(value)
    }

    React.useEffect(() => {

        if(messageState){
                const validateName = patter["message"].test(messageState);
                validateName ? setErrorMessage("") : setErrorMessage("Vous devez entrer un message")
        }
        else{
           
            setErrorMessage("") 
                
        }


    }, [messageState])


    const prenumeFn = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
        const value = e.target.value;
        setPrenumeState(value);
    }

    React.useEffect(() => {

        if(prenumeState){
                const validateName = patter["prenume"].test(prenumeState);
                validateName ? setErrorPrenume("") : setErrorPrenume("Vous devez saisir un prénom valide")
        }
        else{
           
            setErrorPrenume("") 
                
        }


    }, [prenumeState])




    const data = (e: React.FormEvent<HTMLFormElement>, form: any) =>{
      e.preventDefault();

      console.log(form.current)


      if(!patter["userName"].test(numeState)){setErrorNumeState("Vous devez avoir un email valide")}
      else if(!patter["email"].test(email)){setErrorState("Vous devez avoir un email valide")}
     else if(!patter["telephone"].test(telState)){setErrorTel("Vous devez saisir un numéro valide")}
     else if(!patter["prenume"].test(prenumeState)){setErrorPrenume("Vous devez saisir un prénom valide")}
     else if(!patter["message"].test(messageState)){setErrorMessage("Vous devez entrer un message")}
      else{
         
          setPending(true)

          emailjs.sendForm('service_car', 'template_4qrx8aj', form.current, 'user_HhwPsdYuSdseFT3DDVWkC')
                .then((result) => {
                
                setPending(false)
            }, (error) => {
                console.log(error.text);

                setPending(null)
            });
    
          
          setEmail("")
          setMesageState("")
          setPrenumeState("")
          setTelState("")
          setNumeState("")


          window.scrollTo(0, 0)
          

      }


    }

    return <FormView nume={numeState}
                     email={email}
                     prenume={prenumeState}
                     telephon={telState}
                     message={messageState}
                     numeFn={numeFn}
                     emailFn={emailFn}
                     telephonFn={telFn}
                     messageFn={messageFn}
                     prenumeFn={prenumeFn}
                     data={data}
                     errorNume={errorNameState}
                     errorEmail={errorEmail}
                     errorPrenume={errorPrenume}
                     errorMessage={errorMessage}
                     errorTel={errorTel}
                     pending={pending}
    >
    {props.children}
    </FormView>
}