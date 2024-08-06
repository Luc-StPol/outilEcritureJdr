import React, { useContext } from 'react';
import DeletePopup from '../commun/DeletePopup';
import { UpdateComponent } from '../../utils/contexts';

export default function JdrSelectionBox(props) {
  const jdr = props.jdr;
  const { update, setUpdate } = useContext(UpdateComponent);

  function loginJdr() {
    sessionStorage.setItem('jdrId', jdr._id);
    window.location.reload(false);
  }

  async function deleteJdr() {
    const url = `http://localhost:4200/api/jdr/deletejdr/${jdr._id}`;
    const request = {
      method: 'DELETE',
    };

    await fetch(url, request);
    setUpdate(!update);
  }

  return (
    <div className="jdrSelectionBox" key={jdr._id}>
      <p onClick={loginJdr}>{jdr.jdrTitle}</p>

      <DeletePopup title={jdr.jdrTitle} delData={deleteJdr} />
    </div>
  );
}
