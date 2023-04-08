import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Header from '../Header/Header';

const Home = () => {
    const nevigation=useNavigation()
    return (
        <div>
            <Header></Header>
            <h1>This is the Home</h1>
            <div>{nevigation.state==='loading'&&'Loading...'}</div>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;