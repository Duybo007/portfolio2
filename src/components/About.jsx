import React from 'react'
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => {

  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)} className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
        <div
          // options from Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-white font-bold text-center text-[20px]'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.heroSubText}>// Introduction</p>
        <h2 className={styles.heroHeadText}>About me.</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-4 text-secondary text-[17px] max-w-4xl leading-[30px]'>
        I Design & Develop for the Web. My name is Duy, and I'm deeply passionate about crafting captivating creations on the web. I discovered my love for web development when I began coding and realized the immense power of HTML and CSS, even in simple tasks like creating a custom reblog button. This inspired me to delve deeper into the world of web development.
        <br />
        Since then, I've been on an exhilarating journey, contributing my skills to a dynamic startup environment. Currently, at Rezrva, my focus is on developing inclusive products and immersive digital experiences. Every day, I seize the opportunity to expand my knowledge and evolve in this ever-changing field.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about"); // id about to scroll to