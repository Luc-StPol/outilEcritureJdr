import { useState } from 'react';
import { useNavigate } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import '../../styles/jdrStyle.scss';

export default function AddJdr() {
  const [jdrTitle, setJdrTitle] = useState();
  const [mapTitle, setMapTitle] = useState();
  const [mapImg, setMapImg] = useState();

  const navigate = useNavigate();

  function goBack() {
    navigate('/');
  }

  function submit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('jdrTitle', jdrTitle);
    formData.append('mapTitle', mapTitle);
    formData.append('image', mapImg);
    const url = 'http://localhost:4200/api/jdr/addjdr';
    const request = {
      method: 'POST',
      body: formData,
    };
    fetch(url, request)
      .then((response) => {
        if (response.status === 201) {
          navigate('/');
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <form encType={'multipart/form-data'} id="formData" onSubmit={submit} className="addJdr">
        <div onClick={goBack} className="icon">
          <FontAwesomeIcon icon={faArrowLeft} />
        </div>
        <label htmlFor="jdrTitle">Titre</label>
        <input
          type="text"
          name="jdrTitle"
          onChange={(e) => {
            setJdrTitle(e.target.value);
          }}
          required
        />
        <label htmlFor="mapTitle">Nom de la carte</label>
        <input
          type="text"
          name="mapTitle"
          onChange={(e) => {
            setMapTitle(e.target.value);
          }}
          required
        />
        <label htmlFor="mapImg">Image de la carte</label>
        <input
          type="file"
          name="mapImg"
          onChange={(e) => {
            setMapImg(e.target.files[0]);
          }}
          required
        />
        <button type="submit">Commencer à écrire votre nouveau Jdr !</button>
      </form>
    </div>
  );
}
