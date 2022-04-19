import { Container,Button,Figure } from "react-bootstrap";
import unity from '../../images/unity.svg'
import react from '../../images/react.svg'

export default function Banner()
{
     return(
        <Container fluid className = "banner" >
      
      
       <Container  fluid className = "banner">
       <h5 className = "banner-title">  Hi, I'm </h5>
       <span><img className = "img-ban" src = {unity} /><img className = "img-ban"src = {react} /></span>
        <h3 className = "banner-subtitle">Software Developer</h3>
       
        <Button className = "banner-btn"variant="light">Curriculum</Button>{' '}
       </Container>
      </Container>
     )
}