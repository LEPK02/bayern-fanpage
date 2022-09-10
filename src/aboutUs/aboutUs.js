import React from 'react';
import ReactPageScroller from 'react-page-scroller'; // consider CSS scroll-snap?

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ScrollHint from '../shared/scrollHint'
import {ReactComponent as IdentityIcon} from '../images/identity.svg';
import {ReactComponent as EmailIcon} from '../images/email-icon.svg';
import {ReactComponent as DisclaimerIcon} from '../images/disclaimer-icon.svg';

import './aboutUs.scss'

class AboutUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentPage: null };
  }

  handlePageChange = number => {
    this.setState({ currentPage: number });
  };

  render() {
    return (
      <>
        <ReactPageScroller
          pageOnChange={this.handlePageChange}
          containerWidth={window.innerWidth}
          containerHeight={window.innerHeight - 90}
          customPageNumber={this.state.currentPage}
          animationTimer={800}
        >
          <Container fluid className="about d-flex align-items-center">
            <Row className='gy-0 w-100'>
              <Col md={6} className='d-flex justify-content-center'>
                <IdentityIcon className='about-icon' />
              </Col>
              <Col md={6} className='fw-light'>
                <h1 className="text-center">About Us</h1>
                  <h2 className='fw-light'>Personal Profile</h2>
                    <p>&emsp;I am a beginner, self-taught computer science student and avid Bayern fan. This page is created for learning purposes only.</p>
                <br />
                  <h2 className='fw-light'>Why support Bayern?</h2>
                    <p>&emsp;My first introduction to football was the 2014 World Cup, while the first position I played as was as goalkeeper. As the best goalkeeper (and possibly player) at the competition, Manuel Neuer was the player to emulate. Combined with the fact that most of the Germany national team played for Bayern, supporting the club was a natural decision. I have had no regrets since :)</p>
                <br />
                <h2 className='fw-light'>Other Projects</h2>
                    <p>&emsp;Check out my other projects at <a href='http://github.com/LEPK02' className="link-light">my Github page</a>.</p>
              </Col>
            </Row>
            <ScrollHint currentPage={this.currentPage} />
          </Container>
          <Container fluid id="contact-us" className="about d-flex align-items-center">
            <Row className='gy-0 w-100'>
              <Col md={6} className='d-flex justify-content-center'>
                <EmailIcon className='about-icon' />
              </Col>
              <Col md={{ order: 'first', span: 6 }} className="d-flex-col justify-content-center align-items-center">
                <h1 className="text-center">Contact Us</h1>
                <address>
                  <ul>
                    <li><a href="lukeengpengkee@gmail.com" className="link-light fw-light">Email</a></li>
                    <li><a href='http://github.com/LEPK02' className="link-light fw-light">Github</a></li>
                  </ul>
                </address>
              </Col>
            </Row>
          </Container>
          <Container fluid id="disclaimer" className="about d-flex align-items-center">
            <Row className='gy-0 w-100'>
              <Col md={6} className='d-flex justify-content-center'>
                <DisclaimerIcon className='about-icon' />
              </Col>
              <Col md={6} className='fw-light'>
                <h1 className="text-center">Disclaimer</h1>
                    <p>&emsp;I assume no responsibility for errors or omissions in the contents of this site.</p>
                    <p>&emsp;In no event shall I be liable for any damages arising out of or in connection with the use of this site or its contents. I reserve the right to make additions, deletions, or modifications to the contents on this site at any time without prior notice.</p>
                  <h2 className='fw-light'>External Links Disclaimer</h2>
                    <p>&emsp;This site contains link(s) to external website(s) that are not provided or maintained by or in any way affiliated with myself.</p>
                    <p>&emsp;Please note that I do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.</p>
                  <h2 className='fw-light'>Fair Use Disclaimer</h2>
                    <p>&emsp;I may use copyrighted material which has not always been specifically authorized by the copyright owner. If you wish to use copyrighted material from this site for your own purposes that go beyond fair use, you must obtain permission from the copyright owner(s).</p>
              </Col>
            </Row>
          </Container>
        </ReactPageScroller>
      </>
    );
  }
}

export default AboutUs;