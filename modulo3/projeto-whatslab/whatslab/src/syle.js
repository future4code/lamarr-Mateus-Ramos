import styled from 'styled-components'

export const CaixaMensagem = styled.div`
    background-color: grey;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
    padding-left: 20px
`
export const DivCaixaMsg = styled.div`
    border: solid 3px rgba(0, 0, 0, 0.26);
    background-color: 2px 2px 4px black;
    background-color: none;
    background-image: url(https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png);
    border: solid 3px grey;
    height: 85vh;
    padding-left: 75vh;
    margin-top: 91px;
    position: fixed;
`
export const FooterW = styled.footer`
    background-color: orange;
    bottom: 0;
    color: white;
    position: fixed;
    bottom: 0;
    width: 100%;
    display: flex;
    padding: 0 10px;
    justify-content: center;
    p{
        font-weight: bold;
    }
`
export const HeaderW = styled.header`
    background-color: orange;
    color: white;
    width: 100%;
    display: flex;
    padding: 0 50px;
    height: 10%;
    justify-content: center;
    position: fixed;
`
export const BoxesMensseger = styled.header`
margin-top: 50px;

`