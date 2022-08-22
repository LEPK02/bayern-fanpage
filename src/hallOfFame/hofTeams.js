import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import "./hallOfFame.scss"

import Captain from '../images/captain-armband-icon.png';
import Manager from '../images/manager-icon.png';
import BestPlayer from '../images/ballon-dor-icon.png';
import BundesligaTrophy from "../images/bundesliga-trophy-icon.png";
import UCLTrophy from "../images/ucl-trophy-icon.webp";
import DFBPokalTrophy from "../images/dfb-pokal-trophy-icon.png";
import DFBLigapokalTrophy from "../images/dfb-ligapokal-trophy-icon.png";
import UEFASupercup from "../images/uefa-supercup-trophy-icon.png";
import CWCTrophy from "../images/club-wc-trophy-icon.png";

function RoleIcon(props) {
  return <Image src={props.role} alt='Role icon' className='role-icon' />;
}

function TrophyIcon(props) {
  return <Image src={props.trophy} alt='Trophy icon' className='trophy-icon' />
}

class HOFTeams extends React.Component {
  render() {
    return (
      <>
        <Container fluid className="main-body">
          <Row className='gx-0'>
            <Col sm={3}>
              <Container fluid className='player-select-text'>
                <h1 className="fw-light text-center">1973-74</h1>
                <Container fluid className='d-flex justify-content-center'>
                  <TrophyIcon trophy={BundesligaTrophy} />
                  <TrophyIcon trophy={UCLTrophy} />
                  <TrophyIcon trophy={DFBPokalTrophy} />
                </Container>
                <ul className="fw-light text-center">
                  <li>
                    <RoleIcon role={Captain} />
                    Franz Beckenbauer
                  </li>
                  <li>
                    <RoleIcon role={Manager} />
                    Udo Lattek
                  </li>
                  <li>
                    <RoleIcon role={BestPlayer} />
                    Gerd Müller
                  </li>
                </ul>
              </Container>
              <Container fluid id="team-select-1" className='player-select'></Container>
            </Col>
            <Col sm={3}>
              <Container fluid className='player-select-text'>
                <h1 className="fw-light text-center">2000-01</h1>
                <Container fluid className='d-flex justify-content-center'>
                  <TrophyIcon trophy={UCLTrophy} />
                  <TrophyIcon trophy={DFBLigapokalTrophy} />
                </Container>
                <ul className="fw-light text-center">
                  <li>
                    <RoleIcon role={Captain} />
                    Stefan Effenberg
                  </li>
                  <li>
                    <RoleIcon role={Manager} />
                    Ottmar Hitzfeld
                  </li>
                  <li>
                    <RoleIcon role={BestPlayer} />
                    Oliver Kahn
                  </li>
                </ul>
              </Container>
              <Container fluid id="team-select-2" className='player-select'></Container>
            </Col>
            <Col sm={3}>
              <Container fluid className='player-select-text'>
                <h1 className="fw-light text-center">2012-13</h1>
                <Container fluid className='d-flex justify-content-center'>
                  <TrophyIcon trophy={BundesligaTrophy} />
                  <TrophyIcon trophy={UCLTrophy} />
                  <TrophyIcon trophy={DFBPokalTrophy} />
                  <TrophyIcon trophy={UEFASupercup} />
                  <TrophyIcon trophy={CWCTrophy} />
                </Container>
                <ul className="fw-light text-center">
                  <li>
                    <RoleIcon role={Captain} />
                    Philipp Lahm
                  </li>
                  <li>
                    <RoleIcon role={Manager} />
                    Jupp Heynckes
                  </li>
                  <li>
                    <RoleIcon role={BestPlayer} />
                    Bastian Schweinsteiger
                  </li>
                </ul>
              </Container>
              <Container fluid id="team-select-3" className='player-select'></Container>
            </Col>
            <Col sm={3}>
              <Container fluid className='player-select-text'>
                <h1 className="fw-light text-center">2019-20</h1>
                <Container fluid className='d-flex justify-content-center'>
                  <TrophyIcon trophy={BundesligaTrophy} />
                  <TrophyIcon trophy={UCLTrophy} />
                  <TrophyIcon trophy={DFBPokalTrophy} />
                </Container>
                <ul className="fw-light text-center">
                  <li>
                    <RoleIcon role={Captain} />
                    Manuel Neuer
                  </li>
                  <li>
                    <RoleIcon role={Manager} />
                    Hansi Flick
                  </li>
                  <li>
                    <RoleIcon role={BestPlayer} />
                    Robert Lewandowski 
                  </li>
                </ul>
              </Container>
              <Container fluid id="team-select-4" className='team-select'></Container>
            </Col>
          </Row>  
        </Container>     
      </>
    );
  }
}

export default HOFTeams;