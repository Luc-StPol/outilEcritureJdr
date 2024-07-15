import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function AddPlace(props) {
  const [name, setName] = useState();
  const [type, setType] = useState();
  const [description, setDescription] = useState();

  const markerPos = {
    top: props.pos.top,
    left: props.pos.left,
  };

  async function submit(e) {
    e.preventDefault();

    const body = {
      name: name,
      type: type,
      markerPos: markerPos,
      description: description,
    };
    console.log(body);
    const url = `http://localhost:4200/api/villes/addplace/${props.locationId}`;
    const request = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    };
    const response = await fetch(url, request);
    console.log(response.json());
  }

  return (
    <>
      <Form onSubmit={submit}>
        <Form.Group>
          <Form.Label>Nom</Form.Label>
          <Form.Control required type="text" onChange={(e) => setName(e.target.value)} />
        </Form.Group>
        <Form.Select aria-label="Default select example" onChange={(e) => setType(e.target.value)}>
          <option>Type de lieu</option>
          <option value="habitation">Habitation</option>
          <option value="commerce">Commerce</option>
          <option value="auberge">Auberge</option>
          <option value="place">Lieu publique</option>
        </Form.Select>
        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" onChange={(e) => setDescription(e.target.value)} />
        </Form.Group>
        <Form.Group>
          <Button variant="secondary" onClick={() => props.setShowImage(!props.showImage)}>
            Poser le marker
          </Button>
        </Form.Group>
        <Button type="submit">Sauvegarder</Button>
      </Form>
    </>
  );
}
