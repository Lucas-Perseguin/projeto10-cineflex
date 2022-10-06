import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Assento from "./Assento";
import Footer from "./Footer";
import Header from "./Header";
import LoadingPage from "./LoadingPage";

const AssentosStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    input{
        width: 80%;
        height: 51px;
    }
    label{
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
    }
`
const BotoesAssentos = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`

const LegendaAssentos = styled.div`
    display: flex;
    justify-content: space-between;
    width: 80%;
`

const Legenda = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    div{
        background: ${(props) => props.color};
        border: 1px solid #0E7D71;
        border-radius: 17px;
        width: 25px;
        height: 25px;
    }
    h2{
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
    }
`

const BotaoSelecionarAssentos = styled.button`
    width: 225px;
    height: 42px;
    background: #E8833A;
    border-radius: 3px;
`

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
            <AssentosStyled>
                <h1>Selecione o(s) assento(s)</h1>
                <BotoesAssentos>
                    {assentos.seats.map((assento) => <Assento assento={assento} />)}
                </BotoesAssentos>
                <LegendaAssentos>
                    <Legenda color="#1AAE9E">
                        <div></div>
                        <h2>Selecionado</h2>
                    </Legenda>
                    <Legenda color="#C3CFD9">
                        <div></div>
                        <h2>Disponível</h2>
                    </Legenda>
                    <Legenda color="#FBE192">
                        <div></div>
                        <h2>Indisponível</h2>
                    </Legenda>
                </LegendaAssentos>
                <label for="nome">Nome do comprador</label>
                <input name="nome" placeholder="Insira o nome do comprador" type="text" />
                <label for="cpf">CPF do comprador</label>
                <input name="cpf" placeholder="Insira o CPF do comprador" type="text" />
                <BotaoSelecionarAssentos>Reservar assento(s)</BotaoSelecionarAssentos>
            </AssentosStyled>
            <Footer poster={sessoes.movie.posterURL} title={assentos.movie.title} sessao={assentos.day.weekday + assentos.name} />
        </>
    );
}

export default Assentos;