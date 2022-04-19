

import {Container,Button} from 'react-bootstrap'
import { AiFillGithub } from 'react-icons/ai';
import { FiLinkedin } from 'react-icons/fi';
import {RiTelegramLine} from 'react-icons/ri'


export default function Footer()
{
    return(
      
        <footer id = "footerColor" className="social-media">
             <Container className="social-media">
               Daniela D'Oliveira
               </Container>
                <Container >
                 
                  <Button href = "https://linkedin.com/in/daniela-fialho-d-oliveira-479b53163" className="social-media-btn"> <FiLinkedin className="social-media-icons" /></Button>
                  <Button  href = "https://t.me/Danethree"className="social-media-btn"> <RiTelegramLine className="social-media-icons"/></Button>
                  <Button href = "https://github.com/Danethree"className="social-media-btn"> <AiFillGithub className="social-media-icons" /></Button>
                
                </Container>
              
             
     
        </footer>
     
    )
}