import LogoS from './dataNovae.png';

const BusinessTemplate = () => {
  
  return (
    <div className="project-container" >
      <div className="project-description" data-aos="fade-right">
        <h1>Landing Page Template </h1>
        <p>
         I initially created this website to act as a landing page for a client who wanted to start a business.
         Since then, I've simplified the website and made it available for anyone to use as a template for their own business.
         <br/>
         <br/>
          I built this website using React JS and Tailwind CSS. I developed the website to the specifications 
          that were requested, while trying to incorporate creative elements of my own. 
        <br/>
        <br/>
          <a href='https://github.com/ytraiba/TheAfricanBlock'>Check out the code on Github</a> or click the image to visit the live site.
        </p>
      </div>
      <div className="project-image" data-aos="flip-left" data-aos-duration="2500" >
        <a href="https://david-app-eta.vercel.app/"><img src={LogoS} className="logoOdd" alt="logo" /></a>
      </div>
    </div>
    
  )
}

export default BusinessTemplate
