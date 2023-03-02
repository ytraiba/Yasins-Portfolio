import LogoS from './infrasenseAutomation.png';

const InfraAutomation = () => {
  
  return (
    <div className="project-container" >

      <div className="project-description" data-aos="fade-right">
        <h1>Web Automation</h1>
        <p>
          I wrote these python scripts for Infrasense to automate the process of downloading PDFs from government
          websites. These PDFs contain information about upcoming projects that the company is interested in. Using 
          Playwright and PySimpleGui, I was able to create an application that downloads the necessary PDFs, searches
          for keywords in the PDFs, and sends an update on which documents are relevant to the user's email. 
          <br/>
          <br/>
          All of the scripts are executed in an asynchronous manner, allowing the user to download PDFs from multuple websites
          at once. The graphical user interface allows non-technical users to execute the scripts without having to use the command line.
          I was able to save Infrasense a lot of time by automating this process. <a href='https://github.com/ytraiba/SolicitationAutomation'>
          Code on Github</a>
        </p>
      </div>
      <div className="project-image" data-aos="flip-left" data-aos-duration="2500" >
        <a href="https://github.com/ytraiba/SolicitationAutomation"><img src={LogoS} className="logoOdd" alt="logo" /></a>
      </div>
      
    </div>
    
  )
}

export default InfraAutomation
