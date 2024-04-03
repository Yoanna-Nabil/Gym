import React from 'react'
import './Programs.css'
import { programsData } from './../../data/programsData';
import RightArrows from '../../assets/rightArrow.png'

export default function Programs() {
  return (
    <div className='programs' id='programs'>
      
      <div className='programs-header'>
       <span className='strock-text'>EXPLORE OUR</span>
       <span>PROGRAMS</span>
       <span className='strock-text'>TO SHAPE YOU</span>
      </div>


     <div className='program-category'>
      {programsData.map( (program, index) =>(
        <div className='category' key={index}>
          {program.image}
          <span>{program.heading}</span>
          <span>{program.details}</span>
          <div className='join-now'><span>Join Now</span><img src={RightArrows}/></div>
        </div>
      ))}
     </div>

    </div>
  )
}
