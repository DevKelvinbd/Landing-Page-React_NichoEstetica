import styled from 'styled-components';
import Img from '../assets/images/women.png'

const Container = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 60vh;
    background-color: #EFDBDB;
    position: relative; /* Para o posicionamento absoluto da imagem */
`

const ContentText = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 75%;
    height: 100%;
    flex-direction: column;
    padding-left: 1rem;
`

const Title = styled.h1`
    font-size: 2.3rem;
    color: #96485C; 
    font-family: 'Kalnia';
    margin: 0;
`

const Paragraph = styled.p`
    color: #96485C;
    text-align: justify;
    margin: 0;
`

const Button = styled.button`
    width: 40%;
    border: none;
    margin-top: 1rem;
`

const ImagemS1 = styled.img`
    position: absolute;
     right: -12%; /* Mova a imagem 10% para fora da tela à direita */
    bottom: 0;
    width: 50%;
    height: auto;
`

const Section1 = () => {
  return (
    <Container>
        <ContentText>
                <Title>Sua beleza,<br /> Nossa paixão</Title>
                <Paragraph>Realce sua beleza com cuidados personalizados que valorizam cada detalhe do seu bem-estar.</Paragraph>
                <Button>Teste</Button>
        </ContentText>
            <ImagemS1 src={Img} alt="" />
    </Container>
  )
}

export default Section1