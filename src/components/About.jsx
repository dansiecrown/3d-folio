import React from 'react'
import Tilt from 'react-tilt'

import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

import { SectionWrapper } from '../hoc'


const ServiceCard = ({ title, icon, index }) => {
  return (
    <Tilt
      className="xs:w-[250px] w-full "
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >

        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}

          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex  flex-col justify-evenly items-center'
        >

          <img src={icon} alt={title} className="w-16 h-16 object-contain " />
          <h3
            className='text-white text-[20px] font-bold text-center '
          >
            {title}
          </h3>

        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}
      >
        <p className={styles.sectionSubText}> Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview..</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[15px] leading-[28px] max-w-3xl "
      >
        I an a skilled software developer in experience in Typescript, Javascript and Python. I also have experience using frameworks like React, Node.js, Vue.js, Three.js, Django among others. I'm a quick learner and collaborate closely with clients to create efficient, scalable and user-friendly solutions that solve real-world problems. Let's work togerther to bring your ideas to life!

      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about"); 