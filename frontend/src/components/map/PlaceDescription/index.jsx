import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useEffect, useState } from 'react';
import useFetch from '../../../utils/hooks/useFetch';
import { useParams } from 'react-router-dom';

export default function PlaceDescription(props) {
  const marker = props.marker;
  const [show, setShow] = useState(false);
  const [defaultValue, setdefaultValue] = useState(marker.type);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { locationId } = useParams();

  function savePlace(e) {
    const url = `http://localhost:4200/api/villes/updateville/${locationId}/updateplace/${marker._id}`;
    const request = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ [e.target.name]: e.target.value }),
    };
    fetch(url, request).catch((err) => console.log(err));
  }

  return (
    <>
      <Button variant="secondary" onClick={handleShow}>
        {marker.name}
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>
            <textarea name="name" onChange={(e) => savePlace(e)}>
              {marker.name}
            </textarea>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <select
              name="type"
              value={defaultValue}
              onChange={(e) => {
                savePlace(e);
                setdefaultValue(e.target.value);
              }}
            >
              <option value="habitation">Habitation</option>
              <option value="commerce">Commerce</option>
              <option value="auberge">Auberge</option>
              <option value="place">Lieu publique</option>
            </select>
          </div>
          <textarea name="description" onChange={(e) => savePlace(e)}>
            {marker.description}
          </textarea>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
