import React from 'react'
import { styles } from '../styles'
import { motion } from 'framer-motion'
import { ComputersCanvas } from './canvas'

const Hero = () => {
  return (
    <section className="relative w-fulll h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="w-5 h-5 rounded-full bg-[#915eff]"/>
        <div className ="w-1 sm:h-80 h-40 violet-gradient"/>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm<span className="text=[#915eff]"> Ching Rou</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>A final year Information Systems student from SMU and an aspiring software engineer.</p><br/>
          <p className="hidden sm:block">
            I enjoy building scalable solutions that solve financial business problems. Some of the more interesting projects I have worked on in school include implementing WhatsApp banking for OCBC
            as part of my final year project, building a portfolio analyser for sponsor Goldman Sachs, and using microsrvice architecture to streamline payments in supermarkets (VMWare Award).<br/><br/>
            During most of these projects, my role was backend heavy and I am familiar with programming languages Python, TypeScript and Java, frameworks React, Flask and Spring Boot, as well as SQL and NoSQL cloud databases.<br/><br/>
            Another area I am interested in is Technology for Public Good. I am currently an intern in GovTech's National Digital Identity SGFinDex team, working mainly with TypeScript, Nodejs and AWS.<br/><br/>
            In my free time, I like going to the golf range, bringing my dog out for walks, 🀄️, watching shows, or spending time with family and friends. Feel free to connect with me on linkedin or drop me an email at crlam.2020@smu.edu.sg!
          </p>
        </div>
      </div>
      <ComputersCanvas/>
    </section>
  )
}

export default Hero