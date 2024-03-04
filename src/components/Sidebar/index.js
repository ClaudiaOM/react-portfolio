import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import LogoS from '../../assets/images/logo-c.png';
import LogoSubtitle from '../../assets/images/sub-logo-c.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt="Logo"/>
            <img className="sub-logo" src={LogoSubtitle} alt="slobodan" />
        </Link>
        <nav>
            <NavLink exact='true' activeclassname="active" className="home-link" to="/">
                <FontAwesomeIcon icon={faHome} />
            </NavLink>
            
            <NavLink exact='true' activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} />
            </NavLink>
            
            <NavLink exact='true' activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} />
            </NavLink>
        </nav>

        <ul>
            <li>
                <a target='_blank' rel='noreferrer' 
                href='https://linkedin.com/in/claudia-olavarrieta-mart%C3%ADnez-33b8541aa'>
                    <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                </a>
            </li>
            <li>
                <a target='_blank' rel='noreferrer' 
                href='https://github.com/ClaudiaOM'>
                    <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar;