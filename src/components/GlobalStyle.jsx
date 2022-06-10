import { createGlobalStyle } from "styled-components"
import Portada from "../media/portada.jpg"
import GlobalColor from "./GlobalColors";
    //Definicion de estilos globales///
    const GlobalStyles = createGlobalStyle`
   
    *{
        padding: 0;
        margin: 0;
    }
    body{
        position: relative;
        background: url(${Portada});
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        background-attachment: fixed;
        margin: 0;
        font-family: "Roboto","Calibre","Inter","San Francisco","SF Pro Text",-apple-system,system-ui,sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        box-sizing: border-box;
        &::before{
            content: "";
            width: 100%;
            position: absolute;
            height: 100%;
            background: #0b132bb5;
        }
    }
    body::-webkit-scrollbar{
      width: 10px;
      background-color: ${GlobalColor.primary};
    }
    body::-webkit-scrollbar-thumb{
      background-color: ${GlobalColor.third};
      border-radius: 10px;
    }
    `;   
const GlobalStyle = () => {
    return (
        <GlobalStyles />
    )
}

export default GlobalStyle