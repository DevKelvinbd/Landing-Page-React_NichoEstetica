import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import Bel from "../images/Bel.png";
import Gaby from "../images/Bel.png";
import Mara from "../images/Bel.png";
import Luiza from "../images/Bel.png";

const SliderContainer = styled.div`
  width: 100%;
  margin: 2rem 0;

  .slick-slide > div {
    padding: 0 10px;
  }

  .slick-dots li button:before {
    color: #96485c;
  }

  .slick-prev,
  .slick-next {
    z-index: 1;
    color: #96485c;
  }
`;

const TestimonialCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Espaça o conteúdo entre o topo e a base */
  align-items: center;
  min-height: 350px; /* Altura mínima */
  background-color: #E3A79E;
  border-radius: 3rem 0.2rem 3rem 0.2rem;
  padding: 1.5rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Paragraph = styled.p`
  font-family: "Poppins";
  font-size: 1.2rem;
  color: #67293e;
  padding: 0 1rem;
  margin-bottom: 1.5rem; /* Espaço entre o texto e o ProfileDiv */
  text-align: justify;
  margin-top: 1rem;
`;

const ProfileDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0rem 1rem 0 1rem;
  gap: 1rem; /* Espaçamento entre a imagem e o nome */
`;

const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;

const Title = styled.h1`
  font-size: 1.2rem;
  color: #67293E;
  font-weight: bold;
  margin: 0;
`;

const UserProfile = styled.h2`
  margin: 0;
  padding: 0;
  font-size: 1rem;
  color: #67293E; 
  font-family: "Poppins";

`

const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

const DivMain = styled.div`
  display: flex;
  width: 90%;
  heigth: auto;
`

const SimpleSlider = () => {

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "none", color: "red" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "none" }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  const testimonials = [
    { mensagem: "Não é apenas uma clínica, é um refúgio de bem-estar. Recebi um tratamento personalizado que deixou minha pele radiante. Com certeza, voltarei!", nome: "Isabel Barros", img: Bel, perfil: "@isabel" },
    { mensagem: "Superou minhas expectativas! Os tratamentos são eficazes, e a equipe é extremamente qualificada. Mal posso esperar pela minha próxima visita.", nome: "Gaby Barbosa", img: Gaby, perfil: "@isabel" },
    { mensagem: "Serviço de excelente qualidade.", nome: "Mara Marília", img: Mara, perfil: "@isabel" },
    { mensagem: "Recomendo a todos, experiência incrível!", nome: "Maria Bel", img: Luiza, perfil: "@isabel" },
  ];

  return (
  <DivMain>
    <SliderContainer>
      <Slider {...settings}>
        {testimonials.map((item, index) => (
          <TestimonialCard key={index}>
            <ProfileDiv>
              <ProfileImage src={item.img} alt={item.nome} />
              <TextDiv>
                <Title>{item.nome}</Title>
                <UserProfile>{item.perfil}</UserProfile>
              </TextDiv>
            </ProfileDiv>
            <Paragraph>{item.mensagem}</Paragraph>
          </TestimonialCard>
        ))}
      </Slider>
    </SliderContainer>
  </DivMain>
  );
};

export default SimpleSlider;
