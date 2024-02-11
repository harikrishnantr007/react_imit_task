import React from 'react'
import './Uploadimage.css'
import { Link } from 'react-router-dom'
import girl from '../Assets/girl.svg'
import Reactangle from '../Assets/Rectangle.svg'
import Reactangle2 from '../Assets/Rectangle2.svg'
import Group from '../Assets/Group.svg'
import giphy from '../Assets/giphy.gif'
const Uploadimage = () => {
 return (
 <div className='container'>
 <div className="upload-box">
    <img className='rectangle-img' src={Reactangle} alt="" />
    <img className='rectangle2-img' src={Reactangle2} alt="" />
    <img className='giphy-img' src={giphy} alt="" />
<Link to='/post'> <button className='upload-btn'>Upload images</button><img  className='girl-imag' src={girl} alt=''/></Link>
<img className='Group-img' src={Group} alt="" />
</div>
 </div>
)
}

export default Uploadimage