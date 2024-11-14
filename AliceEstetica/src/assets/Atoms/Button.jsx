import styled from "styled-components"

const But = styled.button`
    width: ${(props) => props.width || '75%'};
    border: none;
    font-family: 'Poppins', sans-serif;
    margin-top: 0.8rem;
    background-color: #BC6366;
    color: #ffffff;
    padding: 0.8rem 1.5rem;
    border-radius: 1rem 0 1rem 0;
    font-size: 2.3vh;
`

const Button = ({text, width}) => {
  return (
    <But width={width}>{text}</But>
  )
}

export default Button