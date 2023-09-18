import { useState, useEffect } from 'react'

import { useParams, Link } from 'react-router-dom';

const Most = ({ posts, auth })=> {
    let cur;
    posts.map((post)=>{
        if(post.price>=cur.price){
            cur=post
        }
    })
  const { id } = useParams();
  const post = cur;
  if(!post){
    return null;
  }
  return (
    <div>
      <h1>{ post.title } - {post.price}</h1>
      <p>{post.description}</p>
      { auth._id === post.author._id ? <button>x</button>: ''}
    </div>
  );
};

export default Most;