import { useState } from 'react';
import '../../../styles/componentStyle.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faDownLong } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';

import cityIcon from '../../../asset/icons/cityIcon.png';
import villageIcon from '../../../asset/icons/villageIcon.png';
import dungeonIcon from '../../../asset/icons/dungeonIcon.png';
import siteIcon from '../../../asset/icons/siteIcon.png';

export default function AddTown(props) {
  const [title, setTitle] = useState();
  const [map, setMap] = useState();
  const [type, setType] = useState();
  const [open, setOpen] = useState(false);
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
    <div className="addMarker">
      <h2 onClick={() => setOpen(!open)}>
        <FontAwesomeIcon icon={faPlus} />
      </h2>
      <form onSubmit={submit} className={open ? 'open' : null}>
        <div className="radioInput">
          <input
            name="type"
            id="ville"
            value="Ville"
            type="radio"
            onChange={(e) => {
              setType(e.target.value);
              props.setShowImage(true);
              props.setMarkerType(0);
            }}
          />
          <label for="ville">
            <img src={cityIcon} alt="icone" />
          </label>
          <input
            name="type"
            id="Site"
            value="Site"
            type="radio"
            onChange={(e) => {
              setType(e.target.value);
              props.setShowImage(true);
              props.setMarkerType(3);
            }}
          />
          <label for="Site">
            <img src={siteIcon} alt="icone" />
          </label>

          <input
            name="type"
            id="Donjon"
            value="Donjon"
            type="radio"
            onChange={(e) => {
              setType(e.target.value);
              props.setShowImage(true);
              props.setMarkerType(2);
            }}
          />
          <label for="Donjon">
            <img src={dungeonIcon} alt="icone" />
          </label>

          <input
            name="type"
            id="Village"
            value="Village"
            type="radio"
            onChange={(e) => {
              setType(e.target.value);
              props.setShowImage(true);
              props.setMarkerType(1);
            }}
          />
          <label for="Village">
            <img src={villageIcon} alt="icone" />
          </label>
        </div>
        <input required name="nom" type="text" onChange={(e) => setTitle(e.target.value)} placeholder="nom du marker" />
        <label for="carte">
          <FontAwesomeIcon icon={faDownLong} /> Ajouter une carte <FontAwesomeIcon icon={faDownLong} />
        </label>
        <input id="carte" type="file" required onChange={(e) => setMap(e.target.files[0])} placeholder="Image" />
        <Button variant="dark" size="sm" type="submit">
          Sauvegarder
        </Button>
      </form>
    </div>
  );
}
