import React from 'react'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <div className="Navsection">
        <ul>
           <Link to="/FirstTab" target='_blank'>
           <li id="FirstTab">FirstTab</li>
           </Link>
           <Link to="/SecondTab" target='_blank'>
           <li id="SecondTab">SecondTab</li>
           </Link>
           <Link to="/ThirdTab" target='_blank'>
           <li id="ThirdTab">ThirdTab</li>
           </Link>
        </ul><br/><br/>
        {/*<Link to="/Professor" target='_blank'>Professor</Link>*/}
    </div>
    
  )
}

export default NavBar
