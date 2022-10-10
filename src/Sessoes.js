import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import DiaSessao from "./DiaSessao";
import Header from "./Header";
import LoadingPage from "./LoadingPage";
import Footer from "./Footer.js"

const ContainerSessoes = styled.div`
    margin-top: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-bottom: 130px;
    gap: 20px;
    >h1{
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
    }
`

const FilmeDados = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 90%;
    gap: 20px;
    img{
        width: 129px;
        height: 193px;
    }
    >div{
        display: flex;
        gap: 10px;
        width: 100%;
        word-wrap: break-word;
        color: #000000;
        h1{
            font-size: 24px;
            font-weight: 800;
        }
    }
    p{
            font-size: 18px;
            font-weight: 400;
            color: #000000;
    }
`

function Sessoes({ setObjetoSucesso }) {
    const { idFilme } = useParams();
    const [sessoes, setSessoes] = useState({});
    const [receivedError, setReceivedError] = useState(false);
    const [auxDate, setDate] = useState("");
    useEffect(() => {
        console.log('ola')
        const promisse = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`);
        promisse.then((response) => {
            setSessoes(response.data);
            const aux = { title: response.data.title };
            setObjetoSucesso(aux);
            setDate(response.data.releaseDate.slice(0, 10).split('-').reverse().join('/'));
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
                        <div>
                            <img src={sessoes.posterURL} alt="Poster do filme" />
                            <div>
                                <h1>{sessoes.title}</h1>
                                <br />
                                <h2>Data de lançamento:</h2>
                                <h3>{`${auxDate}`}</h3>
                            </div>
                        </div>
                        <p>{sessoes.overview}</p>
                    </FilmeDados>
                    <h1>Selecione o horário</h1>
                    {sessoes.days.map((dia) => <DiaSessao dia={dia} key={dia.id} />)}
                </ContainerSessoes>
                <Footer poster={sessoes.posterURL} title={sessoes.title} sessao={null} />
            </>
        );
    }
}

export default Sessoes;