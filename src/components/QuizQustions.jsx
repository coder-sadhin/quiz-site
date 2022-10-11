import React, { useState } from 'react';
import { toast } from 'react-toastify';
import QuizAnsware from './QuizAnsware';
import { EyeIcon } from '@heroicons/react/24/solid'



const QuizQustions = ({ quizQuestion, index, right, wrong }) => {
    const { correctAnswer, options, question } = quizQuestion;
    // console.log(question)
    const [areaDisabled, setAreaDisabled] = useState("");
    // icone click show correct ans
    const handleToEyeIconClick = (index, correctAnswer) => {
        toast.info(`Quiz ${index + 1} Ans is:---- ${correctAnswer}`, { autoClose: 3000 });
    }

    return (
        <div className={`border rounded shadow-md bg-blue-400 shadow-slate-300 m-3 p-5  mx-auto w-10/12 ${areaDisabled}`}>
            <EyeIcon onClick={() => handleToEyeIconClick(index, correctAnswer)} className="absolute h-6 w-6 text-white" />
            <div className='text-center mb-4 text-3xl w-6/12 mx-auto'>
                <h3><span className='text-green-600 font-bold'>Quiz {index + 1}:</span> {question}</h3>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
                {
                    options.map(option => <QuizAnsware
                        id={index}
                        ansOption={option}
                        getCorrectAnswer={correctAnswer}
                        btnState={[areaDisabled, setAreaDisabled]}
                        rights={right}
                        wrongs={wrong}
                    />)

                }
            </div>
        </div>
    );
};

export default QuizQustions;