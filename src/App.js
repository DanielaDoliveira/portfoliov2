

import Footer from "./Components/Footer";


import light from './styles/themes/light';
import {useState} from 'react'
import dark from './styles/themes/dark.js'
import Global from "./styles/global";
import {ThemeProvider} from "styled-components";
import Header from './Components/Header'

function App() {
const [theme,setTheme] = useState(light);

const toggleTheme = () => {
  setTheme(theme.title === 'light' ? dark : light);
};

  
  return (
    
  <ThemeProvider theme = {theme}>
    <Global/>
    <Header toggleTheme = {toggleTheme} />
    <Footer/>
  </ThemeProvider>

 
  );
}

export default App;
