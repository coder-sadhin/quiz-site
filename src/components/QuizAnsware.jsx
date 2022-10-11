import React, { useState } from 'react';
import { toast } from 'react-toastify';

const QuizAnsware = ({ ansOption, id, getCorrectAnswer, btnState, rights, wrongs }) => {
    //state for after click bg color
    const [color, setColor] = useState("bg-blue-50");
    //after click area will not allaow cursor
    const [areaDisabled, setAreaDisabled] = btnState;
    // right ans set state
    const [right, setRight] = rights;
    // wrong ans set state
    const [wrong, setWrong] = wrongs;


    const handleToSetBg = (ansOption) => {
        // handleToCurrectAns(ansOption);
        const ans = getCorrectAnswer === ansOption;
        if (ans) {
            toast.success('Congratulation! You choice the right one!', { autoClose: 1000 });
            setColor("bg-blue-400");
            setAreaDisabled("cursor-not-allowed");
            setRight(right + 1);
        }
        else {
            toast.error('Opps! You choice wrong!', { autoClose: 1000 });
            setColor("bg-red-500");
            setAreaDisabled("cursor-not-allowed");
            setWrong(wrong + 1);
        }
    }

    return (
        <label className={`border rounded-md ${color} ${areaDisabled} py-5 px-3`}>
            <button className={areaDisabled} onClick={() => handleToSetBg(ansOption)} >
                <input className='mr-2 checked:bg-blue-500' type="radio" name={id} />
                <span >{ansOption}</span>
            </button>

        </label>
    );
};

export default QuizAnsware;