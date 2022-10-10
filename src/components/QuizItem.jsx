import React from 'react';
import { Link } from 'react-router-dom';

const QuizItem = ({ quiz }) => {
    const { id, logo, name, total } = quiz;
    return (
        <div className='border rounded border-blue-600'>
            <div className='p-2'>
                <div className='bg-green-400'>
                    <img src={logo} alt="" />
                </div>
                <div className='flex items-center justify-between pt-2 '>
                    <p className='text-blue-600 font-bold'>{name}</p>
                    <p className='text-blue-600 font-bold'>{total}</p>
                    <p>
                        <Link to={`/quizzes/${id}`}><button className='bg-green-400 border rounded py-1 px-5'>Get Start</button></Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default QuizItem;