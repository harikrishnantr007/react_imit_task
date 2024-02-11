import React from 'react'
import { useState } from 'react';
import Comment from './Comment';
import user1 from '../Assets/user1.jpg'
import user2 from '../Assets/user1.jpg'
import Popuppage from './Popuppage';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { IoIosAddCircle } from "react-icons/io";
const Post = ({post}) => {
    
    const[likecount,setLikecount]=useState(post.like);
    const[liked,setLiked]=useState(false);
    const [comments, setComments] = useState([]);
    const [showCommentBox, setShowCommentBox] = useState(false);
    const[model,setmodel]=useState(false)
    
const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
}
const togglemodel=()=>{
    setmodel(!model)
}
 const handlelikecount=()=>{
 
 if(liked)
 {
 setLikecount(like=>like-1)
 setLiked(false)
 }
else
{
 setLikecount(like=>like+1)
 setLiked(true)



}
 }
const toggleCommentBox = () => {
 setShowCommentBox(prevState => !prevState); // Toggle the state
};
return (
<div className="post-box" key={post}>
<div className="profilehead-main">
<div className="post-profile-head">
<div className="post-profile">
<div className="post-profile-pic"><img className='profile-image' src={post.userimage} alt="user" /></div>
 
 <div className="user-time-info">
 <p className='post-profile-name'>{post.user}</p>
 <p className='post-time'>{moment().startOf('hour').fromNow()}</p></div>
</div>
<div className="post-rep-btn"><button className='post-report'>Report</button></div>
</div>
</div>
<div className="upload-icon">< IoIosAddCircle className='add-icon'onClick={scrollToTop}/></div>


<div> 
 <p className='post-caption'>{post.title}</p>
 <div className="post-body">
 <div className="post">
<img className='post-img' onClick={togglemodel} src={post.image} alt="postimage" />
</div>
</div>
 </div>
<div className="post-footer">
 <div className="post-info">
 <p className='liked-by'> {likecount > 0 ? <div className='likeprofile'><div className="likeprofile-user"><img className='liked-user' src={user1} alt="" /></div>{likecount}<p className='wholikded'>Like by you</p></div> : ''}</p>
 <p className='no-comments'>{comments.length} comments</p>
 </div>
 <div className="post-btns">
 <button className='like-btn' onClick={()=>handlelikecount()}>Like</button>
<button className='comment-btn' onClick={toggleCommentBox}>Comment</button>
 </div>
 <div className="comments">
<Comment comments={comments} showCommentBox={showCommentBox} setComments={setComments} toggleCommentBox={toggleCommentBox}/>
</div>
</div>
{model&&(    
     <Popuppage togglemodel={togglemodel} comments={comments}  setComments={setComments} post={post}/>
)}
 </div>

 )}

export default Post