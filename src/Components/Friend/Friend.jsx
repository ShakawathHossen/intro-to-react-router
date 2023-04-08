import React from 'react';
import './Friend.css'
import { Link } from 'react-router-dom';

const Friend = (props) => {
    // console.log(props.friend);
    const{name,email,username,address,phone,id}=props.friend;
    return (
        <div className='friend'>
            <h2>{name}</h2>
            <h3>{username}</h3>
            <p>{email}</p>
            <p>{phone}</p>
            <p><Link to={`/friend/${id}`}>Show Details</Link> </p>
        </div>
    );
};

export default Friend;