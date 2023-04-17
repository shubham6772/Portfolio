import React from 'react'
import './Home.css'
import {Social, Data, ScrollDown}from './componants'

const Home = () => {
  return (
    <main>
        <section className="home section" id='home'>
           <div className='home__container container grid'>
            <div className="home__content grid">
               <Social />

               <div className="home__img"></div>

                <Data />
               
            </div>

            <ScrollDown  />
           </div>
        </section>
    </main>
  ) 
}

export default Home
