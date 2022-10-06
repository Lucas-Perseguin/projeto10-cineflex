import ShowTimeButton from "./ShowtimeButton";

function DiaSessao({dia}) {
    return (
        <div key={dia.id}>
            <h1>{dia.weekaday + dia.date}</h1>
            {dia.showtimes.map((showtime) => <ShowTimeButton showtime={showtime} />)}
        </div>
    );
}

export default DiaSessao;