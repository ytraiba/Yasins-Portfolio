import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import Resume from '../../assets/images/Resume.pdf'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = [ ' ', 'Y', 'a', 's', 'i', 'n', 'T', 'r', 'a', 'i', 'b', 'a']
  const jobArray = [
    '(',
    ' ',
    'y',
    'u',
    'h',
    ' ',
    '-',
    ' ',
    's',
    'e',
    'e',
    'n',
    ' ',
    ')'
  ]

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  const [style, setStyle] = useState("resume");
  
  const changeStyle = () => {
    if (style === "resume") {
        setStyle("resume2");
    } else {
        setStyle("resume");
    }
  };
 

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
          
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>Software Development / BS in Engineering </h2>
          <button onClick={changeStyle} className="flat-button">
            My Resume 
          </button>
        </div>
        
        <embed src={Resume} className={style}/>
        
        <Logo /> 
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home
