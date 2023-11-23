import './App.css';
import { useState, useRef, useEffect } from 'react';

function App() {
    const ref = useRef();
    const [checkbox, setCheckbox] = useState({});
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        age: '',
        gender: 'male',
        select: 'selected 3'
    });

    useEffect(() => {
        ref.current.value = form.firstName;
    }, [form.firstName])

    const onChange = (e) => {
        setForm(state => ({ ...state, [e.target.name]: e.target.value }))
    }

    const onCheckboxChange = (e) => {
        console.log(e.target);
        setCheckbox(state => ({ ...state, [e.target.name]: e.target.checked }))
    }

    return (
        <div className="App">
            <form>
                <div>
                    <label htmlFor='firstName' style={{ display: "block" }}>First name</label>
                    <input
                        id="firstName"
                        name="firstName"
                        value={form.firstName}
                        onChange={onChange} />
                </div>
                <div>
                    <label htmlFor='lastName' style={{ display: "block" }}>Last name</label>
                    <input
                        id="lastName"
                        name="lastName"
                        value={form.lastName}
                        onChange={onChange} />
                </div>
                <div>
                    <label htmlFor='age' style={{ display: "block" }}>Age</label>
                    <input
                        id="age"
                        name="age"
                        type="number"
                        value={Number(form.age)}
                        onChange={onChange} />
                </div>
                <div>
                    <label htmlFor='select' style={{ display: "block" }}>Select</label>
                    <select
                        id="select"
                        name="select"
                        value={form.select}
                        onChange={onChange}>
                        <option value='selected 1'>1</option>
                        <option value='selected 2'>2</option>
                        <option value='selected 3'>3</option>
                    </select>
                </div>
                <div>
                    <label htmlFor='male' >Male</label>
                    <input
                        type="radio"
                        id="male"
                        name="gender"
                        value="male"
                        onChange={onChange}
                        checked={form.gender === 'male'} />
                    <label htmlFor='male' >Female</label>
                    <input
                        type="radio"
                        id="female"
                        name="gender"
                        value="female"
                        onChange={onChange}
                        checked={form.gender === 'female'} />
                </div>
                <div>
                    <label>Box 1</label>
                    <input type="checkbox" name="box1" value="box1" id="box1" onChange={onCheckboxChange} checked={checkbox["box1"]} />
                    <label>Box 2</label>
                    <input type="checkbox" name="box2" value="box2" id="box2" onChange={onCheckboxChange} checked={checkbox["box2"]} />
                    <label>Box 3</label>
                    <input type="checkbox" name="box3" value="box3" id="box3" onChange={onCheckboxChange} checked={checkbox["box3"]} />
                </div>

                {/* Using REF */}
                <div>
                    <label htmlFor='uncontolled' style={{ display: "block", margin: "20px 0 0 0" }}>Uncontolled input via ref</label>
                    <input id="uncontolled" name="uncontolled" ref={ref} />
                </div>
            </form>
        </div>
    );
}

export default App;
