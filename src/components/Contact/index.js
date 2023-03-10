import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {faLinkedin} from '@fortawesome/free-brands-svg-icons'


const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
    }, [])
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_7grhv3n', 'template_ajwfmfq', form.current, 'ByCwUYeEx7PmWBod1')
        .then((result) => {
            console.log(result.text);
            alert('Message sent successfully!');
        }, (error) => {
            alert('Message failed to send!');
            console.log(error.text);
        });

        form.current.reset();
    };

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
            {/* <a href="https://www.linkedin.com/in/yasin-traiba-1a103822a//" className='linkedIn' target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"  />
            </a> */}
          </h1>
            
          <p>
            I am interested in freelance projects and part time work opportunities. Shoot me
            an email at yasintraiba@gmail.com fill out the contact form below. 
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Yasin Traiba,
          <br />
          Boston, Massachussetts
          <br />
          United States
          <br />
          <span>yasintraiba@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[42.3601, -71.0589]} zoom={12}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[42.3601, -71.0589]}>
              <Popup>Yasin Lives Here :)</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact