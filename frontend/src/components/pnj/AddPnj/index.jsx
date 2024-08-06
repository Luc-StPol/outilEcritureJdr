import '../../../styles/componentStyle.scss';
import PnjForm from '../PnjForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { UpdateComponent } from '../../../utils/contexts';

export default function AddPnj(props) {
  const { update, setUpdate } = useContext(UpdateComponent);
  async function fetchData(body) {
    const req = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    };
    const response = await fetch('http://localhost:4200/api/pnj/add', req);
    if (response) {
      setUpdate(!update);
    } else console.log('error');
  }

  return (
    <>
      <PnjForm
        fetchData={fetchData}
        isThisRequired={true}
        title={
          <div>
            <FontAwesomeIcon icon={faPlus} className="faPlus fa-2xl" />
            Ajouter un nouveau Pnj
          </div>
        }
        header="Ajouter un nouveau Pnj"
      />
    </>
  );
}
