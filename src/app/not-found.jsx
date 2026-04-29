import Link from 'next/link';
import React from 'react';

const notfound = () => {
    return (
        <div>
            <h1 className='text-3xl text-blue-300'>Not Found </h1>

           <Link href={"/"}>
            <button className='btn btn-primary'>Go to Home</button>
           </Link>

           
            
        </div>
    );
};

export default notfound;