import { Container,Figure,Row,Col,Button } from "react-bootstrap";
import Banner from "../Banner";
import image from '../../images/daniela.png'
import { AiFillGithub } from 'react-icons/ai';
import { FiLinkedin } from 'react-icons/fi';
import {RiTelegramLine} from 'react-icons/ri'

export default function Aboutme()
{
    const image = require("../../images/daniela.png");
    return(
       <>
      
         <Banner/>
      
        <Container id = "aboutC"fluid>
        <Row>
          <Col>
          </Col>
        </Row>

      

        <Figure>
        <Figure.Image
          width={200}
          height={200}
          alt="171x180"
          src={image}
          className="rounded-circle"
        />

    </Figure>
    <Container fluid>
          <h3>Contact me</h3>
          <Button href = "https://linkedin.com/in/daniela-fialho-d-oliveira-479b53163" className="contact"> <FiLinkedin className="contact-badge" /></Button>
                  <Button  href = "https://t.me/Danethree"className="contact"> <RiTelegramLine className="contact-badge"/></Button>
                  <Button href = "https://github.com/DanielaDoliveira"className="contact"> <AiFillGithub className="contact-badge" /></Button>
                
        </Container>
        <p className = "lead">
         My name is Daniela, I'm 25 and I'm a Science Computer bachelor's degree. Currently I'm
         studying Software Engineer graduate studies. 

        </p>
        <p className = "lead">
        The languages that I develop are C#
         with help of Monobehaviour library(Unity) and javascript with help of framework react.
          </p>

       
              
        </Container>
       
       </>
    )
}