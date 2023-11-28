import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "./Loading";

const baseUrl = 'https://swapi.dev/api/films'

export default function MoviesList() {
    const [movies, setMovies] = useState([]);
    const [showLoading, setLoading] = useState(true);
    const { id } = useParams();

    // Since the api doen't provide user movies request we take all movies
    useEffect(() => {
        fetch(baseUrl)
            .then(res => res.json())
            .then(data => {
                setMovies(data.results);
                setLoading(false);
            })
    }, [id]);

    return (
        <>
            <h2>Person movies</h2>
            {showLoading
                ? <Loading />
                : movies.map(x => <li key={x.title}>{x.title}</li>)}
        </>
    );
}