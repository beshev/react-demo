import './App.css';
import { useState } from 'react';

function App() {
  const [firstName, setFirstName] = useState('Pesho');
  const [lastName, setLastName] = useState('G-to');

  setTimeout(() => {
    setFirstName('Gosho');
    setLastName('Old-G-to');
  }, 3000);

  return (
    <div className="App">
      <form>
        <div>
          <label htmlFor='firstName' style={{ display: "block" }}>First name</label>
          <input
            id="firstName"
            name="firstName"
            defaultValue={firstName}
            onChange={() => setFirstName('No change in input field!')} />
        </div>
        <div>
          <label htmlFor='lastName' style={{ display: "block" }}>Last name</label>
          <input
            id="lastName"
            name="lastName"
            defaultValue={lastName} />
        </div>
      </form>
    </div>
  );
}

export default App;
