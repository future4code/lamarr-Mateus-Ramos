import React from "react";

export function DadosGerais(){
    return (
        <div>
            <h1> DADOS GERAIS</h1>
            <p> Nome:  <input placeholder="Digite o seu nome"></input></p>
            <p> Idade: <input placeholder="Digite a sua idade"></input></p>
            <p> Email: <input placeholder="Digite o seu email"></input></p>
            <fieldset>
                <legend>
                    Selecione o seu grau de escolaridade:
                </legend>
                <div>
                    <input type="checkbox" id="EMI" name="EMI"></input>
                     <label for= "EMI">Ensino Médio</label>
                </div>
                
                <div>
                    <input type="checkbox" id="EMC" name="EMC"></input>
                     <label for= "EMC">Ensino Médio Completo</label>
                </div>
                <div>
                    <input type="checkbox" id="ESI" name="ESI"></input>
                     <label for= "ESI">Ensino Superior Incompleto</label>
                </div>
                <div>
                    <input type="checkbox" id="ESC" name="ESC"></input>
                     <label for= "ESC">Ensino Superior Completo</label>
                </div>
            </fieldset>


            <button> Enviar </button>
        </div>
    )
}
