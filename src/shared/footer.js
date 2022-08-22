import { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './footer.scss';
import { LinkContainer } from 'react-router-bootstrap';

function Footer() {
  const [isActive, setIsActive] = useState({active1: false, active2: false, active3: false});

  return (
    <>
      <Container fluid className='text-center footer'>
        <Row>
          <Col>
            <Container fluid
              className={isActive["active1"] ? 'active' : ''}
              onClick={() => setIsActive({active1: true, active2: false, active3: false})}
            >
              <LinkContainer to='/hallOfFame'>
                <p className='footer-text' tabIndex={0}>Contact Us</p>
              </LinkContainer>
            </Container>
          </Col>
          <Col>
          <Container fluid
              className={isActive["active2"] ? 'active' : ''}
              onClick={() => setIsActive({active1: false, active2: true, active3: false})}
            >
              <LinkContainer to='/hallOfFame'>
                <p className='footer-text' tabIndex={0}>FAQs</p>
              </LinkContainer>
            </Container>
          </Col>
          <Col>
          <Container fluid
              className={isActive["active3"] ? 'active' : ''}
              onClick={() => setIsActive({active1: false, active2: false, active3: true})}
            >
              <LinkContainer to='/hallOfFame'>
                <p className='footer-text' tabIndex={0}>Disclaimer</p>
              </LinkContainer>
            </Container>    
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Footer;