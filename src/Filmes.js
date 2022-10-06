import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Filme from "./Filme.js";
import Header from "./Header.js"
import LoadingPage from "./LoadingPage.js";

const ContainerFilmes = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    overflow-y: scroll;
    width: 100%;
    height: 100%;
    margin-top: 67px;
    gap: 10px;
`

function Filmes() {
    const [filmes, setFilmes] = useState({})
    const [receivedError, setReceivedError] = useState(false);
    useEffect(() => {
        const promisse = axios.get('https://mock-api.driven.com.br/api/v5/cineflex/movies');
        promisse.then((response) => {
            setFilmes(response.data);
            console.log(response.data);
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
                    {filmes.map((filme) => <Filme filme={filme} key={filme.id} />)}
                </ContainerFilmes>
            </>
        );
    }
}

export default Filmes;