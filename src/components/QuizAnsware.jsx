import React, { useState } from 'react';
import { toast } from 'react-toastify';

const QuizAnsware = ({ ansOption, id, getCorrectAnswer, rights, wrongs, btnState }) => {
    //state for after click bg color
    const [color, setColor] = useState("bg-blue-50");
    // state for after click checked
    const [check, setCheck] = useState(false);
    // right ans set state
    const [right, setRight] = rights;
    // wrong ans set state
    const [wrong, setWrong] = wrongs;
    // btn disabled 
    const [disable, setDisable] = btnState;



    const handleToSetBg = (ansOption) => {
        // set check btn
        setCheck(true);
        //set disabled value
        setDisable(true);
        // handleToCurrectAns(ansOption);
        const ans = getCorrectAnswer === ansOption;
        if (ans) {
            toast.success('Congratulation! You choice the right one!', { autoClose: 1000 });
            setColor("bg-green-400");
            setRight(right + 1);
        }
        else {
            toast.error('Opps! You choice wrong!', { autoClose: 1000 });
            setColor("bg-red-500");
            setWrong(wrong + 1);
        }
    }

    return (
        <label className={`border rounded-md ${color} py-5 px-3`}>
            <button disabled={disable} onClick={() => handleToSetBg(ansOption)} >
                <input className='mr-2 checked:bg-blue-500' checked={check} type="radio" name={id} />
                <span >{ansOption}</span>
            </button>

        </label>
    );
};

export default QuizAnsware;