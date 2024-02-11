import React from 'react'
import { useState } from 'react';
import { useRef } from 'react';
import './Popuppage.css'
const Popuppage = ({post,comments,setComments,togglemodel}) => {
    const [newCommentText, setNewCommentText] = useState('');
     const [replyToCommentId, setReplyToCommentId] = useState(null);
const inputref=useRef();
     const handleCommentChange = (event) => {
      setNewCommentText(event.target.value);
     };
    
     const handleCommentSubmit = (event) => {
      event.preventDefault();
      const newComment = {
       id: comments.length + 1,
       text: newCommentText,
       replies: []
      };
      if (replyToCommentId !== null) {
       const updatedComments = comments.map(comment => {
        if (comment.id === replyToCommentId) {
         return {
          ...comment,
          replies: [...comment.replies, newComment]
         };
        }
        return comment;
       });
       setComments(updatedComments);
       setReplyToCommentId(null);
      } else {
       setComments([...comments, newComment]);
      }
      setNewCommentText('');
     };
    
     const handleReplyClick = (commentId) => {
        inputref.current.focus();
      setReplyToCommentId(commentId);
     };
    
  return (
    <div className='model'onClick={togglemodel}>
        <div className="overlay" onClick={togglemodel}> </div>
        <div className="popup-card">
            <div className="cards"> 
            <div className="image-card">
                <img className='card-img' src={post.image} alt="" />
            </div>
            <div className="infocard">
                <div className="popup-head">
                    <div className="popup-profile">
                        <div className="pop-profile-pic"></div>
                        <div className="opo-nameandtime">
                        <div className="pop-name">{post.user}</div>
                        <div className="pop-time">{post.datetime}</div>
                        </div>
                        
                    </div>
                    <div className="pop-re-button">
                    <button className='popup-report-btn'>Report</button>
                    </div>
                    
                </div>
                <hr className='pop-hrzline' />
                <div className="popup-btns">
                    <button className='popup-btn popup-btn-like '>Like </button>
                    <button className='popup-btn popup-btn-cmnt'>Comment</button>
                </div>
                <div className="popup-comment-box">
                <div className='popup-comment'>
         {comments.map(comment => (
          <div className='c-post' key={comment.id}>
        <p className="posted-comments">{comment.text}<button className='reply-btn' onClick={() => handleReplyClick(comment.id)}>Reply</button></p>
        {comment.replies.map(reply => (
            <div className='reply-post' key={reply.id}>
             <p className='reply-comments'>{reply.text}</p>
            </div>
           ))}
    </div>
          
         ))}
         <form onSubmit={handleCommentSubmit}>
          <input
           value={newCommentText}
           onChange={handleCommentChange}
           placeholder="Add a comment..."
            className='comment-input'
            ref={inputref}
           rows="4"
           cols="50"
          />
         </form>
         
        </div>
                </div>
                </div>
                
                </div>
           
        </div>
       
    </div>
  )
}

export default Popuppage
