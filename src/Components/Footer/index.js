

import {Container,Row,Col} from 'react-bootstrap'
import '../../index.css';
export default function Footer()
{
    return(
        <div  className="p-10 text-light mb-3" id = "footerColor">
             <Row >
            <Col><b>Criado por:</b></Col>
            <Col><b>Contatos:</b></Col>
            </Row>
            <Row>
            <Col>Daniela D'Oliveira</Col>
            <Col>
            git tw lI
            </Col>
            </Row>
            </div>
    )
}