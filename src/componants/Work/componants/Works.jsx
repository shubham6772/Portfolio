import React, { useEffect, useState } from 'react'
import { Projects, projectNav } from '../../../Skills'
import WorkItem from './WorkItem'

const Works = () => {

  const[item, setItem]  = useState({name: "all"});
  const[projects, setProject] = useState([]);
  const[active, setActive] = useState(0);

  useEffect(()=>{
     if(item.name === 'all'){
        setProject(Projects)
     }
     else{
      const newProjects = Projects.filter((project)=> {
        return project.category === item.name;
      })

      setProject(newProjects);
     }
  }, [item])


  const handleClick = (e) => {
      setItem({name: e.target.textContent})
  }


  return (
    <div>
    <div className="work__filters">
    {projectNav.map((item)=>{
          return (
            <span onClick={(e)=>{
              handleClick(e);
            }} className="work__item" key={item.id}>{item.name}</span>
          )
    })}

    </div>


  <div className="work__container container grid">
    {projects.map((item)=>{
        return(
         <WorkItem key={item.id} {...item} />
        )
    })}
  </div>
  </div>
  )
}

export default Works
