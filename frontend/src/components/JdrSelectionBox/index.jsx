import React from 'react';
import { useState } from 'react';

import { Modal, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export default function JdrSelectionBox(props) {
  const jdr = props.jdr;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function loginJdr() {
    sessionStorage.setItem('jdrId', jdr._id);
    window.location.reload(false);
  }

  async function deleteJdr() {
    const url = `http://localhost:4200/api/jdr/deletejdr/${jdr._id}`;
    const request = {
      method: 'DELETE',
    };

    await fetch(url, request);
    setShow(false);
    props.setUpdate(props.update + 1);
  }

  return (
    <div className="jdrSelectionBox" key={jdr._id}>
      <p onClick={loginJdr}>{jdr.jdrTitle}</p>

      <FontAwesomeIcon icon={faTrash} onClick={handleShow} />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>Êtes-vous sur de vouloir supprimer définitivement "{jdr.jdrTitle}" ?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Annuler
          </Button>
          <Button variant="primary" onClick={deleteJdr}>
            Supprimer
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
