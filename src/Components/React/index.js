
import { MDBContainer} from 'mdbreact'
import {Container} from 'react-bootstrap'
import Embed from 'react-embed';
export default function React()
{
    return(
     <Container fluid>
          
            <Embed url='https://youtu.be/dKP9dC6_rTw' />
            <p className="lead">Hyrule Encyclopedia</p>
            <Embed url='https://youtu.be/dKP9dC6_rTw' />
            <p className="lead">Portfolio version 1</p>

            <Embed url='https://youtu.be/dKP9dC6_rTw' />
            <p className="lead">Weather Web App</p>
            <Embed url='https://youtu.be/dKP9dC6_rTw' />
            <p className="lead">Anime list</p>
           
            

     </Container>
    )

  
}