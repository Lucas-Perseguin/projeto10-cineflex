import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import DiaSessao from "./DiaSessao";
import Header from "./Header";
import LoadingPage from "./LoadingPage";
import Footer from "./Footer.js"

const ContainerSessoes = styled.div`
    margin-top: 67px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const FilmeDados = styled.div`
    display: flex;
    width: 100%;
    img{
        width: 129px;
        height: 193px;
    }
    div{
        width: 200px;
        word-break: break-all;
        word-wrap: break-word;
        color: #000000;
        h1{
            font-size: 28px;
            font-weight: 800;
        }
        p{
            font-size: 24px;
            font-weight: 400;
        }
    }
`

function Sessoes({ setObjetoSucesso }) {
    const { idFilme } = useParams();
    const [sessoes, setSessoes] = useState({});
    const [receivedError, setReceivedError] = useState(false);
    useEffect(() => {
        console.log('ola')
        const promisse = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`);
        promisse.then((response) => {
            setSessoes(response.data);
            const aux = { title: response.data.title };
            setObjetoSucesso(aux);
            console.log(response.data)
        });
        promisse.catch((error) => {
            alert(error.status);
            setReceivedError(true);
        });
    }, []);
    if (!receivedError && !('days' in sessoes)) {
        return (
            <LoadingPage text='Carregando sessões disponíveis!' />
        );
    }
    else if (!receivedError && sessoes.days.length > 0) {
        return (
            <>
                <Header />
                <ContainerSessoes>
                    <FilmeDados>
                        <img src={sessoes.posterURL} alt="Poster do filme" />
                        <div>
                            <h1>{sessoes.title}</h1>
                            <p>{sessoes.overview}</p>
                        </div>
                    </FilmeDados>
                    {sessoes.days.map((dia) => <DiaSessao dia={dia} key={dia.id} />)}
                </ContainerSessoes>
                <Footer poster={sessoes.posterURL} title={sessoes.title} sessao={null} />
            </>
        );
    }
}

export default Sessoes;