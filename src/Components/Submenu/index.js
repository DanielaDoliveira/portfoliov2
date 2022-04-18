
import {Navbar, Nav,Container} from 'react-bootstrap'
import {useState} from 'react'


export default function Header()
{
   
    return(
        
        <>
        <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link className = "link"href="/project">Projects</Nav.Link>
        </Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
        |
      </Nav.Link>
        <Nav.Item>
          <Nav.Link className = "link" href = "/about">About me</Nav.Link>
        </Nav.Item>
        
        <Nav.Item>
          
        </Nav.Item>

        
      </Nav>
   
        </>

    )
}