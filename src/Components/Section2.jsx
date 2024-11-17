import styled from 'styled-components';
import Flower from '../assets/images/iconFlower.svg'
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
    justify-content: center;
    align-items: center;
    flex-direction: row;
    padding: 2rem 0;
    width: 100%;
    height: auto;
    background-color: #EFDBDB;
    position: relative; /* Para o posicionamento absoluto da imagem */

    /* Small devices (small tablets and large phones, 598px and 962px) */
    @media (min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.md}) {
        height: 100vh;
        width: 100%;
        justify-content: flex-start;

    }

    /* Medium devices (tablets, 960px and up) */
    @media (min-width: ${breakpoints.md}) and (max-width: ${breakpoints.lg}) {
        height: auto;
    }
    
    /* Large devices (desktops, 1280px and up) */
    @media (min-width: ${breakpoints.lg}) and (max-width: ${breakpoints.xl}) {
        height: 100vh;
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
        align-items: flex-start;
        text-align: left;
    }

    /* Medium devices (tablets, 960px and up) */
    @media (min-width: ${breakpoints.md}) and (max-width: ${breakpoints.lg}) {
        width: 100%;
        padding: 2rem 10%;
        align-items: flex-start;
        text-align: left;
    }

    /* Large devices (desktops, 1280px and up) */
    @media (min-width: ${breakpoints.lg}) and (max-width: ${breakpoints.xl}) {
        width: 100%;
        padding: 2rem 10%;
        align-items: flex-start;
        text-align: left;
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
        text-align: left;
        padding: 0 1rem 0 0;
        font-size: clamp(18px, 10vw, 2vw);
        margin-bottom: 0.7rem;
        line-height: 0.9;
    }

    /* Medium devices (tablets, 960px and up) */
    @media (min-width: ${breakpoints.md}) and (max-width: ${breakpoints.lg}) {
        height: auto;
        width: auto;
        text-align: left;
        padding: 0 1rem 0 0;
        font-size: clamp(18px, 10vw, 2vw);
        margin-bottom: 0.7rem;
        line-height: 0.9;
    }

    /* Large devices (desktops, 1280px and up) */
    @media (min-width: ${breakpoints.lg}) and (max-width: ${breakpoints.xl}) {
        height: auto;
        width: auto;
        text-align: left;
        padding: 0 6rem 0 0;
        font-size: clamp(18px, 10vw, 1.5vw);
        margin-bottom: 0.7rem;
        line-height: 0.9;
    }
`

const Caract = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: auto;
    height: auto;
    gap: 7px;
    
    @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm}) {
        flex-direction: column;
    }

    /* Small devices (small tablets and large phones, 598px and 962px) */
    @media (min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.md}) {
        align-items: flex-start;
    }

    /* Medium devices (tablets, 960px and up) */
    @media (min-width: ${breakpoints.md}) and (max-width: ${breakpoints.lg}) {
        align-items: flex-start;
    }

    /* Large devices (desktops, 1280px and up) */
    @media (min-width: ${breakpoints.lg}) and (max-width: ${breakpoints.xl}) {
        align-items: flex-start;
    }
`

const ImgCaract = styled.img`
    width: 2.2rem;
    margin-bottom: 0rem; 
`

const TitleCaract = styled.h1`
    font-family: 'Kalnia';
    color: #BC6366;
    margin: 0;
`

const ParCaract = styled.p`
    color: #96485C;
    text-align: center;
    margin-top: 0.2rem;
    font-family: 'Poppins', sans-serif;
    line-height: 1.1; /* Ajuste para o valor desejado */
    font-size: 1.1rem;

    /* Small devices (small tablets and large phones, 598px and 962px) */
    @media (min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.md}) {
        text-align: left;
    }

    /* Medium devices (tablets, 960px and up) */
    @media (min-width: ${breakpoints.md}) and (max-width: ${breakpoints.lg}) {
        text-align: left;
    }

    /* Large devices (desktops, 1280px and up) */
    @media (min-width: ${breakpoints.lg}) and (max-width: ${breakpoints.xl}) {
        text-align: left;
    }
`

const BrQl = styled.br`

`

const Block = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.40rem;

    /* Small devices (small tablets and large phones, 598px and 962px) */
    @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm}) {
        flex-direction: column;
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



` 
const ContainerCaract = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    /* Small devices (small tablets and large phones, 598px and 962px) */
    @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm}) {
        flex-direction: column;
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


`

const Section2 = () => {
  return (
    <Container>
        <ContentText>
            <Title>A Experiência<BrQl />Estética da Alice</Title>
            <Paragraph>Entre em um espaço onde seu bem-estar e o cuidado com sua pele são prioridade, com atendimento feito sob medida.</Paragraph>
            
            <Caract>
                <Block style={{marginTop: "1.5rem"}}>
                    <ImgCaract src={Flower} alt=""  />
                    <TitleCaract>Naturalidade</TitleCaract>
                </Block>
                <ParCaract>Realçamos a sua beleza natural, para que você se sinta única e confiante em cada detalhe.</ParCaract>

                <Block>
                    <ImgCaract src={Flower} alt="" />
                    <TitleCaract>Harmonia</TitleCaract>
                </Block>
                <ParCaract>Cada tratamento é pensado para trazer equilíbrio e realçar o que há de melhor em você.</ParCaract>

                <ContainerCaract>
                    <ImgCaract style={{marginRight: "0.3rem", marginBottom: "0.3rem"}} src={Flower} alt="" />
                    <Block>
                        <TitleCaract>Cuidado Especializado</TitleCaract>
                    </Block>
                </ContainerCaract>
                    <ParCaract>Com técnicas avançadas e um olhar atento, nosso compromisso é com sua satisfação e autoestima.</ParCaract>
            </Caract>
            <Button
                width="50%"
                text="Faça seu agendamento"
                onClick={() =>
                    window.open(
                        'https://wa.me/558898153111?text=Ol%C3%A1%20Alice!%20Gostaria%20de%20conhecer%20o%20seu%20trabalho.',
                        '_blank'
                    )
                }
            />
        </ContentText>

    </Container>
  )
}

export default Section2