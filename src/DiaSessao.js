import ShowTimeButton from "./ShowtimeButton";

function DiaSessao({dia}) {
    return (
        <>
            <h1>{dia.weekaday + dia.date}</h1>
            {dia.showtimes.map((showtime) => <ShowTimeButton showtime={showtime} />)}
        </>
    );
}

export default DiaSessao;