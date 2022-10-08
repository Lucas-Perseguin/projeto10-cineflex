import styled from "styled-components";
import Loader from "./img/Spin-1s-200px.gif"

const LoadingPageStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    h1{
        font-weight: 400;
        font-size: 23px;
        color: #EC362D;
        margin-top: 24px;
    }
`

function LoadingPage({ text }) {
    return (
        <LoadingPageStyled>
            <img src={Loader} alt="Símbolo de carreagar tela" className="carregamento-simbolo" />
            <h1>{text}</h1>
        </LoadingPageStyled>
    );
}

export default LoadingPage;