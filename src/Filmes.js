import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./Header.js"

function Filmes() {
    const [filmes, setFilmes] = useState({})
    useEffect(() => {
        const promisse = axios.get('https://mock-api.driven.com.br/api/v5/cineflex/movies');
        promisse.then((response) => {
            setFilmes(response.data);
        });
        promisse.catch((error) => {
            alert(error.status);
        });
    }, []);
    return(
        <>
            <Header />
        </>
    );
}

export default Filmes;