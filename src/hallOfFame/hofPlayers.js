import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import Germany from "../images/germany-flag-icon.png";
import Poland from "../images/poland-flag-icon.png";

import "./hallOfFame.scss"

function FlagIcon(props) {
  return <Image src={props.country} alt='Country flag' className='rounded flag-icon' />;
}

class HOFPlayers extends React.Component {
  render() {
    return(
      <>
        <Container fluid className="main-body">
          <Row className='gx-0'>
            <Col sm={3}>
              <Container fluid className='player-select-text'>
                <h1 className="fw-light text-center">GK</h1>
                <Image src={require('../images/goalkeeper-gloves.png')} alt='Goalkeeper gloves (goalkeeper icon)' className='d-block mx-auto player-select-icon' />
                <ul className="fw-light text-center">
                  <li>
                    Manuel Neuer
                    <FlagIcon country={Germany} />
                  </li>
                  <li>
                    Oliver Kahn
                    <FlagIcon country={Germany} />
                  </li>
                  <li>
                    Sepp Maier
                    <FlagIcon country={Germany} />
                  </li>
                </ul>
              </Container>
              <Container fluid id="player-select-1" className='player-select'></Container>
            </Col>
            <Col sm={3}>
              <Container fluid className='player-select-text'>
                <h1 className="fw-light text-center">DEF</h1>
                <Image src={require('../images/shield.png')} alt='Shield (defender icon)' className='d-block mx-auto player-select-icon' />
                <ul className="fw-light text-center">
                  <li>
                    Franz Beckenbauer
                    <FlagIcon country={Germany} />
                  </li>
                  <li>
                    Philipp Lahm
                    <FlagIcon country={Germany} />
                  </li>
                  <li>
                    Paul Breitner
                    <FlagIcon country={Germany} />
                  </li>
                </ul>
              </Container>
              <Container fluid id="player-select-2" className='player-select'></Container>
            </Col>
            <Col sm={3}>
              <Container fluid className='player-select-text'>
                <h1 className="fw-light text-center">MID</h1>
                <Image src={require('../images/football-boots.png')} alt='Football boot (midfielder icon)' className='d-block mx-auto player-select-icon' />
                <ul className="fw-light text-center">
                  <li>
                    Thomas Müller
                    <FlagIcon country={Germany} />
                  </li>
                  <li>
                    Lothar Matthäus
                    <FlagIcon country={Germany} />
                  </li>
                  <li>
                    Bastian Schweinsteiger
                    <FlagIcon country={Germany} />
                  </li>
                </ul>
              </Container>
              <Container fluid id="player-select-3" className='player-select'></Container>
            </Col>
            <Col sm={3}>
              <Container fluid className='player-select-text'>
                <h1 className="fw-light text-center">FWD</h1>
                <Image src={require('../images/football-fire.png')} alt='Football (attacker icon)' className='d-block mx-auto player-select-icon' />
                <ul className="fw-light text-center">
                  <li>
                    Gerd Müller
                    <FlagIcon country={Germany} />
                  </li>
                  <li>
                    Robert Lewandowski
                    <FlagIcon country={Poland} />
                  </li>
                  <li>
                    Karl-Heinz Rummenigge
                    <FlagIcon country={Germany} />
                  </li>
                </ul>
              </Container>
              <Container fluid id="player-select-4" className='player-select'></Container>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default HOFPlayers;