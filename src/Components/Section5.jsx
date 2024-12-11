import styled from 'styled-components';
import Bel from '../assets/images/Bel.png'
import Fabio from '../assets/images/Fabio.png'
import Erica from '../assets/images/Erika.jpg'

import {
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBRow,
    MDBTypography,
  } from "mdb-react-ui-kit";


// Breakpoints padrão recomendados para React
const breakpoints = {
    xs: '320px',         // Extra small devices (mobile phones, less than 600px)
    sm: '598px',       // Small devices (small tablets and large phones, 598px and up)
    md: '962px',       // Medium devices (tablets, 962px and up)
    lg: '1200px',      // Large devices (desktops, 1200px and up)
    xl: '1920px'       // Extra large devices (large desktops and TVs, 1920px and up)
};

//   @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm}) {


//   }

//   /* Small devices (small tablets and large phones, 598px and 962px) */
//   @media (min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.md}) {
  
//   }

//   /* Medium devices (tablets, 960px and up) */
//   @media (min-width: ${breakpoints.md}) and (max-width: ${breakpoints.lg}) {
      
//   }

//   /* Large devices (desktops, 1280px and up) */
//   @media (min-width: ${breakpoints.lg}) and (max-width: ${breakpoints.xl}) {
  
//   }

//   /* Extra large devices (large desktops and TVs, 1920px and up) */
//   @media (min-width: ${breakpoints.xl}) {
  
//   }


const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 1rem 0;
    width: 100%;
    height: auto;
    background-color: #EFDBDB;
    position: relative; /* Para o posicionamento absoluto da imagem */

    /* Small devices (small tablets and large phones, 598px and 962px) */
    @media (min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.md}) {
        height: auto;
        width: 100%;
        justify-content: flex-start;

    }

    /* Medium devices (tablets, 960px and up) */
    @media (min-width: ${breakpoints.md}) and (max-width: ${breakpoints.lg}) {
        height: auto;
    }
    
    /* Large devices (desktops, 1280px and up) */
    @media (min-width: ${breakpoints.lg}) and (max-width: ${breakpoints.xl}) {
        height: auto;
    }

`

const ContentText = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: 100%;
    flex-direction: column;
    text-align: center;

    @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm}) {
        width: 100%;
        padding: 2rem 1rem; 
        flex-direction: column;
    }

    /* Small devices (small tablets and large phones, 598px and 962px) */
    @media (min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.md}) {
        width: 100%;
        padding: 2rem 10%;
         text-align: center;

    }

    /* Medium devices (tablets, 960px and up) */
    @media (min-width: ${breakpoints.md}) and (max-width: ${breakpoints.lg}) {
        width: 100%;
        padding: 2rem 10%;
         text-align: center;
    }

    /* Large devices (desktops, 1280px and up) */
    @media (min-width: ${breakpoints.lg}) and (max-width: ${breakpoints.xl}) {
        width: 100%;
        padding: 2rem 10%;
         text-align: center;

    }
`

const Title = styled.h1`
    font-size: 2.3rem;
    color: #96485C; 
    font-family: 'Kalnia';
    margin: 0;

    @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm}) {
        height: auto;
        width: auto;
        right: -7%;
        padding: 0;
        font-size: clamp(38px, 6vw, 48px);
        margin-bottom: 0;
        line-height: 0.9;
    }

    /* Small devices (small tablets and large phones, 598px and 962px) */
    @media (min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.md}) {
        height: auto;
        width: auto;
        right: -7%;
        padding: 0 1rem 0 0;
        font-size: clamp(45px, 15vw, 6vw);
        margin-bottom: 0.7rem;
        line-height: 0.9;
    }

    /* Medium devices (tablets, 960px and up) */
    @media (min-width: ${breakpoints.md}) and (max-width: ${breakpoints.lg}) {
        height: auto;
        width: auto;
        padding: 0 1rem 0 0;
        font-size: clamp(45px, 15vw, 5vw);
        margin-bottom: 0.7rem;
        line-height: 0.9;
    }

    /* Large devices (desktops, 1280px and up) */
    @media (min-width: ${breakpoints.lg}) and (max-width: ${breakpoints.xl}) {
        height: auto;
        width: auto;
        padding: 0 1rem 0 0;
        font-size: clamp(45px, 15vw, 4.5vw);
        margin-bottom: 0.7rem;
        line-height: 0.9;
    }
`

const Paragraph = styled.p`
    color: #96485C;
    text-align: center;
    margin-top: 0.5rem;
    font-family: 'Poppins', sans-serif;
    line-height: 1.1; /* Ajuste para o valor desejado */
    font-size: 1.3rem;
    
    @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm}) {
        height: auto;
        width: auto;
        font-size: 1.1rem;
        padding: 0;
        margin-top: 0.5rem;
        line-height: 0.9;
    }

    /* Small devices (small tablets and large phones, 598px and 962px) */
    @media (min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.md}) {
        height: auto;
        width: auto;
        text-align: center;
        padding: 0 1rem 0 0;
        font-size: clamp(18px, 10vw, 2vw);
        margin-bottom: 0.7rem;
        line-height: 0.9;
    }

    /* Medium devices (tablets, 960px and up) */
    @media (min-width: ${breakpoints.md}) and (max-width: ${breakpoints.lg}) {
        height: auto;
        width: auto;
        text-align: center;
        padding: 0 1rem 0 0;
        font-size: clamp(18px, 10vw, 2vw);
        margin-bottom: 0.7rem;
        line-height: 0.9;
    }

    /* Large devices (desktops, 1280px and up) */
    @media (min-width: ${breakpoints.lg}) and (max-width: ${breakpoints.xl}) {
        height: auto;
        width: auto;
        text-align: center;
        padding: 0 6rem 0 0;
        font-size: clamp(18px, 10vw, 1.5vw);
        margin-bottom: 0.7rem;
        line-height: 0.9;
    }
`

const BrQl = styled.br`

`

const Nome = styled.h5`
    color: #67293E;
`

const InstaName = styled.h6`
    color: #67293E;
`

const ParagraphDepoimentos = styled.p`
    color: #67293E;
`

const Section5 = () => {
  return (
    <Container>
        <ContentText>
            <Paragraph style={{margin: "0", padding:"0"}}>Depoimentos</Paragraph>
            <Title style={{padding: "0"}}>O que nossos<BrQl/>pacientes dizem?</Title>
        </ContentText>
        
            <MDBContainer className="py-5">
                <MDBRow className="text-center">
                    <MDBCol md="4" className="mb-5 mb-md-0">
                    <div className="d-flex justify-content-center mb-4">
                        <img
                        src={Bel}
                        className="rounded-circle shadow-1-strong"
                        width="150"
                        height="150"
                        />
                    </div>
                    <Nome className="mb-1">Maria Isabel</Nome>
                    <InstaName className="mb-2">@isabel_barros</InstaName>
                    <ParagraphDepoimentos className="px-xl-3">
                        Passar pelas mãos da Alice Barros foi uma experiência incrível! Além de super profissional, ela tem um cuidado único que faz toda a diferença.
                    </ParagraphDepoimentos>
                    <MDBTypography
                        listUnStyled
                        className="d-flex justify-content-center mb-0"
                    >
                    </MDBTypography>
                    </MDBCol>
                    <MDBCol md="4" className="mb-5 mb-md-0">
                    <div className="d-flex justify-content-center mb-4">
                        <img
                        src={Fabio}
                        className="rounded-circle shadow-1-strong"
                        width="150"
                        height="150"
                        />
                    </div>
                    <Nome className="mb-1">Fábio Mendes</Nome>
                    <InstaName className="mb-2">@fabiomendess</InstaName>
                    <ParagraphDepoimentos className="px-xl-3">
                        Não é apenas uma clínica, é um refúgio de bem-estar. Recebi um tratamento personalizado que deixou minha pele radiante. Com certeza, voltarei!
                    </ParagraphDepoimentos>
                    <MDBTypography
                        listUnStyled
                        className="d-flex justify-content-center mb-0"
                    >
                    </MDBTypography>
                    </MDBCol>
                    <MDBCol md="4" className="mb-5 mb-md-0">
                    <div className="d-flex justify-content-center mb-4">
                        <img
                        src={Erica}
                        className="rounded-circle shadow-1-strong"
                        width="150"
                        height="150"
                        />
                    </div>
                    <Nome className="mb-1">Erica Barros</Nome>
                    <InstaName className="mb-2">@ericashirley8547</InstaName>
                    <ParagraphDepoimentos className="px-xl-3">
                        Superou minhas expectativas! Os tratamentos são eficazes, e a equipe é extremamente qualificada. Mal posso esperar pela minha próxima visita.
                    </ParagraphDepoimentos>
                    <MDBTypography
                        listUnStyled
                        className="d-flex justify-content-center mb-0 p-0"
                    >
                    </MDBTypography>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>

    </Container>
  )
}

export default Section5