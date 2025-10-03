import React from 'react';
import { Link } from 'react-router';
const Postdata = ({single}) => {
    console.log(single);

    return (
        <div >
            <h1>{single.title}</h1>
            <Link to={`/post`}>Click here</Link>
        </div>
    );
};

export default Postdata;