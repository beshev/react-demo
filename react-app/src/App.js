import './App.css';
import Counter from './Counter';
import Greeting from './Greeting';
import Movie from './Movie';
import Timer from './Timer';

function App() {
  return (
    <div className="App">
      <Movie
        title="Avengers"
        descprition="End game"
        year={2022}
        cast={["A", "B", "S"]} />

      <Counter start={1} />

      <Timer start={1} />
      
      <Greeting isLoggedIn name="Toti"/>

      <Greeting isLoggedIn={false} name="Jack"/>

    </div>
  );
}

export default App;
