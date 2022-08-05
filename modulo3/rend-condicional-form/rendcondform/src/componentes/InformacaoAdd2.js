import React from "react";

export function InformacaoAdd2 (){
    return(
        <div>
            <h1> Informações Adicionais</h1>
            <p> Por que você não terminou um curso de graduação? <input></input></p>

            <fieldset>
                <legend>
                    Você fez algum curso complementar?
                </legend>
                <div>
                    <input type="checkbox" id="CT" name="CT"></input>
                     <label for= "CT">Curso Técnico</label>
                </div>
                
                <div>
                    <input type="checkbox" id="CI" name="CI"></input>
                     <label for= "CI">Curso de Inglês</label>
                </div>
                <div>
                    <input type="checkbox" id="NC" name="NC"></input>
                     <label for= "NC">Não fiz curso complementar</label>
                </div>
               
            </fieldset>


            <button>Enviar</button>
        </div>
    )
}