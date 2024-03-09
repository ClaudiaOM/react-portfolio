import { Link } from 'react-router-dom';
import './index.scss'
import { useEffect, useState } from 'react';
import AnimatedLetter from '../AnimatedLetters';
import Logo from './Logo';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['C','l','a','u','d','i','a']
    const hiArray = ['H','i']
    const imArray = ['I','\'','m']

    useEffect(() => {
        const timer = setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
        
        return () => clearTimeout(timer); // This is the cleanup function
    }, [])
    

    return(
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>                    
                    <AnimatedLetter letterClass={letterClass}
                                    strArray={hiArray}
                                    idx={1} />
                    <span style={{marginRight: 10}}> </span>
                    <AnimatedLetter letterClass={letterClass}
                                    strArray={imArray}
                                    idx={5} />
                    <br/>
                    <AnimatedLetter letterClass={letterClass}
                                    strArray={nameArray}
                                    idx={10} />
                </h1>
                <br/>
                <h2>
                    Full Stack Web Developer
                </h2>
                <Link to='/contact' className='flat-button'>CONTACT ME</Link>
            </div>
            <Logo></Logo>
        </div>
    )
}

export default Home;