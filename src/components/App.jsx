// import axios from 'axios';
import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
  ul,h1,h2,h3,h4,h5,h6,li,p{list-style:none;margin:0;padding:0;};
  body{
   /* height: 100vh; */
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 40;
        color: #010101;
  }
`;
export const App = () => {
  return (
    <div>
      <GlobalStyle />
      fbrbrb
    </div>
  );
};
