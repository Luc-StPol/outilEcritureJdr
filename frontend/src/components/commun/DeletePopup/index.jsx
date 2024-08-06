import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export default function DeletePopup(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function confirmDelData() {
    props.delData();
    handleClose();
  }

  return (
    <>
      <FontAwesomeIcon icon={faTrash} onClick={handleShow} />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>Êtes-vous sur de vouloir supprimer définitivement "{props.title}"</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Annuler
          </Button>
          <Button variant="primary" onClick={confirmDelData}>
            Supprimer
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
