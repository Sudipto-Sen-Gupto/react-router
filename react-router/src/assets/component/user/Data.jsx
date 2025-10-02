import React from 'react';
import { useLoaderData } from 'react-router';

const Data = () => {
    const info=useLoaderData();
   
    
    console.log(info);
    return (
        <div>
         
        </div>
    );
};

export default Data;