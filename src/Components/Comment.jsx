import React, { useState } from 'react';
import './Comment.css'
import { useRef } from 'react';


function Comment({showCommentBox,comments,setComments}) {
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
return {...comment,
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
  <div>

{showCommentBox && (
  <div className='comments-b'>
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
cols="50"/>
</form>

</div>
)}
</div>
);
 }
 
 export default Comment;
