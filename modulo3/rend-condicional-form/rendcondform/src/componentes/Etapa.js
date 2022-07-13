import React, { useState } from "react";
import { AdicionaiseEduc } from "./Adicionaiseduca";
import { DadosGerais } from "./Dadosgerais";
import { InformacaoAdd2 } from "./InformacaoAdd2";
import { MensagemF } from "./MensagemF";
import { Index } from "./Index";

export function Etapa(){
    const [indexState, setIndexState]=useState(false);
    function inde(){
        setIndexState(!indexState)
    }
    if(indexState){
        return < Index etapaP = {inde}/>
    }else{
        <h1> Tente novamente</h1>
    }
}