
import {Container,Carousel} from 'react-bootstrap'
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
export default function Unity()
{
    return(
       <Container fluid className = "slides" >
       <Carousel fade >
  <Carousel.Item >
    <img
    id = "carouselImage"
      className="d-block w-100"
      src={bee}
      alt="First slide"
    />

<Carousel.Caption className = "caption">
      <h3 id = "capt">Bee</h3>
      <p id = "capt"className = "lead">Platform: Android</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item >
    <img
    id = "carouselImage"
      className="d-block w-100"
      src={ninja}
      alt="First slide"
    />

<Carousel.Caption className = "caption">
      <h3 id = "capt">Ninja:Challenge</h3>
      <p id = "capt"className = "lead">Platform: Android</p>
    </Carousel.Caption>
  </Carousel.Item> 
  
  <Carousel.Item>
    <img
     id = "carouselImage"
      className="d-block w-100"
      src={gyro}
      alt="Second slide"
    />

    <Carousel.Caption className = "caption">
      <h3 id = "capt">Gyro Maze</h3>
        <p id = "capt"className = "lead">Platform: Android</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
     id = "carouselImage"
      className="d-block w-100"
      src={gamejam}
      alt="Second slide"
    />

    <Carousel.Caption className = "caption">
      <h3 id = "capt">Are you sure?</h3>
        <p id = "capt"className = "lead">Platform: PC</p>
    </Carousel.Caption>
  </Carousel.Item>
 
  <Carousel.Item>
    <img
     id = "carouselImage"
      className="d-block w-100"
      src={ninjat}
      alt="Second slide"
    />

    <Carousel.Caption className = "caption">
      <h3 id = "capt">Ninja: Training to Win</h3>
        <p id = "capt"className = "lead">Platform: PC</p>
    </Carousel.Caption>
  </Carousel.Item>
  
  <Carousel.Item>
    <img
     id = "carouselImage"
      className="d-block w-100"
      src={gameplay}
      alt="Second slide"
    />

    <Carousel.Caption className = "caption">
      <h3 id = "capt">Infinite Driving 3D</h3>
        <p id = "capt"className = "lead">Platform: PC</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
     id = "carouselImage"
      className="d-block w-100"
      src={workshop}
      alt="Second slide"
    />

    <Carousel.Caption className = "caption">
      <h3 id = "capt">Platform 2D Prototype</h3>
        <p id = "capt"className = "lead">Platform: PC</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
     id = "carouselImage"
      className="d-block w-100"
      src={cSys}
      alt="Third slide"
    />

<Carousel.Caption className = "caption">
      <h3 id = "capt">Camouflage System</h3>
      <p id = "capt"className = "lead">Platform: PC</p>
    </Carousel.Caption>
  </Carousel.Item>

  
  <Carousel.Item>
    <img
     id = "carouselImage"
      className="d-block w-100"
      src={project}
      alt="Second slide"
    />

    <Carousel.Caption className = "caption">
      <h3 id = "capt">3D Projec Prototype</h3>
        <p id = "capt"className = "lead">Platform: PC</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
       </Container>
    )
}