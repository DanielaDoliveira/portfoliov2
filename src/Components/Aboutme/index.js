import { Container } from "react-bootstrap";


export default function Aboutme()
{
    return(
        <Container id = "aboutC"fluid>
            <h2>Seja bem vindo!</h2>
            <p className="lead">
            Eu sou Daniela, sou desenvolvedora e busco aperfeiçoar 
            meus conhecimentos todos os dias. Atualmente desenvolvo
             aplicações em C# com o auxílio da biblioteca Monobehaviour
              (Unity) e também em HTML, CSS e Javascript com o  
              auxílio do React. </p>
              <p className="lead">Gosto de desafios e eles são a minha
               motivação  para programar um software, por isso espero  
               que no mercado sempre surjam novas  oportunidades para 
               que eu possa me reinventar.</p>
               <p className="lead">Gosto muito de aprender e 
               ter novas experiências dentro e fora do desenvolvimento
                de software pois acredito que ser um desenvolvedor de
                 qualidade envolve muito mais do que habilidades com o 
                 código, mas  a capacidade de pensar por outros ângulos, 
                 melhorando assim a sua criatividade, ou seja, 
                 sua capacidade de resolver problemas.
            </p>
        </Container>
    )
}