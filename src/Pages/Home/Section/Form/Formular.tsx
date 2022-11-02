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
                validateName ? setErrorNumeState("") : setErrorNumeState("Trebuie sa introduci un nume Valid")
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
                validateName ? setErrorState("") : setErrorState("Trebuie sa un email valid")
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
                validateName ? setErrorTel("") : setErrorTel("Trebuie sa introduci un numar valid")
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
                validateName ? setErrorMessage("") : setErrorMessage("Trebuie sa introduci un mesaj")
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
                validateName ? setErrorPrenume("") : setErrorPrenume("Trebuie sa introduci un prenume valid")
        }
        else{
           
            setErrorPrenume("") 
                
        }


    }, [prenumeState])




    const data = (e: React.FormEvent<HTMLFormElement>, form: any) =>{
      e.preventDefault();

      console.log(form.current)


      if(!patter["userName"].test(numeState)){setErrorNumeState("Trebuie sa introduci un nume Valid")}
      if(!patter["email"].test(email)){setErrorState("Trebuie sa un email valid")}
      if(!patter["telephone"].test(telState)){setErrorTel("Trebuie sa introduci un numar valid")}
      if(!patter["prenume"].test(prenumeState)){setErrorPrenume("Trebuie sa introduci un prenume valid")}
      if(!patter["message"].test(messageState)){setErrorMessage("Trebuie sa introduci un mesaj")}
      else{
          const obj = {
            numeState,
            telState,
            prenumeState,
            email,
            messageState
          }



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