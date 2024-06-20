import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function AddTown(props) {
  const [title, setTitle] = useState();
  const [map, setMap] = useState();
  const [type, setType] = useState();
  const jdrId = sessionStorage.getItem('jdrId');

  const markerPos = {
    top: props.pos.top,
    left: props.pos.left,
  };

  function submit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append('jdrId', jdrId);
    formData.append('nom', title);
    formData.append('image', map);
    formData.append('type', type);
    formData.append('markerPositonTop', markerPos.top);
    formData.append('markerPositonLeft', markerPos.left);
    console.log(formData);
    const url = 'http://localhost:4200/api/villes/addville';
    const request = {
      method: 'POST',
      body: formData,
    };
    fetch(url, request)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <Form onSubmit={submit}>
        <Form.Group>
          <Form.Label>Nom</Form.Label>
          <Form.Control required type="text" onChange={(e) => setTitle(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Image de la carte</Form.Label>
          <Form.Control type="file" required onChange={(e) => setMap(e.target.files[0])} />
        </Form.Group>
        <Form.Select aria-label="Default select example" onChange={(e) => setType(e.target.value)}>
          <option>Type de lieu</option>
          <option value="Ville">Ville</option>
          <option value="Village">Vilage</option>
          <option value="Site">Site</option>
        </Form.Select>
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
