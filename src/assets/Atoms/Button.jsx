import styled from "styled-components";

const But = styled.button`
    width: ${(props) => props.width || '75%'};
    border: none;
    font-family: 'Poppins', sans-serif;
    margin-top: 0rem;
    background-color: #BC6366;
    color: #ffffff;
    padding: 0.8rem 1.5rem;
    border-radius: 1rem 0 1rem 0;
    font-size: 2.3vh;
    cursor: pointer;
    transition: background-color 0.3s ease; /* Transição suave */

    &:hover {
        background-color: #67293E; /* Cor mais escura ao passar o mouse */
        cursor: pointer;
    }
`;

const Button = ({ text, width, onClick }) => {
    return (
        <But width={width} onClick={onClick}>
            {text}
        </But>
    );
};

export default Button;
