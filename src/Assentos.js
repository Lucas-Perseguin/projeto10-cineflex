import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";

function Assentos() {
    const {idSessao} = useParams();
    const [assentos, setAssentos] = useState({});
    useEffect(() => {
        const promisse = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`);
        promisse.then((response) => {
            setAssentos(response.data);
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

export default Assentos;