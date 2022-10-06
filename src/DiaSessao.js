import ShowTimeButton from "./ShowtimeButton";

function DiaSessao({ dia }) {
    return (
        <div>
            <h1>{dia.weekaday + dia.date}</h1>
            {dia.showtimes.map((showtime) => <ShowTimeButton showtime={showtime} key={showtime.id} />)}
        </div>
    );
}

export default DiaSessao;