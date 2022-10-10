import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
    margin-top: 80px;
    gap: 20px;
    margin-bottom: 130px;
    input{
        width: 80%;
        height: 51px;
        margin-top: -15px;
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
    width: 86%;
    max-width: 350px;
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
    color: #FFFFFF;
    border: none;
    font-weight: 400;
    font-size: 18px;
`

function Assentos({ objetoSucesso, setObjetoSucesso }) {
    const { idSessao } = useParams();
    const [assentos, setAssentos] = useState({});
    const [receivedError, setReceivedError] = useState(false);
    const [assentosSelecionados, setAssentosSelecionados] = useState([]);
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const navigate = useNavigate();
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
    function handleSubmit() {
        if (nome && cpf && assentosSelecionados.length > 0) {
            const submitObject = { ids: assentosSelecionados, name: nome, cpf: cpf };
            const aux = { ...objetoSucesso };
            aux.weekday = assentos.day.weekday;
            aux.date = assentos.day.date;
            aux.time = assentos.name;
            aux.name = nome;
            aux.cpf = cpf;
            const auxContaAssentos = [...assentosSelecionados];
            aux.seats = auxContaAssentos.map((id) => {
                if (id % 50 === 0) {
                    return 50;
                }
                else {
                    return (id % 50);
                }
            });
            setObjetoSucesso(aux);
            const promisse = axios.post('https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many', submitObject);
            promisse.then((response) => {
                navigate('/sucesso');
            });
        }
        else if (!nome || !cpf) {
            alert('Insira o nome e o cpf do comprador');
        }
        else if (assentosSelecionados.length === 0) {
            alert('Selecione pelo menos 1 engresso');
        }
    }
    if (!receivedError && !('seats' in assentos)) {
        return (
            <LoadingPage text='Carregando assentos da sessão!' />
        );
    }
    else if (!receivedError && Array.isArray(assentos.seats)) {
        return (
            <>
                <Header />
                <AssentosStyled>
                    <h1>Selecione o(s) assento(s)</h1>
                    <BotoesAssentos>
                        {assentos.seats.map((assento) => <Assento key={assento.id} assento={assento} assentosSelecionados={assentosSelecionados} setAssentosSelecionados={setAssentosSelecionados} />)}
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
                    <label htmlFor="nome">Nome do comprador</label>
                    <input name="nome" placeholder="Insira o nome do comprador" type="text" onChange={(event) => setNome(event.target.value)} />
                    <label htmlFor="cpf">CPF do comprador</label>
                    <input name="cpf" placeholder="Insira o CPF do comprador" type="text" onChange={(event) => setCpf(event.target.value)} />
                    <BotaoSelecionarAssentos onClick={() => handleSubmit()} >Reservar assento(s)</BotaoSelecionarAssentos>
                </AssentosStyled>
                <Footer poster={assentos.movie.posterURL} title={assentos.movie.title} sessaoDia={assentos.day.weekday} sessaoHora={assentos.name} />
            </>
        );
    }
}

export default Assentos;