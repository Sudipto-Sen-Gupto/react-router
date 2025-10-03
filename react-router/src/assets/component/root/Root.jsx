import React from 'react';
import Header from '../header/Header';
import { Outlet, useNavigation } from 'react-router';
import Sidebar from '../sidebar/Sidebar';
import Footer from '../footer/Footer';
const Root = () => {
    const navigating=useNavigation();
    const isnavigate=Boolean(navigating.location);

    return (
        <div>
            <Header></Header>
            <div style={{display:"flex",gap:"40px"}}>
                 <Sidebar></Sidebar>
                   {
                    isnavigate && <span>loading</span>
                   }
                   <Outlet></Outlet>
            </div>
            
            
           
            <Footer></Footer>
        </div>
        
    );
};

export default Root;