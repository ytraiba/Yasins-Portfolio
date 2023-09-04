import LogoS from './africanBlock.png';
import React from 'react';

const PodcastTemplate = () => {
  
  return (
    <div className="project-container" >

      <div className="project-description" data-aos="fade-right">
        <h1>Podcast Template</h1>
        <p>
          "The Big Block" is a website I initially created for a client wanting to start their own 
          podcast based on the development of finTech and blockchain based applications in Africa's developing nations. 
          I've simplified the website and made it available for anyone to use as a template for their own podcast.
          <br/>
          <br/>
          I built this website using React JS and Tailwind CSS. I developed the website to requested specifications, 
          while trying to incorporate creative elements of my own. This website is mobile friendly. 
          <br/><br/>
          <a href='https://github.com/ytraiba/Podcast-Template'>Check out the code on Github</a> or click the image to visit the live site.
        </p>
      </div>
      <div className="project-image" data-aos="flip-left" data-aos-duration="2500" >
        <a href="https://podcast-template-beta.vercel.app/"><img src={LogoS} className="logoOdd" alt="logo" /></a>
      </div>
      
    </div>
    
  )
}

export default PodcastTemplate
