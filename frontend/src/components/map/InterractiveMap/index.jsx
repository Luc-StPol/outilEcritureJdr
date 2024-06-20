import useFetch from '../../../utils/hooks/useFetch';
import Spinner from 'react-bootstrap/Spinner';
import '../../../styles/componentStyle.scss';
import MoveMarker from '../MoveMarker';

export default function InterractiveMap(props) {
  const jdrId = sessionStorage.getItem('jdrId');
  const url = `http://localhost:4200/api/jdr/${jdrId}`;
  const { data, dataLoading } = useFetch(url);

  return (
    <>
      {dataLoading ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <MoveMarker data={data} showImage={props.showImage} pos={props.pos} setPos={props.setPos}>
          <div>
            <img src={data.mapImg} alt="map" className="map" />
          </div>
        </MoveMarker>
      )}
    </>
  );
}
