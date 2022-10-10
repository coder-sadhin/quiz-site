import React from 'react';

const QuizAnsware = ({ ansOption, id }) => {
    return (
        <div className='border rounded-md border-blue-50 py-3 px-3'>
            <p><input className='mr-2' type="radio" name={id} />{ansOption}</p>
        </div>
    );
};

export default QuizAnsware;