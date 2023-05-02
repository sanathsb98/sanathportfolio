import React from 'react'
import './intro.css'
import { Button } from 'react-bootstrap'
import { gsap } from 'gsap';
import { useEffect } from 'react';

const Intro = () => {
  useEffect(()=>{
    const t1 = gsap.timeline({defaults:{duration:1}})
    t1.fromTo('.data',{opacity:0},{opacity:1})
    t1.fromTo('.titleName',{opacity:0},{opacity:1})
    t1.fromTo('.titleDes',{opacity:0},{opacity:1})
    t1.fromTo('.btnExplore',{opacity:0},{opacity:1})
  })

  return (
    <div className='intro'>
      <h1 className='data'></h1>
    <h1 id='text' className='titleName'>Hi I'm Sanath SB</h1>
    <h1 id='text' className='titleDes'>I Am A Frontend Developer | UI/UX Designer</h1>
    <h1 id='button' className='btnExplore'>
    <Button className='explorebtn rounded-pill btn-lg' variant='primary'>Explore</Button>
    </h1>
    </div>
  )
}

export default Intro