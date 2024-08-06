import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

import '../../../styles/componentStyle.scss';

export default function PnjForm(props) {
  const isThisRequired = props.isThisRequired;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [nom, setNom] = useState();
  const [race, setRace] = useState();
  const [age, setAge] = useState();
  const [classe, setClasse] = useState();
  const [description, setDescription] = useState();
  const [metier, setMetier] = useState();
  const jdrId = sessionStorage.getItem('jdrId');

  function handleClick(e) {
    e.preventDefault();
    props.fetchData(body);
    handleClose();
  }

  const body = {
    jdrId: jdrId,
    nom: nom,
    race: race,
    age: age,
    classe: classe,
    description: description,
    metier: metier,
  };

  return (
    <>
      <div onClick={handleShow}>{props.title}</div>

      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>{props.header}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form id="formAddPnj" className="addPnj" onSubmit={handleClick}>
            <div>
              <label htmlFor="nom">Nom</label>
              <input
                type="text"
                id="nom"
                required={isThisRequired}
                onChange={(e) => setNom(e.target.value)}
                placeholder={props.nom}
              />
            </div>
            <div>
              <label htmlFor="race">Race</label>
              <input type="text" id="race" required={isThisRequired} onChange={(e) => setRace(e.target.value)} />
            </div>
            <div>
              <label htmlFor="age">Age</label>
              <input type="text" id="age" required={isThisRequired} onChange={(e) => setAge(e.target.value)} />
            </div>
            <div>
              <label htmlFor="classe">Classe</label>
              <input type="text" id="classe" required={isThisRequired} onChange={(e) => setClasse(e.target.value)} />
            </div>
            <div>
              <label htmlFor="metier">Métier</label>
              <input type="text" id="metier" required={isThisRequired} onChange={(e) => setMetier(e.target.value)} />
            </div>
            <div>
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                rows="7"
                required={isThisRequired}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={(e) => handleClose(e)}>
            Annuler
          </Button>
          <Button type="submit" form="formAddPnj" variant="primary">
            Sauvegarder
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
