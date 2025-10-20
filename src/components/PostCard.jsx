import React from 'react';

const PostCard=({post})=>{
    // Destructuring for cleaner access, especially for nested objects:
const{id,overview, // This is the movie description/summary
        title,list_type}=post;

// Assuming 'body' is still a string or the nested structure from before:
// const contentToDisplay=typeof body==='object'?body.content:body;

return(
    
<div className="card text-white bg-dark mb-3 ms-2" style={{maxWidth: '18rem'}}>
  <div className="card-header">{title}</div>
  <div className="card-body">
    <h5 className="card-title">{id}</h5>
    <p className="card-text">{overview}</p>
    <p className="card-text">{list_type}</p>
    <small className="text-muted">ID: {id}</small>
  </div>
</div>
    // <div
    // style={{ 
    //     border:'1px solid #ccc',
    //     width:'300px',
    // padding:'15px',
    // margin:'10px',
    // borderRadius:'8px',
    // boxShadow:'2px 2px 5px rgba(0,0,0,0.1)' 
    // }}>
    //     <h3>{name}</h3>

    //     <p>{username}</p>
    //     <small>Post ID: {id}</small>
    // </div>
)
}
export default PostCard;