import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";

const SucessoStyled = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    button{
        width: 225px;
        height: 42px;
        background: #E8833A;
        border-radius: 3px;
        color: #FFFFFF;
        border: none;
        font-weight: 400;
        font-size: 18px;
    }
`

const MenssagemSucesso = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    color: #247A6B;
    margin-top: 80px;
    margin-bottom: 20px;
`

const Dados = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    gap: 30px;
    margin-bottom: 20px;
    h1{
        font-style: normal;
        font-weight: 700;
        font-size: 22px;
        margin-bottom: 5px;
    }
    p{
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
    }
`

function Sucesso({ objetoSucesso }) {
    const navigate = useNavigate();
    return (
        <>
            <Header />
            <SucessoStyled>
                <MenssagemSucesso>
                    Pedido feito com sucesso!
                </MenssagemSucesso>
                <Dados>
                    <div>
                        <h1>Filme e sessão</h1>
                        <p>{objetoSucesso.title}</p>
                        <p>{objetoSucesso.weekday}</p>
                        <p>{objetoSucesso.date} {objetoSucesso.time}</p>
                    </div>
                    <div>
                        <h1>Ingressos</h1>
                        {objetoSucesso.seats.map((seat, index) => <p key={index}>Assento {seat}</p>)}
                    </div>
                    <div>
                        <h1>Comprador</h1>
                        <p>Nome: {objetoSucesso.name}</p>
                        <p>CPF: {objetoSucesso.cpf}</p>
                    </div>
                </Dados>
                <button onClick={() => navigate('/')}>Voltar para Home</button>
            </SucessoStyled>
        </>
    );
}

export default Sucesso;