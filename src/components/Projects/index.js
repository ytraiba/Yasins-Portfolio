import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import PodcastTemplate from './podcastTemplate'
import BusinessTemplate from './businessTemplate'
import Recipes from './recipes'
import InfraAutomation from './infraAutomation'
import InfraMap from './infraMap'
import BikeSale from './bikeSale'
import GodChat from './godChat'
import './index.scss'
import Aos from "aos";
import "aos/dist/aos.css";



const Projects = () => {

  useEffect(() => {
    Aos.init({duration: 2000});
  }, []);

  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = [ 'M', 'y', ' ', 'P', 'r', 'o', 'j', 'e', 'c', 't', 's:']
  const jobArray = [ 'W', 'e', 'b', 's', 'i', 't', 'e', 's,', ' ', 'S', 'c', 'r', 'i', 'p', 't','s', ',', ' ', 'a', 'n', 'd', ' ', 'M', 'o', 'r', 'e.']

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])
 
  
  return (
    <>
      <div className="container project-page">
      <div className="text-zone">
          <div className='project-header'>
          
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={13}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={28}
            />
          </div>
          <br />
          <div className='intro-text'>Scroll to view.</div>
      </div>
      <BikeSale />
      <InfraMap />
      <GodChat />
      <InfraAutomation />
      <Recipes />
      <PodcastTemplate /> 
      <BusinessTemplate/>

      </div>
      
      <Loader type="pacman" />
      
    </>
  )
}

export default Projects;
