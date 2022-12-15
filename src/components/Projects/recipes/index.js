import LogoS from './yasinsRecipes.png';

const Recipes = () => {
  
  return (
    <div className="project-container" >

      <div className="project-description" data-aos="fade-right">
        <h1>Yasin's Recipes</h1>
        <p>
          A search engine that uses Edmame API to create ingredient lists based on any keyword.
          I am a big fan of cooking, and I wanted to create a website that would help me find recipes. 
        <br/>
        <br/>
          I built this website using React JS and Tailwind CSS. I learned how to implement 
          an API and use the queried data as needed. I also learned how to animate elements on a page using AOS. 
        <br/>
        <br/>  
          <a href='https://github.com/ytraiba/Recipes'>Check out the code on Github</a> or click the image to visit the live site.
        </p>
      </div>
      <div className="project-image" data-aos="flip-left" data-aos-duration="2500" >
       <a href="https://recipe-app-psi-orcin.vercel.app/"><img src={LogoS} className="logoOdd" alt="logo" /></a>
      </div>
      
    </div>
    
  )
}

export default Recipes
