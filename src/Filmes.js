import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./Header.js"
import LoadingPage from "./LoadingPage.js";

function Filmes() {
    const [filmes, setFilmes] = useState({})
    const [receivedError, setReceivedError] = useState(false);
    useEffect(() => {
        const promisse = axios.get('https://mock-api.driven.com.br/api/v5/cineflex/movies');
        promisse.then((response) => {
            setFilmes(response.data);
        });
        promisse.catch((error) => {
            alert(error.status);
            setReceivedError(true);
        });
    }, []);
    if (!receivedError && filmes.length === 0){
        return(
            <LoadingPage text='Carregando os filmes que estão no cinema mais próximo a você!' />
        );
    }
    return(
        <>
            <Header />
        </>
    );
}

export default Filmes;