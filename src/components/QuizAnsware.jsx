import React, { useState } from 'react';
import { toast } from 'react-toastify';

const QuizAnsware = ({ ansOption, id, getCorrectAnswer, btnState }) => {
    //state for after click bg color
    const [color, setColor] = useState("bg-blue-50");

    const [btn, setBtn] = btnState;


    const handleToSetBg = (ansOption) => {
        // handleToCurrectAns(ansOption);
        const ans = getCorrectAnswer === ansOption;
        if (ans) {
            toast.success('Congratulation! You choice the right one!', { autoClose: 1000 });
            setColor("bg-blue-400")
            setBtn("cursor-not-allowed")
        }
        else {
            toast.error('Opps! You choice wrong!', { autoClose: 1000 })
            setColor("bg-red-500")
            setBtn("cursor-not-allowed")
        }
    }

    return (
        <label className={`border rounded-md ${color} ${btn} py-5 px-3`}>
            <button className={btn} onClick={() => handleToSetBg(ansOption)} >
                <input className='mr-2 checked:bg-blue-500' type="radio" name={id} />
                <span >{ansOption}</span>
            </button>

        </label>
    );
};

export default QuizAnsware;