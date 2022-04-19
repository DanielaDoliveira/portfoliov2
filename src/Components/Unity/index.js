
import {Container,Button} from 'react-bootstrap'
import PhotoAlbum from "react-photo-album";
import { photos } from "../../photos";
export default function Unity()
{
  
 return(
 <>
    <Container className="justify-content-center">
        <PhotoAlbum layout="rows" photos={photos} />
        <Button className  = "btnMoreInfo" href = "https://github.com/Danethree">More information</Button>
    </Container>
 
 </>);
    
}