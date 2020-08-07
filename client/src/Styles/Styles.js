import styled, { keyframes, createGlobalStyle } from "styled-components";

export const AppDiv = styled.div`
text-align: center; 
`;

export const Appheader = styled.div`
background-color: #282c34;
min-height: 120vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-size: calc(10px + 2vmin);
color: white;
`;

const Applogospin = keyframes`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(360deg);
}
` 

export const Applogo = styled.img` 
height: 40vmin;
pointer-events: none;
animation: ${Applogospin} infinite 20s linear;
`;  
  
export const TaskCard = styled.div`
background: whitesmoke;
    border-radius: 10px;
    color: black;
    margin:2px;
`;

export const TaskContainer = styled.div`
display: flex;
flex: 1; 
flexDirection: row; 
width:100%;
margin-bottom:100px;
`;

export const TaskTittle = styled.div`
flex: 7;
flexDirection: column;
text-align: left;
overflow: auto;
`;

export const TaskTittleContainer = styled.div`
display:flex;
flexDirection: row ;
`;

export const Button = styled.button`
background: steelblue;
color: white;
border-radius: 10px;
padding: 10px;
border:none;
margin-bottom: 10px;
&:hover { 
  background: #88b5da;
}
`;

export const ButtonDel = styled.button`
background: #d64949;
color: white;
border-radius: 10px; 
border:none;  
&:hover { 
  background: #88b5da;
}
`;

export const Input = styled.input`
padding: 10px;
border-radius: 10px;
border:none;
`;

export const TagComplete = styled.h5`
color: darkred;
padding-bottom: 10px;
`;

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;

  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }
`

export const PronCardsST = styled.div`
background-color: white;
border-radius: 10px; 
color: DarkSlateGray; 
display: flex; 
flexDirection: row; 
margin:10px
`
export const PP = styled.p` 
margin-top:2px;
margin-bottom:4px;
`