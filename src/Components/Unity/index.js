
import {Container,Col,Row,Button} from 'react-bootstrap'
import bee from "../../images/banner.png"
import cSys from "../../images/camouflageSystem.png"
import gamejam from "../../images/gamejam.png"
import gyro from "../../images/gyroScreen01.jpg"
import gameplay from "../../images/gameplay.jpg"
import ninjat from "../../images/ninjat.png"
import project from "../../images/project.png"
import workshop from "../../images/workshop.png"
import ninja from "../../images/ninja.png"
import '../../index.css'
import PhotoAlbum from "react-photo-album";
import { photos } from "../../photos";
export default function Unity()
{
  
 return(<>
 <Container className="justify-content-center">
 <PhotoAlbum layout="rows" photos={photos} />
 <Button className  = "btnMoreInfo">More information</Button>
 </Container>
 
 </>);
    
}