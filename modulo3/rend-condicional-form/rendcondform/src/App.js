import logo from './logo.svg';
import './App.css';
import { DadosGerais } from './componentes/Dadosgerais';
import {AdicionaiseEduc} from './componentes/Adicionaiseduca'
import {InformacaoAdd2} from './componentes/InformacaoAdd2'
import {Index} from './componentes/Index'
import {MensagemF} from './componentes/MensagemF'
import {Etapa} from './componentes/Etapa'
import { useState } from 'react';

function App() {
 /* state={
    etapa:1,
  }
  function renderizaEtapa(){
    const [etapaState, setEtapaState] = useState (1);
    switch(etapaState){
      case 1:
        return <Index/>
        break;
      case 2:
        return <DadosGerais/>
        break;
      case 3:
        return <AdicionaiseEduc/>
        break;
      case 4:
        return <InformacaoAdd2/>
        break;
      case 5:
        return <MensagemF/>
        break;
    }
  }
 */
  return (
    <div className="App">
      <Index/>
      <DadosGerais/>
      <AdicionaiseEduc/>
      <InformacaoAdd2/>
      <MensagemF/>

    </div>
  );
}

export default App;
