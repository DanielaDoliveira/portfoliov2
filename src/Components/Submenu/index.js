
import {Nav} from 'react-bootstrap'
import {useState} from 'react'
import About from '../../Pages/About'
import Projects from "../../Pages/Projects";


export default function Header()
{

  const [aboutMe,setAboutMe] = useState(true);
  const [projects,setProjects] = useState(false);

  
   function handleClickProjects()
   {
      setAboutMe(false);
      setProjects(true);
   }
   function handleClickAbout(){
      setProjects(false);
      setAboutMe(true);
   }
  return(
  <>

    <Nav className="justify-content-center" activeKey="/home">
      
      <Nav.Item>
        <Nav.Link className = "link"onClick={handleClickProjects}>Projects</Nav.Link>
      </Nav.Item>

      <Nav.Link eventKey="disabled" disabled>|</Nav.Link>

      <Nav.Item>
      <Nav.Link className = "link" onClick = {handleClickAbout}>About me</Nav.Link>
      </Nav.Item>

    </Nav>



    {aboutMe && (
        <About/>

    )}

    {!aboutMe && (
      <div></div>
    )}

    {projects && (
      <Projects/>
    )}
     {!projects && (
      <div></div>
    )}
 
  </>

    )
}