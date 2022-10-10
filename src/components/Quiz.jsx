import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizQustions from './QuizQustions';

const Quiz = () => {
    const quizBySub = useLoaderData();
    const quizQustion = quizBySub.data;
    return (
        <div className='container mx-auto'>
            <div>
                <h2>This is quiz</h2>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Quiz;