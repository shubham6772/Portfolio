import React from 'react'
import Jobify from '../../../assets/Jobify.png'

const WorkItem = ({title, path, id, category, link, github}) => {
  return (
    <div  className='work__card' >
         <img src={path} alt={title}  className='work__img'/>
         <h3 className="work__title">{title}</h3>
         <div className='links'>
         <a href={link} className="work__button">
          Live <i className="bx bx-right-arrow-alt work__button-icon"></i>
         </a>

         <a href={github} className="work__button">
          Code <i className="bx bx-right-arrow-alt work__button-icon"></i>
         </a>
         </div>
    </div>
  )
}

export default WorkItem
