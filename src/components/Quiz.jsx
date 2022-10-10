import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizQustions from './QuizQustions';

const Quiz = () => {
    const quizBySub = useLoaderData();
    const { questions, total, id, name } = quizBySub.data;

    // console.log(id, total)
    return (
        <div className='container mx-auto'>
            <div>
                <h1 className="text-5xl font-bold uppercase text-center py-10">
                    Quiz of <span className='text-blue-500'>{name}</span>
                </h1>
            </div>
            <div className='flex flex-col gap-8'>
                {
                    questions.map(qus => <QuizQustions key={qus.id} quizQuestion={qus} />)
                }
            </div>
        </div>
    );
};

export default Quiz;