import React, { useState } from "react";
import "./Qualifications.css";

const Qualification = () => {

  const[toggleState, setToggleState]= useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personal Journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : " qualification__button  button--flex"} 
            onClick={()=>toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : " qualification__button  button--flex"}  
           onClick={()=>toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div className={toggleState === 1 ? "qualification__content-active" : "qualification__content"}  >

          <div className="qualification__data">
          <div>
            <h3 className="qualification__title">Matriculation</h3>
            <span className="qualification__subtitle">
              NavChetna Sr.Sec. School
            </span> <br />
            <span>82%</span>
            <div className="qualification__calender">
              <i className="uil uil-calendar-alt"></i>
              2015-2016
            </div>
          </div>

          <div>
            <span className="qualification__rounder"></span>
            <span className="qualification__line"></span>
          </div>
        </div>


            <div className="qualification__data">
              <div className="custom1"></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Intermediate</h3>
                <span className="qualification__subtitle">
                  Kurukshetra Sr. Sec. School
                </span> <br />
                <span>77%</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2017-2018
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">B.Tech(Computer Science and Engineering)</h3>
                <span className="qualification__subtitle">
                  Aravali College of Engineering and Management
                </span> <br />
                <span>8.925 CGPA</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2019-Present
                </div>
              </div>

              <div className="custom2">
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

          </div>

          <div className={toggleState === 2 ? "qualification__content qualification__content-active": "qualification__content"}>

          <div className="qualification__data">
          <div>
            <h3 className="qualification__title">Still Working on it...</h3>
            <span className="qualification__subtitle">
              This field is going to fill soon
            </span> <br />
            <span>Thanks</span>
            <div className="qualification__calender">
              <i className="uil uil-calendar-alt"></i>
              00-00
            </div>
          </div>

          <div>
            <span className="qualification__rounder"></span>
            <span className="qualification__line"></span>
          </div>
        </div>
             
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
