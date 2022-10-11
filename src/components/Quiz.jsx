import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizQustions from './QuizQustions';


const Quiz = () => {
    const quizBySub = useLoaderData();
    const { questions, name } = quizBySub.data;

    const [right, setRight] = useState(0);
    const [wrong, setWrong] = useState(0);

    // console.log(id, total)
    return (
        <div className='container mx-auto'>
            <div>
                <h1 className="text-5xl font-bold uppercase text-center py-10">
                    Quiz of <span className='text-blue-500'>{name}</span>
                </h1>
                <div className='flex border rounded-md w-10/12 mx-auto justify-evenly'>
                    <h3 className='p-2 font-3xl font-bold border rounded-l w-full text-white text-center bg-green-500'>Total Correct Answer: {right}</h3>
                    <h3 className='p-2 font-3xl font-bold border rounded-r w-full text-white text-center bg-red-600'>Total Wrong Answer: {wrong}</h3>
                </div>
            </div>
            <div className='flex flex-col gap-8'>
                {
                    questions.map((qus, index) =>
                        <QuizQustions key={qus.id}
                            index={index} quizQuestion={qus}
                            right={[right, setRight]}
                            wrong={[wrong, setWrong]}
                        />)
                }
            </div>

        </div>
    );
};

export default Quiz;