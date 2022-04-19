import { BrowserRouter,Route,Switch } from "react-router-dom";

import Home from './Pages/Home'
import About from './Pages/About'
import Header from './Components/Header'
import Projects from "./Pages/Projects";
import Footer from "./Components/Footer";

const Routes = () =>{
    return (
        <BrowserRouter>
        <Header/>
        <Switch>
            <Route exact path = "/"component={Home}/>
            <Route exact path = "/about"component={About}/>
            <Route exact path = "/project"component={Projects}/>
        </Switch>
       <Footer/>
        </BrowserRouter>
    )
}
export default Routes;


