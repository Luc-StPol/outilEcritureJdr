import useFetch from '../../../utils/hooks/useFetch';
import Spinner from 'react-bootstrap/Spinner';
export default function AddChapter(props) {
  const { data, dataLoading } = useFetch(`http://localhost:4200/api/jdr/findallchapitre/${props.jdrId}`);
  function sendChapter() {
    const chapNumber = data.length + 1;
    console.log(chapNumber);
    const url = `http://localhost:4200/api/jdr/addchapitre/${props.jdrId}`;
    const request = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chapNumber: chapNumber }),
    };
    fetch(url, request).then(() => props.setUpdate(props.update + 1));
  }

  return (
    <div className="addChapter">
      {dataLoading ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <div>
          <button onClick={sendChapter}> + Ajouter un chapitre</button>
        </div>
      )}
    </div>
  );
}
