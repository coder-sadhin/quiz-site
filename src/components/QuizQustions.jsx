import React, { useState } from 'react';
import QuizAnsware from './QuizAnsware';


const QuizQustions = ({ quizQuestion, index }) => {
    const { correctAnswer, id, options, question } = quizQuestion;
    // console.log(question)
    const [btn, setBtn] = useState("");

    return (
        <div className={`border rounded shadow-md shadow-slate-300 m-3 p-5  mx-auto w-10/12 ${btn}`}>
            <div className='text-center mb-4 text-3xl w-6/12 mx-auto'>
                <h3><span className='text-green-600 font-bold'>Quiz {index + 1}:</span> {question}</h3>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
                {
                    options.map(option => <QuizAnsware
                        id={index}
                        ansOption={option}
                        getCorrectAnswer={correctAnswer}
                        btnState={[btn, setBtn]}
                    />)

                }
            </div>
        </div>
    );
};

export default QuizQustions;