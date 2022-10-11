import React from 'react';
import { toast } from 'react-toastify';
import QuizAnsware from './QuizAnsware';

const QuizQustions = ({ quizQuestion }) => {
    const { correctAnswer, id, options, question } = quizQuestion;
    // console.log(question)
    const handleToCurrectAns = (option) => {
        // console.log(option)
        const ans = correctAnswer === option;
        if (ans) {
            toast.success('Congratulation! You choice the right one!', { autoClose: 1000 })
        }
        else {
            toast.error('Opps! You choice wrong!', { autoClose: 1000 })

        }

    }

    // console.log(lastCharOfId);

    return (
        <div className='bg-yellow-200'>
            <div>
                <h3>Quiz: {question}</h3>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
                {
                    options.map(option => <QuizAnsware handleToCurrectAns={handleToCurrectAns} id={id} ansOption={option} />)
                }
            </div>
        </div>
    );
};

export default QuizQustions;