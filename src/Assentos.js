import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import LoadingPage from "./LoadingPage";

function Assentos() {
    const {idSessao} = useParams();
    const [assentos, setAssentos] = useState({});
    const [receivedError, setReceivedError] = useState(false);
    useEffect(() => {
        const promisse = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`);
        promisse.then((response) => {
            setAssentos(response.data);
        });
        promisse.catch((error) => {
            alert(error.status);
            setReceivedError(true);
        });
    }, []);
    if (!receivedError && assentos.length === 0){
        return (
            <LoadingPage text='Carregando assentos da sessão!' />
        );
    }
    return (
        <>
            <Header />
            <Footer poster={sessoes.movie.posterURL} title={assentos.movie.title} sessao={assentos.day.weekday + assentos.name} />
        </>
    );
}

export default Assentos;