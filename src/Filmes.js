import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Filme from "./Filme.js";
import Header from "./Header.js"
import LoadingPage from "./LoadingPage.js";

const ContainerFilmes = styled.div`
    margin-top: 80px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    >div{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        overflow-y: scroll;
        margin-bottom: 40px;
        gap: 10px;
    }
    h1{
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        margin-bottom: 20px;
    }
`

function Filmes() {
    const [filmes, setFilmes] = useState({})
    const [receivedError, setReceivedError] = useState(false);
    useEffect(() => {
        const promisse = axios.get('https://mock-api.driven.com.br/api/v5/cineflex/movies');
        promisse.then((response) => {
            setFilmes(response.data);
        });
        promisse.catch((error) => {
            console.log(error.status);
            setReceivedError(true);
        });
    }, []);
    if (!receivedError && filmes.length === 0) {
        return (
            <LoadingPage text='Carregando os filmes que estão no cinema mais próximo a você!' />
        );
    }
    else if (!receivedError && filmes.length > 0) {
        return (
            <>
                <Header />
                <ContainerFilmes>
                    <h1>Selecione o filme</h1>
                    <div>
                        {filmes.map((filme) => <Filme filme={filme} key={filme.id} />)}
                    </div>
                </ContainerFilmes>
            </>
        );
    }
}

export default Filmes;