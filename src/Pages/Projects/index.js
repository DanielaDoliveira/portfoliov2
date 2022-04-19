
import {Nav} from 'react-bootstrap'
import {useState} from 'react'
import Unity from '../../Components/Unity';
import React from '../../Components/React';
export default function Projects()
{

const [unity,setUnity] = useState(true);
const [react,setReact] = useState(false);

function handleClickUnity(){
  setReact(false);
  setUnity(true);
}

function handleClickReact(){
  setUnity(false);
  setReact(true);
} 
return(
<>
    <Nav className="justify-content-center" activeKey="/home">

  <Nav.Item>
    <Nav.Link className = "projectnav" onClick = {handleClickUnity}>Unity</Nav.Link>
  </Nav.Item>

  <Nav.Link eventKey="disabled" disabled/>

  <Nav.Item>
    <Nav.Link className = "projectnav" onClick = {handleClickReact}>React</Nav.Link>
  </Nav.Item>

 
  </Nav>

    {unity && (
        <Unity/>

    )}
    {react && (
        <React/>
    )}
    {!unity && (<div></div>)}
    {!react && (<div></div>)}

    </>
)
}