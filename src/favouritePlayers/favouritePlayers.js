import React, { useState } from 'react';

import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';

import './favouritePlayers.scss';

function FavouritePlayers() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <Container fluid id="favourite-players-carousel">
        <Container>
          <Carousel
            controls={true}
            activeIndex={index}
            onSelect={handleSelect}
            interval={null}
            indicators={false}
            wrap={false}
            nextIcon={<Button>Next</Button>}
            prevIcon={<Button>Prev</Button>}
          >
            <Carousel.Item>
              <Container className='form-container'>
                <h1 className="fw-light text-center w-100">Favourite Players</h1>
                <p className='text-center w-100'>Vote for your favourite player!</p>
              </Container>
            </Carousel.Item>
            <Carousel.Item>
              <Container className='form-container'>
                <h1 className="fw-light text-center w-100">Pick a category</h1>
                <Container fluid className="d-flex justify-content-evenly">
                  <Button src={require('../images/goalkeeper-gloves.png')} alt='Goalkeeper gloves (goalkeeper icon)' />
                  <Button src={require('../images/shield.png')} alt='Shield (defender icon)' />
                  <Button src={require('../images/football-boots.png')} alt='Football boot (midfielder icon)' />
                  <Button src={require('../images/football-fire.png')} alt='Football (attacker icon)' />
                </Container>
              </Container>
            </Carousel.Item>
          </Carousel>
        </Container>
      </Container>
    </>
  );
}

export default FavouritePlayers;