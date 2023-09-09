import LogoS from './godChat.png';

const GodChat = () => {
  
  return (
    <div className="project-container" >
      <div className="project-description" data-aos="fade-right">
        <h1>Chat With A Spiritual Leader</h1>
        <p>
          This is a chatbot where you can ask any spiritual or religious questions. 
          The chatbot provides a conversational response as well as the source of its information
          from either the Bible or the Quran.
         <br/>
         <br/>
          I accomplished this by embedding both the Bible and the Quran into a vector database to be used as context. 
          I engineered a custom prompt and then fed both the prompt and the context to OpenAI's ChatGPT to generate the responses.
          This website uses Next.js, LangChain (Typescript), OpenAI's ChatGPT, and Tailwind CSS.  
        <br/>
          <a href='https://github.com/ytraiba/god-chat'>Check out the code on Github</a> or click the image to visit the live site.
        </p>
      </div>
      <div className="project-image" data-aos="flip-left" data-aos-duration="2500" >
        <a href="https://god-chat.herokuapp.com/"><img src={LogoS} className="logoOdd" alt="logo" /></a>
      </div>
    </div>
    
  )
}

export default GodChat
