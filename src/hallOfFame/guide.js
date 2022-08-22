import React, { useState } from 'react';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import "./guide.scss"

function Guide() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Help</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Click or tap on a picture to see more!
        </Modal.Body>
        <Modal.Footer className='d-flex justify-content-center'>
          <Button variant="outline-light" onClick={handleClose} className="w-100">OK</Button>
        </Modal.Footer>
      </Modal>
      {show ? null : <Button onClick={handleShow} id="help">?</Button>}
    </>
  );
}

export default Guide;