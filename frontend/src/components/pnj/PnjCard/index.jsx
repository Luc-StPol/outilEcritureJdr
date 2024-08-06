import { useState, useContext } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import PnjFile from '../PnjFIle';
import DeletePopup from '../../commun/DeletePopup';
import PnjForm from '../PnjForm';
import { UpdateComponent } from '../../../utils/contexts';

export default function PnjCard(props) {
  const { update, setUpdate } = useContext(UpdateComponent);
  const pnj = props.pnj;
  const pnjDescription = pnj.description;
  const truncatedDescription = pnjDescription.length > 30 ? pnjDescription.slice(0, 30) + '...' : pnjDescription;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  async function deletePnj() {
    const url = `http://localhost:4200/api/pnj/deletepnj/${pnj._id}`;
    const request = {
      method: 'DELETE',
    };
    await fetch(url, request);
    setUpdate(!update);
  }

  async function modifyPnj(body) {
    const url = `http://localhost:4200/api/pnj/${pnj._id}`;
    const req = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    };
    await fetch(url, req);
    setUpdate(!update);
  }

  return (
    <>
      <Card style={{ width: '18rem', marginTop: '30px' }}>
        <DeletePopup title={pnj.nom} delData={deletePnj} />
        <Card.Body onClick={handleShow}>
          <Card.Title>{pnj.nom}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{pnj.race} </Card.Subtitle>
          <Card.Text>{truncatedDescription}</Card.Text>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{pnj.nom}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <PnjFile {...props} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary">
            <PnjForm title="modfier" fetchData={modifyPnj} isThisRequired={false} />
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
