import { useState } from 'react'

const Timer = function(props) {
    let [value, setTime] = useState(props.start);

    setTimeout(() => {
        setTime(() => value + 1)
    }, 1000)
    
    return (
        <div> 
            <p id="timer">Timer: {value}</p>
            <button onClick={() => value = 0}>Reset</button>
        </div>
    );
}

export default Timer;