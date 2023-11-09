const Movie = function (props) {
    return (
        <section>
            <h3>Titile: {props.title}</h3>
            <p>Description: {props.descprition + ' ' + props.year}</p>
            <p>Cast: {props.cast[0]} {props.cast[1]}</p>
        </section>
    );
}

export default Movie;