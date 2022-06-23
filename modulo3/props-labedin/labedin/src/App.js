import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno'

function App() {
    return ( <
        div className = "App" >
        <
        div className = "page-section-container" >
        <
        h2 > Dados pessoais < /h2> <
        CardGrande imagem = "./img/MATE.png"
        nome = "Astrodev"
        descricao = "Oi, eu ou o Mateus. Sou estudante de desenvolvimento Web full stack da Labenu e adoro o universo nerd/geek. Sou mestre em Física (Atrofísica) e fascinado pelo universo e seus mistérios." /
        >

        <
        ImagemButton imagem = "https://cdn-icons-png.flaticon.com/512/271/271210.png"
        texto = "Ver mais" /
        >
        <
        CardPequeno imagem = "https://cdn-icons-png.flaticon.com/512/69/69957.png"
        descricao = "Email: teu.costa.16@gmail.com" /
        >
        <
        CardPequeno imagem = "https://cdn-icons-png.flaticon.com/512/484/484167.png"
        descricao = "123, Itape-Bahia" /
        >
        <
        /div>


        <
        div className = "page-section-container" >
        <
        h2 > Experiências profissionais < /h2> <
        CardGrande imagem = "https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png"
        nome = "Labenu"
        descricao = "Formando desenvolvedores para o mercado de trabalho!" /
        >

        <
        CardGrande imagem = "https://logodownload.org/wp-content/uploads/2019/03/nasa-logo-0-768x768.png"
        nome = "NASA"
        descricao = "Apontando defeitos." /
        >
        <
        /div>

        <
        div className = "page-section-container" >
        <
        h2 > Minhas redes sociais < /h2> <
        ImagemButton imagem = "https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
        texto = "Facebook" /
        >

        <
        ImagemButton imagem = "https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
        texto = "Twitter" /
        >
        <
        /div> <
        /div>
    );
}

export default App;