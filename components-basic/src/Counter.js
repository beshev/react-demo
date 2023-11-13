import { useState } from 'react'

const Counter = function(props) {
    const [value, setCount] = useState(props.start)
    
    return (
        <div>
            <p>Counter: {value}</p>
            <button onClick={() => setCount(() => value - 1)}>-</button>
            <button onClick={() => setCount(props.start)}>Reset</button>
            <button onClick={() => setCount(() => value + 1)}>+</button>
        </div>
    );
}

export default Counter;