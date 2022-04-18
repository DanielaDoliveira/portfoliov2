
import {Navbar, Nav,Container,Form} from 'react-bootstrap'
import Submenu from '../Submenu'
import '../../index.css';

function Header()
{
    return(
        
      <>
        <Navbar  variant="dark" className = "navColor">
        <Container className = "navColor" fluid>
        <Navbar.Brand className = "navColor"href="#home">Daniela D'Oliveira</Navbar.Brand>
        <Nav className = "navColor" >
        
        <Form>
    <Form.Check 
      type="switch"
      id="custom-switch"
      className = "navColor"
 
 
    />
    </Form>
        
        </Nav>
        </Container>
      </Navbar>

      <Submenu/>
</>
    )
}
export default Header;