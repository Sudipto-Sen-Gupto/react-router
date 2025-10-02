import React from 'react';
import Header from '../header/Header';
import { Outlet } from 'react-router';
import Sidebar from '../sidebar/Sidebar';
import Footer from '../footer/Footer';
const Root = () => {
    return (
        <div>
            <Header></Header>
            <div style={{display:"flex",gap:"40px"}}>
                 <Sidebar></Sidebar>

                   <Outlet></Outlet>
            </div>
            
            
           
            <Footer></Footer>
        </div>
        
    );
};

export default Root;