import React from 'react';
import ReactPageScroller from 'react-page-scroller'; // consider CSS scroll-snap?
import { LinkContainer } from 'react-router-bootstrap';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
// import Pager from "react-bootstrap/Pagination";

import './banner.css';

import ScrollHint from '../shared/scrollHint'
import Footer from '../shared/footer';
import { Link } from 'react-router-dom';

class Banner extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentPage: null };
  }

  handlePageChange = number => {
    this.setState({ currentPage: number });
  };

  // getPagesNumbers = () => {
  //   const pageNumbers = [];

  //   for (let i = 1; i <= 5; i++) {
  //     pageNumbers.push(
  //       <Pager.Item key={i} eventKey={i - 1} onSelect={this.handlePageChange}>
  //         {i}
  //       </Pager.Item>,
  //     );
  //   }

  //   return [...pageNumbers];
  // };

  render() {
    // const pagesNumbers = this.getPagesNumbers();

    return (
      <>
        <ReactPageScroller
          pageOnChange={this.handlePageChange}
          containerWidth={window.innerWidth}
          containerHeight={window.innerHeight - 90}
          customPageNumber={this.state.currentPage}
          animationTimer={800}
        >
          <Container fluid className="banner d-flex justify-content-center align-items-center" id="banner-1">
            <Container fluid className="banner-container d-flex justify-content-top h-75">
              <h1 className="fw-light text-center">Welcome</h1>
              <p className='text-center'>Vote for your favourite players and discover legends</p>
              <ScrollHint currentPage={this.currentPage} />
            </Container>
          </Container>
          <Container fluid className="banner d-flex align-items-center" id="banner-2">
            <Container fluid className="banner-container">
              <h1 className="fw-light text-center">
                <Link to="/favouritePlayers" variant="white" tabIndex={0}>
                  <Button variant="outline-light fw-light">Vote</Button>
                </Link> for your favourite players
              </h1>
              <p className='text-center'>Pick from Neuer, Beckenbauer, Matthäus, Müller and co.</p>
            </Container>
          </Container>
          <Container fluid id="banner-3" className='banner'>
            <Row id="banner-3-overlay" className='gx-0'>
              <Col>
                <h1 className="fw-light text-center">Hall Of Fame</h1>
                <p className='text-center'>Discover the stories of legends</p>
              </Col>
            </Row>
            <Row className='gx-0'>
              <Col>
                <Container fluid id="banner-3-left" className="banner d-flex justify-content-center">
                  <Container fluid className="banner-container d-flex justify-content-end align-items-center h-75">
                    <Container className='hover-left w-75'>
                      <LinkContainer to="hallOfFame/players" tabIndex={0}>
                        <h1 className="fw-light text-center">Players</h1>
                      </LinkContainer>
                    </Container>
                  </Container>
                </Container>
              </Col>
              <Col>
                <Container fluid id="banner-3-right" className="banner">
                  <Container fluid className="banner-container d-flex justify-content-end align-items-center h-75">
                    <Container className='hover-right w-75'>
                      <LinkContainer to="hallOfFame/teams" tabIndex={0}>
                        <h1 className="fw-light text-center">Teams</h1>
                      </LinkContainer>
                    </Container>
                  </Container>
                </Container>
              </Col>
            </Row>
          </Container>
          <Container fluid id="banner-4" className='banner d-flex align-items-center'>
            <Container className='d-flex align-items-center'>
              <Container className='banner-container d-flex justify-content-center h-50'>
                <h1 className="fw-light text-center">Find out more <Link to="/aboutUs" variant="white" tabIndex={0}>
                    <Button variant="outline-light fw-light">about me</Button>
                  </Link>
                </h1>
                <p className='text-center'>Our goals and background information</p>
              </Container>
            </Container>
            <Container fluid>
              <Footer />
            </Container>
          </Container>
        </ReactPageScroller>
      </>
    );
  }
}

export default Banner;