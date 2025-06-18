import React from 'react';
import { easeInOut, motion } from "motion/react"
import icon1 from '../../assets/New folder/man-woman-giving-high-five-working-cafe.jpg'
import icon2 from '../../assets/New folder/front-view-musicians-working-with-laptop.jpg'
const Banner = () => {
    return (
      <div className="hero bg-base-200 min-h-96">
  <div className="hero-content flex-col lg:flex-row-reverse">
   <div className='flex-1/1 '> 
    <motion.img
      src={icon1}
      animate={{y: [50,100,50]}}
      transition={{duration :10 , repeat:Infinity}}
      className="max-w-sm rounded-t-[40px] rounded-b-[40px ] rounded-br-[40px ] border-b-4 border-e-blue-400 w-64 shadow-2xl"
    />
    <motion.img
      src={icon2}
      animate={{x: [0,50,0]}}
      transition={{duration :5 , repeat:Infinity}}
      className="max-w-sm rounded-t-[40px] rounded-b-[40px ] rounded-br-[40px ] border-b-4 border-e-blue-400 w-64 shadow-2xl"
    />
    </div>
    <div>
      
      <motion.h1  animate={{x: 50}}  transition={{duration:2 ,delay:1, ease:easeInOut , repeat:Infinity}}
      className="text-5xl font-bold"> <motion.span animate={{color:['#ecff33', '#33ffd5 ','#e833ff']}} transition={{duration: 1.5, repeat:Infinity }}> Latest</motion.span> jobs for  News!</motion.h1>
      
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>  
</div>
    );
};

export default Banner;