import React, { use } from 'react';
import Getdata from './Getdata';
const User2 = ({data2}) => {
    const spray=use(data2)
    console.log(spray);
   
    return (
        <div>
           {
            spray.map(x=><Getdata key={x.id} x={x}></Getdata>)
           }

        </div>
    );
};

export default User2;