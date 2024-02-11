import React from 'react'
import './Feedpage.css'
import Post from './Post';
import { useContext } from 'react'
import Datacontext from '../Context/Datacontext'

const Feedpage = () => {
    const{searchresult}=useContext(Datacontext);
 return (
<div className='container'>
   
{searchresult.map((p)=>(

<Post post={p}/>

))}

</div>
 )
}

export default Feedpage