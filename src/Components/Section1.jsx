import styled from 'styled-components';
import Img from '../assets/images/women.png'
import Img2 from '../assets/images/women2.png'
import Button from '../assets/Atoms/Button';

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
    justify-content: flex-start;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 60vh;
    background-color: #EFDBDB;
    position: relative; /* Para o posicionamento absoluto da imagem */
    gap: 20px;

    @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm}) {
        
    }

    /* Small devices (small tablets and large phones, 598px and 962px) */
    @media (min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.md}) {
        height: 80vh;
    }

    /* Medium devices (tablets, 960px and up) */
    @media (min-width: ${breakpoints.md}) and (max-width: ${breakpoints.lg}) {
        height: 100vh;
    }

    /* Large devices (desktops, 1280px and up) */
    @media (min-width: ${breakpoints.lg}) and (max-width: ${breakpoints.xl}) {
        height: 100vh;
    }

`

const ContentText = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 75%;
    height: 100%;
    flex-direction: column;
    padding-left: 1rem;
    position: relative;
    z-index: 1; /* Conteúdo principal abaixo da Overlay */

    @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm}) {
        width: 70%;
        padding-left: 5vw;
    }

    /* Small devices (small tablets and large phones, 598px and 962px) */
    @media (min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.md}) {
        width: 50%;
        padding-left: 10vw;
    }

    /* Medium devices (tablets, 960px and up) */
    @media (min-width: ${breakpoints.md}) and (max-width: ${breakpoints.lg}) {
        width: 60%;
        padding-left: 10%;
    }

    /* Large devices (desktops, 1280px and up) */
    @media (min-width: ${breakpoints.lg}) and (max-width: ${breakpoints.xl}) {
        width: 60%;
        padding-left: 10%;
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
        padding: 0 1rem 0 0;
        font-size: clamp(35px, 8vw, 48px);
        margin-bottom: 0.7rem;
        line-height: 0.9;
    }

    /* Small devices (small tablets and large phones, 598px and 962px) */
    @media (min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.md}) {
        height: auto;
        width: auto;
        padding: 0 1rem 0 0;
        font-size: clamp(45px, 15vw, 6vw);
        margin-bottom: 0rem;
        line-height: 0.9;
    }

    /* Medium devices (tablets, 960px and up) */
    @media (min-width: ${breakpoints.md}) and (max-width: ${breakpoints.lg}) {
        height: auto;
        width: auto;
        padding: 0 1rem 0 0;
        font-size: clamp(45px, 15vw, 6vw);
        margin-bottom: 0rem;
        line-height: 0.9;
    }

    /* Large devices (desktops, 1280px and up) */
    @media (min-width: ${breakpoints.lg}) and (max-width: ${breakpoints.xl}) {
        height: auto;
        width: auto;
        padding: 0 1rem 0 0;
        font-size: clamp(45px, 15vw, 6vw);
        margin-bottom: 0rem;
        line-height: 0.9;
    }

`

const Paragraph = styled.p`
    color: #96485C;
    text-align: left;
    margin: 0;
    font-family: 'Poppins', sans-serif;
    margin-top: 0.5rem;
    line-height: 1.1; /* Ajuste para o valor desejado */
    
    @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm}) {
        height: auto;
        width: auto;
        font-size: 1rem;
        padding: 0 1.5rem 0 0;
        line-height: 0.9;
    }

    /* Small devices (small tablets and large phones, 598px and 962px) */
    @media (min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.md}) {
        height: auto;
        width: auto;
        padding: 0 1rem 0 0;
        font-size: clamp(18px, 10vw, 2vw);
        margin-bottom: 0.7rem;
        line-height: 0.9;
    }

    /* Medium devices (tablets, 960px and up) */
    @media (min-width: ${breakpoints.md}) and (max-width: ${breakpoints.lg}) {
        height: auto;
        width: auto;
        right: -7%;
        padding: 0 1rem 0 0;
        font-size: clamp(18px, 10vw, 2vw);
        margin-bottom: 0.7rem;
        line-height: 0.9;
    }

    /* Large devices (desktops, 1280px and up) */
    @media (min-width: ${breakpoints.lg}) and (max-width: ${breakpoints.xl}) {
        height: auto;
        width: auto;
        right: -7%;
        padding: 0 1rem 0 0;
        font-size: clamp(18px, 10vw, 2vw);
        margin-bottom: 0.7rem;
        line-height: 0.9;
    }
`

const ImagemS1 = styled.img`
    position: absolute;
    right: -12%; /* Mova a imagem 10% para fora da tela à direita */
    bottom: 0;
    width: 50%;
    height: auto;

    @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm}) {
        max-height: 90%;
        width: auto;
        right: -2vw;
    }

    /* Small devices (small tablets and large phones, 598px and 962px) */
    @media (min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.md}) {
        display: none;
        max-height: 90%;
        width: auto;
        right: 0;
    }

    /* Medium devices (tablets, 960px and up) */
    @media (min-width: ${breakpoints.md}) and (max-width: ${breakpoints.lg}) {
        display: none;
    }

        /* Large devices (desktops, 1280px and up) */
    @media (min-width: ${breakpoints.lg}) and (max-width: ${breakpoints.xl}) {
        display: none;
    }
`

const Imagem2S1 = styled.img`
    display: none;
    position: absolute;
    bottom: 0;
    right: 0;
    width: 50%;
    height: auto;

    @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm}) {

    }

    /* Small devices (small tablets and large phones, 598px and 962px) */
    @media (min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.md}) {
        display: flex;
        max-height: 90%;
        width: auto;
    }

    /* Medium devices (tablets, 960px and up) */
    @media (min-width: ${breakpoints.md}) and (max-width: ${breakpoints.lg}) {
        display: flex;
        max-height: 90%;
        width: auto;
    }

    /* Large devices (desktops, 1280px and up) */
    @media (min-width: ${breakpoints.lg}) and (max-width: ${breakpoints.xl}) {
        display: flex;
        max-height: 90%;
        width: auto;
    }
`

const Section1 = () => {
  return (
    <Container>
        <ContentText>
            <Title>Sua beleza,<br /> Nossa paixão</Title>
            <Paragraph>Realce sua beleza com cuidados personalizados que valorizam cada detalhe do seu bem-estar.</Paragraph>
            <Button text="Marque sua consulta" />
        </ContentText>
        <ImagemS1 src={Img} alt="" />
        <Imagem2S1 src={Img2} alt="" />
    </Container>
  )
}

export default Section1