import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
const Feature = () => {
    const data=useLoaderData();
    console.log(data);
    const navigate=useNavigate();
    const [showinfo,setShowinfo]=useState(false)
    return (
        <div style={{backgroundColor:"black",color:"white",padding:"10px" }}>
            <h1></h1>
            <h2>Name: {data.name}</h2>
            <h2>Phone: {data.phone}</h2>
            <h2>Website:{data.website}</h2>
            <button onClick={()=>navigate(-1)}>Go Back</button>
            <button onClick={()=>setShowinfo(!showinfo)}>{showinfo?'hide':'show'}</button>
        </div>
    );
};

export default Feature;