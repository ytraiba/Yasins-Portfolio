import LogoS from './bike-sale-1.png';

const BusinessTemplate = () => {
  
  return (
    <div className="project-container" >
      <div className="project-description" data-aos="fade-right">
        <h1>Bike Marketplace </h1>
        <p>
        The goal of this project was to create a marketplace that allows users to rent out their bikes to eachother.
        Users can create an account with an email/password or through Google's user authentication. 
         <br/>
         <br/>
          I built this website using React JS and Firebase. I learned how to store users and listings in Firebase's Realtime Database, 
          implement Google's geocoding API with react-leaflet, and build a mobile ready website with a beautiful UI. 
        <br/>
        <br/>
          <a href='https://github.com/ytraiba/Bike-Sale'>Check out the code on Github</a> or click the image to visit the live site.
        </p>
      </div>
      <div className="project-image" data-aos="flip-left" data-aos-duration="2500" >
        <a href="https://bike-sale.vercel.app/"><img src={LogoS} className="logoOdd" alt="logo" /></a>
      </div>
    </div>
    
  )
}

export default BusinessTemplate
