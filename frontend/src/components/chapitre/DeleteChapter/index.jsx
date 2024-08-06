import { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { UpdateComponent } from '../../../utils/contexts';

export default function DeleteChapter(props) {
  const [show, setShow] = useState(false);
  const { update, setUpdate } = useContext(UpdateComponent);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  async function deleteChap() {
    const url = `http://localhost:4200/api/jdr/deletechap/${props.chapId}`;
    const request = {
      method: 'DELETE',
    };

    await fetch(url, request);
    setShow(false);
    setUpdate(!update);
  }

  return (
    <>
      <Button variant="secondary" onClick={handleShow}>
        <FontAwesomeIcon icon={faTrash} />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>Supprimer définitivement ce chapitre ?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Annuler
          </Button>
          <Button variant="primary" onClick={deleteChap}>
            Supprimer
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
