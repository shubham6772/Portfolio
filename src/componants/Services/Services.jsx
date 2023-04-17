import React, {  useState } from "react";
import "./Services.css";
import { services, servicesback } from "../../Skills";

const Services = () => {

    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index)=>{
        setToggleState(index)
    }

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What i Offer</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">FrontEnd <br /> Designer/Developer</h3>
          </div>

          <span className="services__button"  onClick={()=> toggleTab(1)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div className={toggleState === 1 ? "services__modal active-modal": "services__modal"} >
            <div className="services__modal-content">
              <i className="uil uil-times services__modal-close"   onClick={()=>toggleTab(0)}></i>

              <h3 className="services__modal-title">Frontend Developer</h3>
              <p className="services__modal-description">
                with 1 year of Experience. Providing Quality work to clients and
                Companies
              </p>

              <ul className="services__modal-services grid">
                {services.map((service) => {
                  return (
                    <li key={service.id} className="services__modal-service">
                      <i className="uil uil-check-circle services__modal-icon"></i>
                      <p className="services__model-info">
                        {service.name}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div> 
            <i className="uil uil-brackets-curly services__icon"></i>
            <h3 className="services__title">BackEnd <br />Developer</h3>
          </div>

          <span className="services__button" onClick={()=> toggleTab(2)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div className={toggleState === 2 ? "services__modal active-modal": "services__modal"}>
            <div className="services__modal-content">
              <i className="uil uil-times services__modal-close" onClick={()=>toggleTab(0)}></i>

              <h3 className="services__modal-title">Backend Developer</h3>
              <p className="services__modal-description">
                with 1 year of Experience. Providing Quality work to clients and
                Companies
              </p>

              <ul className="services__modal-services grid">
                {servicesback.map((service) => {
                  return (
                    <li key={service.id} className="services__modal-service">
                      <i className="uil uil-check-circle services__modal-icon"></i>
                      <p className="services__model-info">
                        {service.name}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default Services;
