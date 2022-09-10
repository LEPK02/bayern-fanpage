import React from 'react';
import {ReactComponent as ChevronDown} from '../images/chevron-compact-down.svg';

import Container from 'react-bootstrap/Container';

import './scrollHint.css';

class ScrollHint extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentPage: null };
  }
  render() {
    // const pagesNumbers = this.getPagesNumbers();

    return (
      <Container id='indicator' className={this.state.currentPage < 1 ? '' : 'vanish'}>
        <p className='text-center'>scroll/swipe</p>
        <ChevronDown />
      </Container>
    );
  }
}

export default ScrollHint;