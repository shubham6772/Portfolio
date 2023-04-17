import React from 'react'
import {FrontendSkill} from '../../../Skills'

const Frontend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Frontend Skills</h3>

      <div className="skills__box">
        <div className="skills__group">

        {FrontendSkill.map((skill)=>{
          return(
             <div key={skill.id} className="skills__data">
            <i className='bx bx-badge-check'></i>

            <div>
              <h3 className='skills__name'>{skill.name}</h3>
              <span className="skills__level">{skill.level}</span>
            </div>
          </div>
          )
        })}


        </div>
      </div>
    </div>
  )
}

export default Frontend
