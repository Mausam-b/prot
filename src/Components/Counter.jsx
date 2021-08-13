import { useState } from 'react'
import './counter.scss';

function Counter() {

    let [input, setInput] = useState("");

    function inputHandler(event) {
       setInput(event.target.value);
    }

    return (
        <div className="counter">
            <h1>Live Character Counter</h1>
            <div className="counter_container">
                <textarea className="my-text" name="textarea" placeholder="Type here..."  rows="7" cols="70"onChange={inputHandler}></textarea>

                <div className="counter_pluse"><em>Total Characters: {input.length}</em></div>
                <div className="counter_minuse"><em>Remaining characters: {1720 - input.length}</em></div>
            </div>
        </div>
    );
}
export default Counter;
