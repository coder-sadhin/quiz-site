import React from 'react';

const QuizAnsware = ({ ansOption, id, handleToCurrectAns }) => {
    return (
        <div className='border rounded-md border-blue-50 py-3 px-3'>
            <label><input className='mr-2 checked:bg-blue-500 checked:disabled' type="radio" name={id} /><span onClick={() => handleToCurrectAns(ansOption)} >{ansOption}</span>
            </label>
        </div>
    );
};

export default QuizAnsware;