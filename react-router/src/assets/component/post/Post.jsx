import React, { use } from 'react';
// import { useLoaderData } from 'react-router';
// import { Link } from 'react-router'
import Postdata from '../postdata/Postdata'

const Post = ({data3}) => {
    // const post=useLoaderData();
    const d=use(data3)
    //  console.log(d);
    return ( 
        <div>
          {
            d.map(single=>{<Postdata single={single}></Postdata>
            })
          }
        </div>
    );
};

export default Post;