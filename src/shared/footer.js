import { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { HashLink } from 'react-router-hash-link';

import './footer.scss';

function Footer() {
  const [isActive, setIsActive] = useState({active1: false, active2: false});

  return (
    <>
      <Container fluid className='text-center footer'>
        <Row>
          <Col>
            <HashLink to="/aboutUs#about">
              <Container fluid
                className={isActive["active1"] ? 'active' : ''}
                onClick={() => setIsActive({active1: true, active2: false})}
              >
                <p className='footer-text' tabIndex={0}>Contact</p>
              </Container>
            </HashLink>
          </Col>
          <Col>
            <HashLink to="/aboutUs#disclaimer">
              <Container fluid
                className={isActive["active2"] ? 'active' : ''}
                onClick={() => setIsActive({active1: false, active2: true})}
              >
                <p className='footer-text' tabIndex={0}>Disclaimer</p>
              </Container>    
            </HashLink>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Footer;