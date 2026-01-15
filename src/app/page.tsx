'use client'
import React, { useState } from 'react'
import styles from './page.module.css'
import Header from './components/header/Header'
import About from './components/sections/about/About'
import Project from './components/sections/project/Project'
import Skill from './components/sections/skill/Skill'
import Hero from './components/sections/hero/Hero'


const page = () => {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Project />
        <Skill />
        <About />
      </main>
    </div>
  )
}

export default page