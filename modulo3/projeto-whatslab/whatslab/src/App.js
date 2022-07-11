import logo from './logo.svg';
import './App.css';
import {Titulo} from './syle'
import {CaixaMensagem } from './syle';
import {DivCaixaMsg} from './syle'
import {FooterW } from './syle'
import{HeaderW} from './syle'
import styled from 'styled-components'
import Mensagem from './componente/mensseger'


function App() {
  return (
    <div>
      <HeaderW>
  <h2> WLabenU</h2>
      </HeaderW>
<CaixaMensagem>
  <DivCaixaMsg>
    <Mensagem/>

  </DivCaixaMsg>
</CaixaMensagem>
<FooterW>
<p> Todos os direitos reservados a WhatsLab</p>
</FooterW>
</div>
  );
}

export default App;
