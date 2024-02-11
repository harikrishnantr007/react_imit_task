import React from 'react'

import './Newpost.css'
import './Uploadimage.css'
import { useContext } from 'react'
import Datacontext from '../Context/Datacontext'
const Newpost = () => {
    const{handlesubmit,postTiltle,setPostTitle,postImage,setPostImage}=useContext(Datacontext);

 return (
 <div className='container'>
 <div className="upload-box">
 <form  className='newpost-form' onSubmit={handlesubmit}>
 <input 
type="text"  
className='caption-input' 
 placeholder='Caption' 
required
value={postTiltle}
 onChange={(e)=>setPostTitle(e.target.value)}/>,

 <input 
 type="file" 
 className='uploadfile' 
 required
onChange={(e)=>{
const file=e.target.files[0];
setPostImage(URL.createObjectURL(file));
 }} />

 <button type='submit' className='upload-btn'>Upload</button>
</form>
 </div>
</div>
  )
}

export default Newpost