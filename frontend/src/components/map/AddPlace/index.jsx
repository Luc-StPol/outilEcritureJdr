import { useState } from 'react';
import Button from 'react-bootstrap/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import siteIcon from '../../../asset/icons/siteIcon.png';
import habitationIcon from '../../../asset/icons/habitation.png';
import marketPlaceIcon from '../../../asset/icons/MarketPlace.png';
import taverneIcon from '../../../asset/icons/taverne.png';

export default function AddPlace(props) {
  const [name, setName] = useState();
  const [open, setOpen] = useState();
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
      id: Math.random(),
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
    <div className="addMarker">
      <h2 onClick={() => setOpen(!open)}>
        <FontAwesomeIcon icon={faPlus} />
      </h2>
      <form onSubmit={submit} className={open ? 'open' : null}>
        <div className="radioInput">
          <input
            name="type"
            id="habitation"
            value="habitation"
            type="radio"
            onChange={(e) => {
              setType(e.target.value);
              props.setShowImage(true);
              props.setMarkerType(4);
            }}
          />
          <label for="habitation">
            <img src={habitationIcon} alt="icone" />
          </label>
          <input
            name="type"
            id="auberge"
            value="auberge"
            type="radio"
            onChange={(e) => {
              setType(e.target.value);
              props.setShowImage(true);
              props.setMarkerType(5);
            }}
          />
          <label for="auberge">
            <img src={taverneIcon} alt="icone" />
          </label>

          <input
            name="type"
            id="commerce"
            value="commerce"
            type="radio"
            onChange={(e) => {
              setType(e.target.value);
              props.setShowImage(true);
              props.setMarkerType(6);
            }}
          />
          <label for="commerce">
            <img src={marketPlaceIcon} alt="icone" />
          </label>

          <input
            name="type"
            id="place"
            value="place"
            type="radio"
            onChange={(e) => {
              setType(e.target.value);
              props.setShowImage(true);
              props.setMarkerType(3);
            }}
          />
          <label for="place">
            <img src={siteIcon} alt="icone" />
          </label>
        </div>
        <input required name="nom" type="text" onChange={(e) => setName(e.target.value)} placeholder="nom du marker" />
        <textarea placeholder="description" onChange={(e) => setDescription(e.target.value)}></textarea>
        <Button variant="dark" size="sm" type="submit">
          Sauvegarder
        </Button>
      </form>
    </div>
  );
}
