import React from 'react';
import { Badge } from 'reactstrap';
import Headshot from '../../assets/images/Headshot.png';


const About = (props) => {
    return (
        <div>
        <h1><Badge color='secondary'>About Me</Badge></h1>
        <img src={Headshot} alt="Headshot"/>
        <p> I am relatively new to web development. I started my career in technical writing after graduating with a Bachelor's Degree from Weber State University. I worked for a manufacturing company for about 8 years before starting my own business writing business plans for start-up and existing companies. I have since returned to manufacturing in a buyer role. I enjoy traveling, reading, and spending time with my husband, three children, two cats, and dog. 
    We live on an "urban farm" and enjoy getting eggs from our chickens and fresh honey from our bees! </p>
    </div>
  
    )};

    export default About;