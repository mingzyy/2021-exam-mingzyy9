import React from 'react';
import { useRecoilState } from 'recoil';
import { counterState } from '../states/counter';

const Counter = () => {
    const [counter, setCounter] = useRecoilState(counterState);
    const [state, setState] = useState({});

    const handleChange = (evt) => {
        setState({
            ...state,
            [evt.target.name]: Number(evt.target.value)
        })
    };

    const handleClickPlus = () => {
        setCounter(counter + (state?.plus ?? 1));
    }

    const handleClickMinus = () => {
        setCounter(counter - (state?.plus ?? 1));
    }

    return (
        <div>
            <input type="text" name="plus" value={state?.plus} onChange={handleChange}></input>
            <button onClick={handleClickPlus}>+</button>
            <input type="text" name="minus" value={state?.minus} onChange={handleChange}></input>
            <button onClick={handleClickMinus}>-</button>
            
        </div>
    );
};

export default Counter;