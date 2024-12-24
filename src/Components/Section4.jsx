import React from 'react';
import styled from 'styled-components';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import { Row, Col } from 'antd';
import Antes1 from '../assets/images/antes1.jpg';
import Depois1 from '../assets/images/depois1.jpg';
import Antes2 from '../assets/images/antes2.jpg';
import Depois2 from '../assets/images/depois2.jpg';
import Antes3 from '../assets/images/antes3.jpg';
import Depois3 from '../assets/images/depois3.jpg';
import Button from '../assets/Atoms/Button';

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

const ContainerComparer = styled.div`
  display: flex;
  flex-direction: column;
  width: 65%;
  height: 70%;
  
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

  @media (min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.md}) {
    height: auto;
    width: auto;
    right: -7%;
    font-size: clamp(45px, 15vw, 6vw);
    margin-bottom: 2rem;
    line-height: 0.9;
  }

  @media (min-width: ${breakpoints.md}) and (max-width: ${breakpoints.lg}) {
    height: auto;
    width: auto;
    font-size: clamp(45px, 15vw, 5vw);
    margin-bottom: 2rem;
    line-height: 0.9;
  }

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
`;

const BrQl = styled.br``;

const Section4 = () => {
  const comparers = [
    { before: Antes1, after: Depois1, link: 'https://wa.me/558898153111?text=Ol%C3%A1%20Alice!%20Gostaria%20de%20conhecer%20o%20seu%20trabalho.' },
    { before: Antes2, after: Depois2, link: 'https://wa.me/558898153111?text=Ol%C3%A1%20Alice!%20Gostaria%20de%20conhecer%20o%20seu%20trabalho.' },
    { before: Antes3, after: Depois3, link: 'https://wa.me/558898153111?text=Ol%C3%A1%20Alice!%20Gostaria%20de%20conhecer%20o%20seu%20trabalho.' },
  ];

  return (
    <Container>
      <Title>Resultados<BrQl />Antes x Depois</Title>
      <ContainerComparer>
        <Row gutter={[16, 16]} justify="center">
          {comparers.map((item, index) => (
            <Col
              key={index}
              xs={24} // Uma coluna por linha em telas pequenas
              sm={24}
              md={8} // Duas colunas em telas médias
              lg={8} // Três colunas em telas grandes
            >
              <ReactCompareSlider
                style={{ borderRadius: '1rem', width: '100%' }}
                itemOne={<ReactCompareSliderImage src={item.before} alt={`Antes ${index + 1}`} />}
                itemTwo={<ReactCompareSliderImage src={item.after} alt={`Depois ${index + 1}`} />}
              />
            </Col>
          ))}
        <Button
          width="100%"
          text="Quero saber mais"
          onClick={() => window.open('https://wa.me/558898153111?text=Ol%C3%A1%20Alice!%20Gostaria%20de%20conhecer%20o%20seu%20trabalho.', '_blank')} // Abre o link em uma nova aba
        />
        </Row>
      </ContainerComparer>
    </Container>
  );
};

export default Section4;
