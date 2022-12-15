import LogoS from './infraMap.png';

const InfraMap = () => {
  
  return (
    <div className="project-container" >

      <div className="project-description" data-aos="fade-right">
        <h1>Interactive Map</h1>
        <p>
          This interactive map, created for Infrasense, displays the company's data on hundreds of past projects. The final product is a 
          chloropleth map with popups that contain information about the projects in each state. Within each popup are links to learn
          more about Infrasene's project-types as well as specific work in that state. The map is live on Infrasense.com. 
          <br/>
          <br/>
          I created this interactive map using React JS, Leaflet, Tailwind CSS, and a GeoJSON object 
          to outline the state borders. I used OpenPyxl (python/excel library) to pre-process the hundreds of rows of project data 
          that I was given into a parsable JSON object. <a href='https://github.com/ytraiba/Infrasense-Web-Map'>
          Check out the code on Github</a> or click the image to visit the live site. 
        </p>
      </div>
      <div className="project-image" data-aos="flip-left" data-aos-duration="2500" >
        <a href="https://infrasense-web-map.vercel.app/"><img src={LogoS} className="logoOdd" alt="logo" /></a>
      </div>
      
    </div>
    
  )
}

export default InfraMap
