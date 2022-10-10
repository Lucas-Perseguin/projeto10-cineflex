import styled from "styled-components";
import ShowTimeButton from "./ShowtimeButton";

const ContainerSessao = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    h1{
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
    }
`

function DiaSessao({ dia }) {
    console.log(dia)
    return (
        <ContainerSessao>
            <h1>{dia.weekday} {dia.date}</h1>
            <div>
                {dia.showtimes.map((showtime) => <ShowTimeButton showtime={showtime} key={showtime.id} />)}
            </div>
        </ContainerSessao>
    );
}

export default DiaSessao;