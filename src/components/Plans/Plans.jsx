import React from 'react'
import './Plans.css'
import { plansData } from '../../data/plansData'
import whiteTick from '../../assets/whiteTick.png'

export default function Plans() {
  return (
    <div className='plans-container' id='plans'>
        <div className='blur plans-blur-1'></div>
        <div className='blur plans-blur-2'></div>
        <div className='programs-header' style={{gap: "2rem"}}>
          <span className='strock-text'>READY TO START</span>
          <span>YOUR JOURNEY</span>
          <span className='strock-text'>NOW WITHUS</span>
        </div>

        <div className='plans'>
          {plansData.map( (plan, index) => (
           <div className='plan' key={index}>
             {plan.icon}
             <span>{plan.name}</span>
             <span>$ {plan.price}</span>
             <div className='features'>
              {plan.features.map( (feature, index) => (
                <div className='feature' key={index}>
                  <img src={whiteTick}/>
                  <span>{feature}</span>
                </div>
              ))}
             </div>
              
              <div>
                <span>see more benefits </span>
              </div>

              <button className='btn'>join now</button>

           </div>
          ))}
        </div>
      
    </div>
  )
}
