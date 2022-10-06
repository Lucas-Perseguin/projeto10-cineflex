import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";

function Sessoes() {
    const {idFilme} = useParams();
    const [sessoes, setSessoes] = useState({});
    useEffect(() => {
        const promisse = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`);
        promisse.then((response) => {
            setSessoes(response.data);
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

export default Sessoes;