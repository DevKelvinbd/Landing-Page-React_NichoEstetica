import styled from "styled-components"
import AliceS6 from "../assets/images/AliceSection6.jpg"
import Paragraph from "antd/es/skeleton/Paragraph"

// Breakpoints padrão recomendados para React
const breakpoints = {
  xs: '320px',         // Extra small devices (mobile phones, less than 600px)
  sm: '598px',       // Small devices (small tablets and large phones, 598px and up)
  md: '962px',       // Medium devices (tablets, 962px and up)
  lg: '1200px',      // Large devices (desktops, 1200px and up)
  xl: '1920px',
  xxl: '2560px'       // Extra large devices (large desktops and TVs, 1920px and up)
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  background-color: #EFDBDB;
  padding: 0 0 2rem 0;

  @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm}) {

  }

  /* Small devices (small tablets and large phones, 598px and 962px) */
  @media (min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.md}) {
    flex-direction: row;
  }

  /* Medium devices (tablets, 960px and up) */
  @media (min-width: ${breakpoints.md}) and (max-width: ${breakpoints.lg}) {
    flex-direction: row;
  }

  /* Large devices (desktops, 1280px and up) */
  @media (min-width: ${breakpoints.lg}) and (max-width: ${breakpoints.xl}) {
    flex-direction: row;
  }  

  @media (min-width: ${breakpoints.xl}) and (max-width: ${breakpoints.xxl}) {
    flex-direction: row;
  }  
`

const DivText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: auto;
  flex-direction: column;

  @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm}) {

  }

  /* Small devices (small tablets and large phones, 598px and 962px) */
  @media (min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.md}) {
    width: 50%;
    margin: 1rem 1rem 1rem 0;
    align-items: flex-start;
  }

  /* Medium devices (tablets, 960px and up) */
  @media (min-width: ${breakpoints.md}) and (max-width: ${breakpoints.lg}) {
    width: 50%;
    margin: 3rem;
    align-items: flex-start;
  }

  /* Large devices (desktops, 1280px and up) */
  @media (min-width: ${breakpoints.lg}) and (max-width: ${breakpoints.xl}) {
    width: 50%;
    margin: 3rem;
    align-items: flex-start;
  }

  @media (min-width: ${breakpoints.xl}) and (max-width: ${breakpoints.xxl}) {
    width: 50%;
    margin: 3rem;
    align-items: flex-start;
  }
`

const DivImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: auto;
  flex-direction: column;

  @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm}) {
    width: 85%;
    margin-bottom: 1rem;
  }

  /* Small devices (small tablets and large phones, 598px and 962px) */
  @media (min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.md}) {
    width: 50%;
    margin: 0;
  }

  /* Medium devices (tablets, 960px and up) */
  @media (min-width: ${breakpoints.md}) and (max-width: ${breakpoints.lg}) {
    width: 40%;
    margin: 3rem 0 3rem 3rem;
  }

  /* Large devices (desktops, 1280px and up) */
  @media (min-width: ${breakpoints.lg}) and (max-width: ${breakpoints.xl}) {
    width: 40%;
    margin: 3rem 0 3rem 3rem;
  }

  @media (min-width: ${breakpoints.xl}) and (max-width: ${breakpoints.xxl}) {
    width: 40%;
    margin: 3rem 0 3rem 3rem;
  }
`

const AliceImg = styled.img`
  width: 90%;
  border-radius: 1.5rem;
  margin-bottom: 1rem;

  @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm}) {

  }

  /* Small devices (small tablets and large phones, 598px and 962px) */
  @media (min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.md}) {
    width: 80%;
  }

  /* Medium devices (tablets, 960px and up) */
  @media (min-width: ${breakpoints.md}) and (max-width: ${breakpoints.lg}) {
    width: 80%;
  }

  /* Large devices (desktops, 1280px and up) */
  @media (min-width: ${breakpoints.lg}) and (max-width: ${breakpoints.xl}) {
    width: 80%;
  }  
`

const TitleS6 = styled.h1`
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

    @media (min-width: ${breakpoints.xl}) and (max-width: ${breakpoints.xxl}) {
        height: auto;
        width: auto;
        padding: 0 1rem 0 0;
        font-size: clamp(45px, 15vw, 4.5vw);
        margin-bottom: 0.7rem;
        line-height: 0.9;
    }
`

const ParagraphS6 = styled.p`
  color: #67293E;
  text-align: justify;
  text-align-last: center;
  font-size: 1.2rem;

  @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm}) {
    font-size: 1.2rem;
  }

  /* Small devices (small tablets and large phones, 598px and 962px) */
  @media (min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.md}) {
    font-size: 1.2rem;
    text-align-last: left;
  }

  /* Medium devices (tablets, 960px and up) */
  @media (min-width: ${breakpoints.md}) and (max-width: ${breakpoints.lg}) {
    text-align-last: left;
    font-size: 1.3rem;
  }

  /* Large devices (desktops, 1280px and up) */
  @media (min-width: ${breakpoints.lg}) and (max-width: ${breakpoints.xl}) {
    text-align-last: left;
    font-size: 1.5rem;
  }  

  @media (min-width: ${breakpoints.xl}) and (max-width: ${breakpoints.xxl}) {
    text-align-last: left;
    font-size: 3rem;
  }  
`

const Section6 = () => {
  return (
    <Container>

        <DivImage>
          <AliceImg src={AliceS6} alt="teste" />
        </DivImage>

        <DivText>
          <TitleS6>Sobre mim</TitleS6>
          <ParagraphS6>Beleza e bem-estar sob medida</ParagraphS6>
          <ParagraphS6>Desde o início da minha trajetória na estética, transformo vidas com cuidados personalizados e foco no bem-estar integral. Ofereço tratamentos avançados, com uma equipe qualificada e equipamentos modernos, para garantir resultados duradouros e valorizar sua beleza natural em um ambiente acolhedor e de confiança.</ParagraphS6>
        </DivText>
    </Container>
  )
}

export default Section6