import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    font-family: 'Roboto','Montserrat', sans-serif;
  }
 
  html {
    scroll-behavior: smooth;
  }

  #__next {
    height: 100vh;
  }
  body {
    -webkit-font-smoothing: antialiased;
  }
  a {
    text-decoration: none;
    cursor: pointer;
    transition: all 0.2s;
  }
  button {
    cursor: pointer;
  }
  li{
    list-style: none;
  }
  // SCROLLBAR
  /* width */
  ::-webkit-scrollbar {
    width: 10px;
    padding: 0px 4px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey; 
    border-radius: 0px;
  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background:  #dedede;
    border-radius: 4px;
  }
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    opacity: 0.5;
  }
`;
