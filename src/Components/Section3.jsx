import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'antd';
import Botox from '../assets/images/botox.webp';
import Labial from '../assets/images/labial.webp';
import Harmonizacao from '../assets/images/harmonizacao-facial.webp';
import Button from '../assets/Atoms/Button';
import Rino from '../assets/images/rinoplastia.webp'
import Bioestimuladores from '../assets/images/Bioestimuladores.webp'
import FiosPdo from '../assets/images/Fiospdo.webp'

// Breakpoints padrão recomendados
const breakpoints = {
  xs: '320px',         // Extra small devices (mobile phones, less than 600px)
  sm: '598px',       // Small devices (small tablets and large phones, 598px and up)
  md: '962px',       // Medium devices (tablets, 962px and up)
  lg: '1200px',      // Large devices (desktops, 1200px and up)
  xl: '1920px',
  xxl: '2560px'       // Extra large devices (large desktops and TVs, 1920px and up)
};
// Container principal
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
  background-color: #efdbdb;
  width: 100%;
`;

// Contêiner do grid
const ContainerBox = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;

  @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm}) {

  }

  /* Small devices (small tablets and large phones, 598px and 962px) */
  @media (min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.md}) {
    width: 90%; 
  }

  /* Medium devices (tablets, 960px and up) */
  @media (min-width: ${breakpoints.md}) and (max-width: ${breakpoints.lg}) {
      
  }

  /* Large devices (desktops, 1280px and up) */
  @media (min-width: ${breakpoints.lg}) and (max-width: ${breakpoints.xl}) {
  
  }

  /* Extra large devices (large desktops and TVs, 1920px and up) */
  @media (min-width: ${breakpoints.xl}) {
    
  }
`;

// Título principal
const Title = styled.h1`
    font-size: 2.3rem;
    color: #96485C; 
    font-family: 'Kalnia';
    margin: 0;
    text-align: center;

    @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm}) {
        height: auto;
        width: auto;
        right: -7%;
        font-size: clamp(38px, 6vw, 48px);
        margin-bottom: 2rem;
        line-height: 0.9;
    }

    /* Small devices (small tablets and large phones, 598px and 962px) */
    @media (min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.md}) {
        height: auto;
        width: auto;
        right: -7%;
        font-size: clamp(45px, 15vw, 6vw);
        margin-bottom: 2rem;
        line-height: 0.9;
    }

    /* Medium devices (tablets, 960px and up) */
    @media (min-width: ${breakpoints.md}) and (max-width: ${breakpoints.lg}) {
        height: auto;
        width: auto;
        font-size: clamp(45px, 15vw, 5vw);
        margin-bottom: 2rem;
        line-height: 0.9;
    }

    /* Large devices (desktops, 1280px and up) */
    @media (min-width: ${breakpoints.lg}) and (max-width: ${breakpoints.xl}) {
        height: auto;
        width: auto;
        font-size: clamp(45px, 15vw, 4.5vw);
        margin-bottom: 2rem;
        line-height: 0.9;
    }

    @media (min-width: ${breakpoints.xl}) and (max-width: ${breakpoints.xxl}) {
        height: auto;
        width: auto;
        font-size: clamp(45px, 15vw, 4.5vw);
        margin-bottom: 2rem;
        line-height: 0.9;
    }
`

// Box individual de cada tratamento
const TreatmentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #e3a79e;
  border-radius: 1rem;
  overflow: hidden;
  padding: 1rem;
  width: 100%;
  max-width: 380px;
  height: 350px; /* Altura fixa */


  @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm}) {

  }

  /* Small devices (small tablets and large phones, 598px and 962px) */
  @media (min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.md}) {
    padding: 0.5rem;
  }

  /* Medium devices (tablets, 960px and up) */
  @media (min-width: ${breakpoints.md}) and (max-width: ${breakpoints.lg}) {
      
  }

  /* Large devices (desktops, 1280px and up) */
  @media (min-width: ${breakpoints.lg}) and (max-width: ${breakpoints.xl}) {

  }

  /* Extra large devices (large desktops and TVs, 1920px and up) */
  @media (min-width: ${breakpoints.xl}) {
    max-width: 700px;
    height: 550px; /* Altura fixa */


  }
`;

// Imagem do tratamento
const ImgBox = styled.div`
  width: 100%;
  height: 150px;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
  border-radius: 8px;
`;

// Título do tratamento
const TitleBox = styled.h2`
  font-family: 'Kalnia';
  color: #67293e;
  font-size: 1.5rem;
  margin: 1rem 0 0.5rem 0;
  text-align: center;

  @media (min-width: ${breakpoints.xl}) {
    font-size: 3.1rem;
  }
`;

// Descrição do tratamento
const ParagraphBox = styled.p`
  font-family: 'Poppins';
  color: #67293e;
  padding: 0 1rem;
  text-align: justify;
  flex-grow: 1;
  margin-bottom: 0;

  
  @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm}) {

  }

  /* Small devices (small tablets and large phones, 598px and 962px) */
  @media (min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.md}) {
    padding: 0 0.5rem;
  }

  /* Medium devices (tablets, 960px and up) */
  @media (min-width: ${breakpoints.md}) and (max-width: ${breakpoints.lg}) {
      
  }

  /* Large devices (desktops, 1280px and up) */
  @media (min-width: ${breakpoints.lg}) and (max-width: ${breakpoints.xl}) {
  
  }

  /* Extra large devices (large desktops and TVs, 1920px and up) */
  @media (min-width: ${breakpoints.xl}) {
    font-size: 1.95rem;
  }
`;

// Botão com espaço ajustado
const ButtonWrapper = styled.div`
  margin-top: 1rem;
`;

const BrQl = styled.br`

`


const Section3 = () => {
  const services = [
    {
      img: Botox,
      title: 'Botox Revitalizante',
      description:
        'Ideal para suavizar rugas e linhas de expressão, renovando o rosto com um aspecto jovem e descansado.',
      link: 'https://wa.me/558898153111?text=Ol%C3%A1%20Alice,%20gostaria%20de%20saber%20melhor%20sobre%20o%20tratamento%20de%20Botox%20Revitalizante'
    },
    {
      img: Labial,
      title: 'Preenchimento Labial',
      description:
        'Realça a beleza dos lábios com mais simetria e definição, suavizando sinais de envelhecimento.',
      link: 'https://wa.me/558898153111?text=Ol%C3%A1%20Alice,%20gostaria%20de%20saber%20melhor%20sobre%20o%20tratamento%20de%20Preenchimento%20Labial'
    },
    {
      img: Harmonizacao,
      title: 'Harmonização Facial',
      description:
        'Técnicas para equilibrar a simetria do rosto, ajustando proporções e valorizando a individualidade.',
      link: 'https://wa.me/558898153111?text=Ol%C3%A1%20Alice,%20gostaria%20de%20saber%20melhor%20sobre%20o%20tratamento%20de%20Harmoniza%C3%A7%C3%A3o%20Facial'
    },
    {
      img: Bioestimuladores,
      title: 'Bioestimuladores de Colágeno',
      description: 'Substâncias que estimulam o colágeno, melhorando a firmeza, uniformidade e minimizando sinais de envelhecimento.',
      link: 'https://wa.me/558898153111?text=Ol%C3%A1%20Alice,%20gostaria%20de%20saber%20melhor%20sobre%20o%20tratamento%20de%20Bio%20Estimuladores%20de%20Col%C3%A1geno'
    },
    {
      img: Rino,
      title: 'Rinomodelação',
      description: 'Técnica com ácido hialurônico para ajustar o contorno nasal, corrigindo imperfeições e resultados de rinoplastias.',
      link: 'https://wa.me/558898153111?text=Ol%C3%A1%20Alice,%20gostaria%20de%20saber%20melhor%20sobre%20o%20tratamento%20de%20Rinomodela%C3%A7%C3%A3o'
    },
    {
      img: FiosPdo,
      title: 'Fios de PDO',
      description: 'Fios reabsorvíveis que promovem lifting, firmeza, estímulo de colágeno e preenchimento facial não cirúrgico.',
      link: 'https://wa.me/558898153111?text=Ol%C3%A1%20Alice,%20gostaria%20de%20saber%20melhor%20sobre%20o%20tratamento%20de%20Fios%20de%20PDO'
    },
  ];
  
  return (
    <Container>
      <Title>Nossos<BrQl />Tratamentos</Title>
      <ContainerBox>
        <Row gutter={[24, 24]} justify="center">
          {services.map((service, index) => (
            <Col
              xs={24}
              sm={12}
              md={8}
              lg={8}
              xl={8}
              key={index}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <TreatmentBox>
                <ImgBox img={service.img} />
                <TitleBox>{service.title}</TitleBox>
                <ParagraphBox>{service.description}</ParagraphBox>
                <ButtonWrapper>
                  <Button
                    width="100%"
                    text="Quero saber mais"
                    onClick={() => window.open(service.link, '_blank')} // Abre o link em uma nova aba
                  />
                </ButtonWrapper>
              </TreatmentBox>
            </Col>
          ))}
        </Row>
      </ContainerBox>
    </Container>
  );
};

export default Section3;
