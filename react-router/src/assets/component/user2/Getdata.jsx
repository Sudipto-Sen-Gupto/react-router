import React from 'react';
import { Link, useNavigate } from 'react-router';
const Getdata = ({x}) => {
     const {id,name,user_name,email}=x;
      const style={
      border:"2px solid black",margin:"4px",padding:"10px", backgroundColor:"black",color:"white"
    }
    const navigate=useNavigate();
    const handleClick=()=>{
        navigate('/user')
    }
    const handleClick2=()=>{
        navigate(`/user2/${id}`)
    }
    return (
        <div style={style}>
             <h2>{name}</h2>
            <h3>{user_name}</h3>
            <p>{email}</p>
            <Link to={`/user2/${id}`}>Go for Detail</Link>
            <button onClick={handleClick} >Previous</button>
            <button onClick={handleClick2}>After</button>
        </div>
    );
};

export default Getdata;