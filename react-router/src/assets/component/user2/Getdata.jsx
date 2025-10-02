import React from 'react';
import { Link } from 'react-router';
const Getdata = ({x}) => {
     const {id,name,user_name,email}=x;
      const style={
      border:"2px solid black",margin:"4px",padding:"10px", backgroundColor:"black",color:"white"
    }
    return (
        <div style={style}>
             <h2>{name}</h2>
            <h3>{user_name}</h3>
            <p>{email}</p>
            <Link to={`/user2/${id}`}>Go for Detail</Link>
        </div>
    );
};

export default Getdata;