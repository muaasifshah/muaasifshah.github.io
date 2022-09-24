import './footer.css';
import {FaFacebookF} from 'react-icons/fa';
import {FiInstagram} from 'react-icons/fi';
import {IoLogoTwitter} from 'react-icons/io';

const Footer = () => {
  return (
    <footer>
        <a href="/" className="footer__logo">Mohammad Aasif</a>

        <ul className="permalinks">
          <li><a href="/#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        
        <div className="footer__socials">
          <a href="https://linkedin.com/in/muaasifshah" target="_blank" rel="noreferrer"><FaFacebookF/></a>
          <a href="https://github.com/muaasifshah" target="_blank" rel="noreferrer"><FiInstagram/></a>
          <a href="https://dribbble.com/" target="_blank" rel="noreferrer"><IoLogoTwitter/></a>
        </div>

        <div className="footer__copyright">
          <small>Made with ❤️ by Mohammad Aasif</small>
        </div>
    </footer>
  )
}

export default Footer