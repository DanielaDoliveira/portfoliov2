

import {Container} from 'react-bootstrap'
import Embed from 'react-embed';
export default function React()
{
    return(
     <Container className = "reactContainer">
        <Embed url='https://youtu.be/dKP9dC6_rTw' />
        <p className="lead">Hyrule Encyclopedia</p>

        <Embed url='https://youtu.be/UmrMwcPHVdU' />
        <p className="lead">WebDex- Your Web Pokédex</p>
        
        <Embed url='https://youtu.be/zRcg7mJFHE8' />
        <p className="lead">Weather Web App</p>
        
        <Embed url='https://youtu.be/ip5LbffgHk4' />
        <p className="lead">Anime list</p>
        
        

     </Container>
    )

  
}