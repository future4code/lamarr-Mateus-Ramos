import React from "react";

export function Index(props){
    const{etapaP}=props;
    return(
        <div>
            <h1>
                Seja bem vindo!
            </h1>
            <p> Leia com atenção e responda todas as perguntas</p>
            <button onClick={etapaP}> Vamos lá!</button>
        </div>
    )
}