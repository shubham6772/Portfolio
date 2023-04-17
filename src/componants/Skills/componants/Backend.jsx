import React from 'react'
import { BackendSkill } from '../../../Skills'

const Backend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Backend Skills</h3>

      <div className="skills__box">
        <div className="skills__group">

          {BackendSkill.map((skill)=>{
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

export default Backend
