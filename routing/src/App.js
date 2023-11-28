import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import { Navigation } from './components/Navigation';
import { Suspense, lazy } from 'react';

const PeopleList = lazy(() => import('./components/PeopleList'));
const Person = lazy(() => import('./components/Person'));

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Navigation>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/people">People</Link></li>
                </Navigation>
                <Suspense fallback={<h1>Loading...</h1>}>
                    <Routes>
                        <Route path="*" element={<h1>Not found</h1>} />
                        <Route path="/" element={<h1>Welcome</h1>} />
                        <Route path="/people" element={<PeopleList />} />
                        <Route path="/people/:id" element={<Person />} />
                        <Route path="/people/:id/*" element={<Person />} />
                    </Routes>
                </Suspense>
            </header>
        </div>
    );
}

export default App;
