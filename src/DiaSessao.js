import ShowTimeButton from "./ShowtimeButton";

function DiaSessao({ dia }) {
    console.log(dia)
    return (
        <div>
            <h1>{dia.weekday} {dia.date}</h1>
            {dia.showtimes.map((showtime) => <ShowTimeButton showtime={showtime} key={showtime.id} />)}
        </div>
    );
}

export default DiaSessao;