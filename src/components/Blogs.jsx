import React from 'react';

const Blogs = () => {
    return (
        <div className='grid grid-cols-1 w-10/12 mx-auto my-5'>
            <div className='border rounded m-3 p-3'>
                <h2 className='text-3xl text-blue-500 font-bold text-center my-5'>What is the purpose of react router?</h2>
                <p className='text-xl text-justify md:w-9/12 mx-auto'>
                    ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.
                </p>
            </div>
            <div className='border rounded m-3 p-3'>
                <h2 className='text-3xl text-blue-500 font-bold text-center my-5'>How does context api work ?</h2>
                <p className='text-xl text-justify md:w-9/12 mx-auto'>
                    The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.
                </p>
            </div>
            <div className='border rounded m-3 p-3'>
                <h2 className='text-3xl text-blue-500 font-bold text-center my-5'>How use href in react ?</h2>
                <p className='text-xl text-justify md:w-9/12 mx-auto'>
                    This href attribute contains the URL or path to the destination page. It may be a relative URL or an absolute URL. In React, relative URLs should always be handled by the link tag provided by the React Router, and pure anchor tags should only be used for absolute paths.
                </p>
            </div>
        </div>
    );
};

export default Blogs;