
import {Navbar, Nav,Container,Form} from 'react-bootstrap'
import Submenu from '../Submenu'


import {useState,useContext} from 'react'
import {BsMoonStars,BsSun } from "react-icons/bs";
import {ThemeContext} from 'styled-components'

function Header({toggleTheme})
{

  const {title} = useContext(ThemeContext);


    return(
    

      <>
        <Navbar  variant="dark" className = "navb">
          <Container className = "navColor" fluid>
            <Navbar.Brand className = "navColor">Daniela D'Oliveira</Navbar.Brand>
            <Nav className = "navColor" >
              <BsSun className = "my-switcher-icon-sun"/>
         
        <Form>
          <Form.Check 
            type="switch"
            id="custom-switch"
            checked  ={title === 'dark'}
            onChange = {toggleTheme}
          />
 
        </Form>



     <BsMoonStars className = "my-switcher-icon"/>
         
        </Nav>
        </Container>
      </Navbar>

      <Submenu/>
</>
    )
}
export default Header;