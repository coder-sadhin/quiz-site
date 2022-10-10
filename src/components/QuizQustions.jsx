import React from 'react';
import QuizAnsware from './QuizAnsware';

const QuizQustions = ({ quizQuestion }) => {
    const { correctAnswer, id, options, question } = quizQuestion;
    console.log(question)

    // console.log(lastCharOfId);

    return (
        <div className='bg-yellow-200'>
            <div>
                <h3>Quiz: {question}</h3>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
                {
                    options.map(option => <QuizAnsware key={option.id} id={id} ansOption={option} />)
                }
            </div>
        </div>
    );
};

export default QuizQustions;