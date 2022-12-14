import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizItem from './QuizItem';

const Quizzes = () => {
    const quizzesApi = useLoaderData();
    const quizzesList = quizzesApi.data;

    return (
        <div className='container mx-auto'>
            <h1 className="md:text-5xl sm:text-4xl text-3xl font-bold uppercase text-center py-10">
                Our All Quiz Items
            </h1>
            <div className='w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>

                {
                    quizzesList.map(quiz => <QuizItem key={quiz.id} quiz={quiz} />)
                }
            </div>
        </div>
    )
};

export default Quizzes;