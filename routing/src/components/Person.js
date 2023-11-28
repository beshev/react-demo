import { useEffect, useState } from "react";
import { Routes, Route, useParams, NavLink } from "react-router-dom";
import { Navigation } from "./Navigation";
import PersonMovies from "./PersonMovies";
import Loading from "./Loading";
const baseUrl = 'https://swapi.dev/api/people'

export default function Person({
}) {
    const [person, setPerson] = useState({});
    const [showLoading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        fetch(`${baseUrl}/${id}`)
            .then(res => res.json())
            .then(data => {
                setPerson(data);
                setLoading(false);
            })
    }, [])

    return (

        <>
            <h4>Person</h4>
            {showLoading
                ? <Loading />
                : <>
                    <h3>{person.name}</h3>
                    <p>Height: {person.height}</p>
                    <p>Mass: {person.mass}</p>
                    <p>Birth Year: {person.birth_year}</p>
                    <Navigation>
                        <li><NavLink style={(isActive) => ({ color: isActive ? 'purple' : 'white' })} to={`/people/${id}/movies`}>Movies</NavLink></li>
                        <li><NavLink style={(isActive) => ({ color: isActive ? 'purple' : 'white' })} to={`/people/${id}/planets`}>Planets</NavLink></li>
                    </Navigation>

                    <Routes>
                        <Route path="/movies" element={<PersonMovies />} />
                        <Route path="/planets" element={<h4>To be continued...</h4>} />
                    </Routes>
                </>
            }
        </>
    );
}