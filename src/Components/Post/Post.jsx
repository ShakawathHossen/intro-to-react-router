import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Post.css'

const Post = (props) => {
    const{id,title,body}=props.post;
    const navigate=useNavigate()
    const handleNavigation=()=>{
        navigate(`/post/${id}`);
    }
    return (
        <div className='post'>
            <h4>ID : {id}</h4>
            <h3>{title}</h3>
            {/* <Link to={`/post/${id}`}><button>Show Details</button></Link> */}
            <button onClick={handleNavigation}>Show Details</button>
        </div>
    );
};

export default Post;