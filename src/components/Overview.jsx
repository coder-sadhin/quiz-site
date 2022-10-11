

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, AreaChart, Area, } from 'recharts';


const Overview = () => {
    const [topics, setTopics] = useState([])
    console.log(topics);
    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/quiz')
            .then(data => {

                const topicsDataLoad = data.data.data;
                const topicsData = topicsDataLoad.map(topic => {
                    const topicData = {
                        name: topic.name,
                        total: topic.total
                    }
                    return topicData;

                })
                console.log(topicsDataLoad);
                setTopics(topicsData)
            })
    }, []);

    return (
        <div className='flex justify-center my-8'>
            <ResponsiveContainer width="90%" height={400}>
                <AreaChart
                    width={600}
                    height={400}
                    data={topics}
                    margin={{
                        top: 5,
                        right: 0,
                        left: 0,
                        bottom: 5,
                    }}
                >
                    {/* <Line type="monotone" dataKey="total" stroke="#8884d8" strokeWidth={2} /> */}
                    <Area type="monotone" dataKey="total" stroke="#8884d8" fill="#8884d8" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Overview;