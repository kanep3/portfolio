import React from 'react'
import './about.css'
import ME from '../../assets/red.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>learn more</h5>
      <h2>about me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="Me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>education</h5>
              <small>brunel university london</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>cybersecurity</h5>
              <small>national guard training</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>certification</h5>
              <small>taking google courses</small>
            </article>
          </div>

          <p>
            i've worked on multiple projects using all kinds of different technologies. currently i'm working on my data analysis and visualization skills, participating in 3d app development and cybersecurity training.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About