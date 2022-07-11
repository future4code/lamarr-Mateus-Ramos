import React from "react";
import {BoxesMensseger} from './sylecomp.js'

export default function Mensagem(){
    let mensa2 = <input id = "txtmsgdestino" placeholder="Digite o destinatário" name="txtinput" value="" type="text"></input>
    let mensa = <input id = "txtmsg" placeholder="Digite uma mensagem" name="txtinput" value="" type="text"></input>
    let Enviar =()=>{
        mensa = document.getElementsById("txtmsg").value
        mensa2= document.getElementsById("txtmsg").value
    }

    return(
    <>
    <BoxesMensseger > {mensa}{mensa2}
    <button onClick={Enviar}> Enviar</button></BoxesMensseger >
    
    </>

    )

}