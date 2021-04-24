import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import Navigation from '../../components/Navigation';

const Hero = (props) => {
    return (
      <div>
         <Navigation />
        <Jumbotron fluid>
          <Container fluid>
            <h1 className="display-3">Janele Leatham</h1>
            <p className="lead">Software Engineer</p>
          </Container>
        </Jumbotron>
      </div>
    );
  };

  export default Hero;