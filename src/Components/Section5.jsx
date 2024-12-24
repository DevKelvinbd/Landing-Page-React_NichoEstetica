import styled, { css } from 'styled-components';
import { keyframes } from 'styled-components';
import Bel from '../assets/images/Bel.png'
import Fabio from '../assets/images/Fabio.png'
import Erica from '../assets/images/Erika.jpg'

import {
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBRow,
  } from "mdb-react-ui-kit";
import { useEffect, useRef, useState } from 'react';

// Adicione esta animação no início do arquivo, após os imports

const hintAnimation = keyframes`
  0%, 100% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-10px);
  }
  75% {
    transform: translateX(0);
  }
`;


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

        /* Large devices (desktops, 1280px and up) */
    @media (min-width: ${breakpoints.xl}) and (max-width: ${breakpoints.xxl}) {
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
    
    @media (min-width: ${breakpoints.xl}) and (max-width: ${breakpoints.xxl}) {
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

    @media (min-width: ${breakpoints.xl}) and (max-width: ${breakpoints.xxl}) {
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

    @media (min-width: ${breakpoints.xl}) and (max-width: ${breakpoints.xxl}) {
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

    @media (min-width: ${breakpoints.xl}) and (max-width: ${breakpoints.xxl}) {
        font-size: 3rem;
    }
`

const InstaName = styled.h6`
    color: #67293E;
    
    @media (min-width: ${breakpoints.xl}) and (max-width: ${breakpoints.xxl}) {
        font-size: 2rem;
    }
`

const ParagraphDepoimentos = styled.p`
    color: #67293E;
    font-size: 1.2rem;

    /* Extra small devices */
    @media (max-width: ${breakpoints.xs}) {
        font-size: 1rem;
        line-height: 1.4;
        padding: 0 0.5rem;
    }

    /* Small devices */
    @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm}) {
        font-size: 1.1rem;
        line-height: 1.4;
    }

    @media (min-width: ${breakpoints.xl}) and (max-width: ${breakpoints.xxl}) {
        font-size: 2.3rem;
        line-height: 1.1;
    }
`;

const ScrollContainer = styled(MDBContainer)`
    overflow-x: hidden;
    position: relative;
    width: 100%;
    max-width: 1200px;
    cursor: grab;
    user-select: none;
    -webkit-user-select: none;
    touch-action: pan-x;
    -webkit-touch-callout: none;
    -webkit-tap-highlight-color: transparent;

&:active {
    cursor: grabbing;
}

&::-webkit-scrollbar {
    height: 8px;
}

&::-webkit-scrollbar-track {
    background: #EFDBDB;
    border-radius: 10px;
}

&::-webkit-scrollbar-thumb {
    background-color: #96485C;
    border-radius: 10px;
}

/* Extra small devices */
@media (max-width: ${breakpoints.xs}) {
    max-width: 100%;
    padding: 0 0.5rem;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
}

/* Small devices */
@media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm}) {
    max-width: 100%;
    padding: 0 1rem;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
}

/* Medium devices */
@media (min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.md}) {
    max-width: 90%;
    overflow-x: auto;
    scroll-snap-type: x proximity;
}

/* Large devices */
@media (min-width: ${breakpoints.md}) and (max-width: ${breakpoints.lg}) {
    max-width: 95%;
    overflow-x: auto;
}

@media (min-width: ${breakpoints.xl}) and (max-width: ${breakpoints.xxl}) {
    max-width: 95%;
    overflow-x: auto;
}
`;

const ScrollRow = styled(MDBRow)`
    display: flex;
    flex-wrap: nowrap;
    transition: transform 0.3s ease-out;
    padding: 1rem 0;
    animation: ${({isAnimated}) => isAnimated ? css`${hintAnimation} 2s ease-in-out infinite` : 'none'};
    animation-delay: 1s;

    &:hover {
        animation: none;
    }

    /* Extra small devices */
    @media (max-width: ${breakpoints.xs}) {
        padding: 0.5rem 0;
    }

    /* Small to Medium devices */
    @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.md}) {
        padding: 0.75rem 0;
    }

    @media (min-width: ${breakpoints.xl}) and (max-width: ${breakpoints.xxl}) {
        width: 100%;
    }
`;

const DepoimentoCol = styled(MDBCol)`
    min-width: calc(100% / 3);
    flex: 0 0 calc(100% / 3);
    padding: 0 1rem;
    user-select: none;

    /* Extra small devices */
    @media (max-width: ${breakpoints.xs}) {
        min-width: 100%;
        flex: 0 0 100%;
        padding: 0 0.5rem;
    }

    /* Small devices */
    @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm}) {
        min-width: 90%;
        flex: 0 0 90%;
        padding: 0 0.75rem;
    }

    /* Medium devices */
    @media (min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.md}) {
        min-width: 50%;
        flex: 0 0 50%;
        padding: 0 1rem;
    }

    /* Large devices */
    @media (min-width: ${breakpoints.md}) and (max-width: ${breakpoints.lg}) {
        min-width: calc(100% / 3);
        flex: 0 0 calc(100% / 3);
    }

    @media (min-width: ${breakpoints.xl}) and (max-width: ${breakpoints.xxl}) {
        min-width: calc(100% / 3);
        flex: 0 0 calc(100% / 3);
    }
`;

const ImagemPerfil = styled.img`
    width: 150px;
    height: 150px;
    draggable: false;

    @media (min-width: ${breakpoints.xl}) and (max-width: ${breakpoints.xxl}) {
        width: 350px;
        height: 350px;
    }
`

const Section5 = () => {
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const scrollRef = useRef(null);
    const [isAnimated, setIsAnimated] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsAnimated(false);
        }, 6000); // Para a animação após 6 segundos
    
        return () => clearTimeout(timer);
    }, []);

    const handleTouchStart = (e) => {
        setIsAnimated(false);
        setIsDragging(true);
        setStartX(e.touches[0].pageX - scrollRef.current.offsetLeft);
        setScrollLeft(scrollRef.current.scrollLeft);
    };
    
    const handleTouchMove = (e) => {
        if (!isDragging) return;
        const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 2;
        scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    const startDragging = (e) => {
        setIsAnimated(false); // Para a animação quando começa o drag
        setIsDragging(true);
        setStartX(e.pageX - scrollRef.current.offsetLeft);
        setScrollLeft(scrollRef.current.scrollLeft);
    };

    const stopDragging = () => {
        setIsDragging(false);
    };

    const onDrag = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 2;
        scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    const depoimentos = [
        {
            imagem: Bel,
            nome: "Maria Isabel",
            instagram: "@isabel_barros",
            texto: "Passar pelas mãos da Alice Barros foi uma experiência incrível! Além de super profissional, ela tem um cuidado único que faz toda a diferença."
        },
        {
            imagem: Fabio,
            nome: "Fábio Mendes",
            instagram: "@fabiomendess",
            texto: "Não é apenas uma clínica, é um refúgio de bem-estar. Recebi um tratamento personalizado que deixou minha pele radiante. Com certeza, voltarei!"
        },
        {
            imagem: Erica,
            nome: "Erica Barros",
            instagram: "@ericashirley8547",
            texto: "Superou minhas expectativas! Os tratamentos são eficazes, e a equipe é extremamente qualificada. Mal posso esperar pela minha próxima visita."
        },
        {
            imagem: Erica,
            nome: "Erica Barros",
            instagram: "@ericashirley8547",
            texto: "Superou minhas expectativas! Os tratamentos são eficazes, e a equipe é extremamente qualificada. Mal posso esperar pela minha próxima visita."
        },
        // Você pode adicionar mais depoimentos aqui
    ];
      
    return (
        <Container>
            <ContentText>
                <Paragraph style={{margin: "0", padding:"0"}}>Depoimentos</Paragraph>
                <Title style={{padding: "0"}}>O que nossos<BrQl/>pacientes dizem?</Title>
            </ContentText>
            
            <ScrollContainer
                className="py-5"
                ref={scrollRef}
                onMouseDown={startDragging}
                onMouseUp={stopDragging}
                onMouseLeave={stopDragging}
                onMouseMove={onDrag}
                // Adicione estas três novas linhas:
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={stopDragging}
                style={{ 
                    overflow: isDragging ? 'hidden' : 'hidden',
                    touchAction: 'pan-x'  // Adicione esta linha
                }}
            >
                <ScrollRow className="text-center" isAnimated={isAnimated}>
                    {depoimentos.map((depoimento, index) => (
                        <DepoimentoCol key={index} className="mb-5 mb-md-0">
                            <div className="d-flex justify-content-center mb-4">
                                <ImagemPerfil
                                    src={depoimento.imagem}
                                    className="rounded-circle shadow-1-strong"
                                    alt={depoimento.nome}
                                />
                            </div>
                            <Nome className="mb-1">{depoimento.nome}</Nome>
                            <InstaName className="mb-2">{depoimento.instagram}</InstaName>
                            <ParagraphDepoimentos className="px-xl-3">
                                {depoimento.texto}
                            </ParagraphDepoimentos>
                        </DepoimentoCol>
                    ))}
                </ScrollRow>
            </ScrollContainer>
        </Container>
    );
}

export default Section5;