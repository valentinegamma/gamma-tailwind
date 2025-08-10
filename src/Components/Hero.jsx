import React from 'react'
import gamma from '../assets/gamma3.png'
import Achievements from './Achievements'
import achievementsData from './AchievementsData'


function Hero() {

const achievements = achievementsData.map((achievement, index) => (
      <Achievements
        key={index}
        img={achievement.img}
        count={achievement.count}
        title={achievement.title}
      />
));

  return (
    <>
      <section className='flex items-center gap-x-4'>
      <img
       src={gamma} 
       alt="Valentine Gamma" 
       className='w-full max-w-[30rem]'
       
       />
      <div className='h-[30rem] flex flex-col justify-evenly'>
        <h2 className='text-4xl font-light'>
          Hi, i'm
          <span className='font-normal'> Valentine Gamma</span>
        </h2>
        <h1 className='text-[4rem] text-secondary'>
          <span className='text-gray-950'> 
            &#123;full-stack&#125;
          </span>	
          &nbsp;developer
          <br />
            UI/UX&nbsp;
          <span className='text-green-500'>web designer</span>
        </h1>
        <h3 className='text-[1.3rem] text-secondary'>
          Precision in every pixel crafted for impact. I design interactive and responsive web pages that meet user experience. Contact me now and get yourself an awesome portfolio or e-commerce website.
        </h3>
      </div>
      </section>

     <section className="flex justify-evenly">
      {achievements}
     </section>
    </>

  )
}

export default Hero