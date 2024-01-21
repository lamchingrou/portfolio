import React from 'react'
import { styles } from '../styles'
import { motion } from 'framer-motion'
import { ComputersCanvas } from './canvas'

const Hero = () => {
  return (
    <section className="relative w-fulll h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="w-5 h-5 rounded-full bg-[#915eff]"/>

      </div>
    </section>
  )
}

export default Hero