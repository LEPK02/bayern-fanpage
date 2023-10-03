import React from 'react';
import ReactPageScroller from 'react-page-scroller'; // consider CSS scroll-snap?

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ScrollHint from '../shared/scrollHint'
import {ReactComponent as IdentityIcon} from '../images/identity.svg';
// import {ReactComponent as EmailIcon} from '../images/email-icon.svg';
import {ReactComponent as DisclaimerIcon} from '../images/disclaimer-icon.svg';

import './aboutUs.scss'
import { Button, Modal } from 'react-bootstrap';

class AboutUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentPage: null, show: false };
  }

  handlePageChange = number => {
    this.setState({ currentPage: number });
  };

  handleClose = () => this.setState({ show: false });
  handleShow = () => this.setState({ show: true });

  render() {
    return (
      <>
        <ReactPageScroller
          pageOnChange={this.handlePageChange}
          containerWidth={window.innerWidth}
          containerHeight={window.innerHeight - 90}
          customPageNumber={this.state.currentPage}
          animationTimer={800}
          blockScrollUp={this.state.show}
          blockScrollDown={this.state.show}
        >
          <Container fluid className="about d-flex align-items-center">
            <Row className='gy-0 w-100'>
              <Col md={6} className='d-flex justify-content-center'>
                <IdentityIcon className='about-icon' />
              </Col>
              <Col md={6} className='fw-light'>
                <h1 className="text-center">About</h1>
                <h3>Personal Profile</h3>
                <p>I am a computer science & economics student (and avid Bayern fan :)).</p>
                <br />
                <h3>Other Projects</h3>
                <p className='m-0'>
                  View my other projects here or <a href='http://github.com/LEPK02' target='_blank' rel="noreferrer">via my Github page</a>:
                </p>
                <ul>
                  <li><a href='https://github.com/LEPK02/fanpagev4' target='_blank' rel="noreferrer">Dockerized Fanpage</a></li>
                  <li><a href='https://github.com/LEPK02/pandas-seaborn' target='_blank' rel="noreferrer">Data Visualisation and Processing using Python</a></li>
                  <li><a href='https://github.com/LEPK02/tensorflow' target='_blank' rel="noreferrer">Machine Learning using Tensorflow</a></li>
                  <li><a href='https://github.com/LEPK02/java-data-structures' target='_blank' rel="noreferrer">Data Structures GUI using Java Swing</a></li>
                </ul>
                <br />
                <h1 className="text-center">Contact Information</h1>
                <p className='m-0'>
                  <a href="mailto: lukeengpengkee@gmail.com">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope me-2" viewBox="0 0 16 16">
                      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                    </svg>
                    Email: lukeengpengkee@gmail.com
                  </a>
                </p>
                <p className='m-0'>
                  <a href='http://github.com/LEPK02' target='_blank' rel="noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github me-2" viewBox="0 0 16 16">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                    </svg>
                    Github
                  </a>
                </p>
                <p className='m-0'>
                  <a href='http://www.linkedin.com/in/lepk02' target='_blank' rel="noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin me-2" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                    </svg>
                    LinkedIn
                  </a>
                </p>
              </Col>
            </Row>
            <ScrollHint currentPage={this.currentPage} />
          </Container>
          {/* <Container fluid id="contact-us" className="about d-flex align-items-center">
            <Row className='gy-0 w-100'>
              <Col md={6} className='d-flex justify-content-center'>
                <EmailIcon className='about-icon' />
              </Col>
              <Col md={{ order: 'first', span: 6 }} className="d-flex-col justify-content-center align-items-center">
                
              </Col>
            </Row>
          </Container> */}
          <Container fluid id="disclaimer" className="about d-flex align-items-center">
            <Row className='gy-0 w-100'>
              <Col md={6} className='d-flex justify-content-center'>
                <DisclaimerIcon className='about-icon' />
              </Col>
              <Col md={6} className='fw-light d-flex flex-column justify-content-center mt-2'>
                <Button variant="outline-light" onClick={this.handleShow}>
                  View Disclaimer
                </Button>

                <Modal show={this.state.show} onHide={this.handleClose} fullscreen>
                  <Modal.Header closeButton>
                    <Modal.Title>Disclaimer</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <p>&emsp;I assume no responsibility for errors or omissions in the contents of this site.</p>
                    <p>&emsp;In no event shall I be liable for any damages arising out of or in connection with the use of this site or its contents. I reserve the right to make additions, deletions, or modifications to the contents on this site at any time without prior notice.</p>
                    <h3 className='fw-light'>External Links Disclaimer</h3>
                    <p>&emsp;This site contains link(s) to external website(s) that are not provided or maintained by or in any way affiliated with myself.</p>
                    <p>&emsp;Please note that I do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.</p>
                    <h3 className='fw-light'>Fair Use Disclaimer</h3>
                    <p>&emsp;I may use copyrighted material which has not always been specifically authorized by the copyright owner. If you wish to use copyrighted material from this site for your own purposes that go beyond fair use, you must obtain permission from the copyright owner(s).</p>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
              </Col>
            </Row>
          </Container>
        </ReactPageScroller>
      </>
    );
  }
}

export default AboutUs;