import styled from "styled-components"
import LogoAlice from '../assets/images/logo-alice.png'

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
  height: 70vh;
  background-color: #E3A79E;
  padding: 2rem 0 2rem 0;
  gap: 50px;

  @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm}) {
    height: auto;
    

  }

  /* Small devices (small tablets and large phones, 598px and 962px) */
  @media (min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.md}) {
    flex-direction: row;
    height: auto;

  }

  /* Medium devices (tablets, 960px and up) */
  @media (min-width: ${breakpoints.md}) and (max-width: ${breakpoints.lg}) {
    flex-direction: row;
    height: auto;

  }

  /* Large devices (desktops, 1280px and up) */
  @media (min-width: ${breakpoints.lg}) and (max-width: ${breakpoints.xl}) {
    flex-direction: row;
    height: auto;
  }  

  @media (min-width: ${breakpoints.xl}) and (max-width: ${breakpoints.xxl}) {
    flex-direction: row;
    height: 70vh;
  }  
    
`

const Div1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 80%;
  height: 100%;
  // gap: 20px; 

  @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm}) {

  }

  /* Small devices (small tablets and large phones, 598px and 962px) */
  @media (min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.md}) {
    width: 50%;
  }

  /* Medium devices (tablets, 960px and up) */
  @media (min-width: ${breakpoints.md}) and (max-width: ${breakpoints.lg}) {
    width: 50%;

  }

  /* Large devices (desktops, 1280px and up) */
  @media (min-width: ${breakpoints.lg}) and (max-width: ${breakpoints.xl}) {
    width: 50%;

  }  
     
  @media (min-width: ${breakpoints.xl}) and (max-width: ${breakpoints.xxl}) {
    width: 80%;
  }  
`

const Div2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 80%;
  height: auto;

  @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm}) {

  }

  /* Small devices (small tablets and large phones, 598px and 962px) */
  @media (min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.md}) {
    width: 50%;
    align-items: flex-start;

  }

  /* Medium devices (tablets, 960px and up) */
  @media (min-width: ${breakpoints.md}) and (max-width: ${breakpoints.lg}) {
    width: 50%;
    align-items: flex-start;

  }

  /* Large devices (desktops, 1280px and up) */
  @media (min-width: ${breakpoints.lg}) and (max-width: ${breakpoints.xl}) {
    width: 50%;
    align-items: flex-start;
  }  

  @media (min-width: ${breakpoints.xl}) and (max-width: ${breakpoints.xxl}) {
    width: 50%;
    align-items: flex-start;
  }  
`

const Title = styled.h1`
    font-size: 2.3rem;
    color: #811E3E; 
    font-family: 'Kalnia';
    margin: 0;
    text-align: center;

    @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm}) {

    }

    /* Small devices (small tablets and large phones, 598px and 962px) */
    @media (min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.md}) {
      
    }

    /* Medium devices (tablets, 960px and up) */
    @media (min-width: ${breakpoints.md}) and (max-width: ${breakpoints.lg}) {

    }

    /* Large devices (desktops, 1280px and up) */
    @media (min-width: ${breakpoints.lg}) and (max-width: ${breakpoints.xl}) {

    }  

    @media (min-width: ${breakpoints.xl}) and (max-width: ${breakpoints.xxl}) {
      font-size: 6rem;
    }  

`

const Title2 = styled.h1`
    font-size: 1.7rem;
    color: #811E3E; 
    font-family: 'Kalnia';
    margin: 0;
    text-align: center;
    font-weight: 600;

    @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm}) {

    }

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

        /* Large devices (desktops, 1280px and up) */
    @media (min-width: ${breakpoints.xl}) and (max-width: ${breakpoints.xxl}) {
      text-align: left;
      font-size: 5rem;
      }  
`

const Image = styled.img`
  margin-top: 1rem;
  width: 200px;

  @media (min-width: ${breakpoints.xl}) and (max-width: ${breakpoints.xxl}) {
    text-align: left;
    width: 700px;
    margin-top: 1rem;
  }  
`

const Paragraph1 = styled.p`
  font-size: 1.2rem;
  text-align: center;
  color: #811E3E;

    @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm}) {

    }

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

    @media (min-width: ${breakpoints.lg}) and (max-width: ${breakpoints.xl}) {
      text-align: left;
    }  
    
    @media (min-width: ${breakpoints.xl}) and (max-width: ${breakpoints.xxl}) {
      font-size: 3rem;
    }  
`

const Section7 = () => {
  return (
    <Container>
      <Div1>
        <Image src={LogoAlice} alt="" />
        <hr style={{border: '1.5px solid', color: '#811E3E', width: '60%'}} />
        <Title>Sua beleza<br />Nossa Paixão</Title>
      </Div1>
      <Div2>
        <Title2>Endereço</Title2>
        <Paragraph1>Rua Alfredo Machado, N86, São José</Paragraph1>
        
        <Title2>Contato</Title2>
        <Paragraph1>+55 (88) 9 9815-3111</Paragraph1>

        <Title2>Funcionamento</Title2>
        <Paragraph1>Segunda a Sexta - 9 às 18hrs</Paragraph1>
      </Div2>
    </Container>
  )
}

export default Section7