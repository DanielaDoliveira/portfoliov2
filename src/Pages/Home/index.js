
import {useState} from 'react'
import {Container} from 'react-bootstrap'

export default function Home () {

    
   const [id,setId] = useState ('lightContainer');


    return(
    <Container id = "mainContainer"></Container>
    );
}