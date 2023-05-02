import React from 'react';
import './navbar.css'
import { gsap } from 'gsap';
import { useEffect } from 'react';

const Navbar = () => {
useEffect(()=>{
    const t1 = gsap.timeline({defaults:{duration:1}})
    t1.fromTo('.navbar',{y:'-100%'},{y:'0%'})
})
  return (
    <div className='navbar'>
    <div>
    <ul className='navName'>
            <li>
                <a href='#'>Sanath SB</a>
            </li>
    </ul>
    </div>
    <div>
        <ul>
            <li>
                <a href='#'>Projects</a>
            </li>
            <li>
                <a href='#'>Contact</a>
            </li>
        </ul>
    </div>
    </div>
  )
}

export default Navbar