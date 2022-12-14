import { Link } from "react-router-dom";
import styled from "styled-components";

const FilmeStyled = styled.div`
    width: 129px;
    height: 193px;
    background: url(${(props) => props.urlFilme});
    background-size: contain;
    position: relative;
    h1{
        position: absolute;
        display: none;
        word-wrap: break-word;
        font-size: 20px;
        color: #FFFFFF;
        bottom: 10px;
        left: 10px;
    }
    :hover h1{
        display: block;
    }
    :hover{
        box-shadow: 0px -20px 30px -15px black inset;
        cursor: pointer;
    }
`

function Filme({ filme }) {
    return (
        <Link to={`/filme/${filme.id}`} >
            <FilmeStyled urlFilme={filme.posterURL} >
                <h1>{filme.title}</h1>
            </FilmeStyled>
        </Link>
    )
}

export default Filme;