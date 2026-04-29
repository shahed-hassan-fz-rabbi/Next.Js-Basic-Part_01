import React from 'react';
 export const metadata = {
  title: "Dynamic route | Basic Next js With Shahed",
  description: "We will learn about basic nextjs with Shahed vhi",
};

const DaynamicRouter = async({params}) => {
    const p= await params;
    console.log(p,"params");

   
    return (
        <div>
            <h1>This is dynamic router</h1>
            
        </div>
    );
};

export default DaynamicRouter;