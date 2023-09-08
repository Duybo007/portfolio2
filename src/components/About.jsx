import React from 'react'
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
// import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.heroSubText}>//Introduction</p>
        <h2 className={styles.heroHeadText}>About me.</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-4 text-secondary text-[17px] max-w-4xl leading-[30px]'>
        I Design & Develop for the Web. My name is Duy, and I'm deeply passionate about crafting captivating creations on the web. I discovered my love for web development when I began coding and realized the immense power of HTML and CSS, even in simple tasks like creating a custom reblog button. This inspired me to delve deeper into the world of web development.
        <br/>
        Since then, I've been on an exhilarating journey, contributing my skills to a dynamic startup environment. Currently, at Rezrva, my focus is on developing inclusive products and immersive digital experiences. Every day, I seize the opportunity to expand my knowledge and evolve in this ever-changing field.
      </motion.p>
    </>
  )
}

export default About