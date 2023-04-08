import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from '../Post/Post';
import './Posts.css'

const Posts = () => {
    const Posts= useLoaderData();
    return (
        <div>
            <h3>All Post Shown Here: {Posts.length}</h3>
            <div className='posts'>
                {
                    Posts.map(post =><Post
                    key={post.id}
                    post={post}
                    ></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;