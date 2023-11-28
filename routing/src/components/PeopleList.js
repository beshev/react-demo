import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Loading from './Loading';

const baseUrl = 'https://swapi.dev/api/people';

export default function PeopleList() {
    const [people, setPeople] = useState([]);
    const [showLoading, setLoading] = useState(true);

    useEffect(() => {
        fetch(baseUrl)
            .then(res => res.json())
            .then(data => {
                setPeople(data.results);
                setLoading(false);
            })
    }, [])


    return (
        <>
            <h1>People List</h1>
            <ul>
                {showLoading
                    ? <Loading />
                    : people.map(x => {
                        const id = x.url.split('/').filter(v => v != "").pop();
                        return (
                            <li key={x.url}>
                                <Link to={`/people/${id}`}>{x.name}</Link>
                            </li>
                        )
                    })}
            </ul>
        </>
    );
}