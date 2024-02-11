import React from 'react'
import './Header.css'
import CAP from '../Assets/CAPTCHARTSLOGO.svg'
import user1 from '../Assets/user1.jpg' 
import { useContext } from 'react'
import Datacontext from '../Context/Datacontext'
const Header = () => {
    const{search,setSearch}=useContext(Datacontext);
return (
<div className='container'>
<div className="head-container"><div className="logo"><img src={CAP} alt="" /></div>
<div className="header-items">
<input 
    type="text" 
className='search' 
 placeholder='serach'
value={search}
onChange={e=>setSearch(e.target.value)} />
 <div className="profile">
 <div className="profile-pic"><img className='userimg' src={user1} alt="" /></div>
 <div className="profile-name">Asha sunny</div>
 </div>
 <button className='logout-btn'>Logout</button> </div>
 </div>
 </div>
 )
}

export default Header