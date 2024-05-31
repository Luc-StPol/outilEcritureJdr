import React from 'react';
import { useState } from 'react';

import { Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export default function JdrSelectionBox(props) {
  const jdr = props.jdr;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  async function deleteJdr() {
    const url = `http://localhost:4200/api/jdr/deletejdr/${jdr._id}`;
    const request = {
      method: 'DELETE',
    };

    await fetch(url, request);
    setShow(false);
    props.setUpdate(props.update + 1);
    console.log('delete jdr');
  }

  return (
    <div className="jdrSelectionBox" key={jdr._id}>
      <Link to={`/jdr/${jdr._id}`}>{jdr.jdrTitle}</Link>

      <FontAwesomeIcon icon={faTrash} onClick={handleShow} />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Êtes-vous sur de vouloir supprimer définitivement"{jdr.jdrTitle}" ?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={deleteJdr}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
