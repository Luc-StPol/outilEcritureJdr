import '../../../styles/componentStyle.scss';
import MoveMarker from '../MoveMarker';
import MarkerList from '../MarkerList';
import { WaitingScrean } from '../../../utils/commun';

export default function InterractiveMap(props) {
  const data = props.data;

  return (
    <>
      {props.dataLoading ? (
        <WaitingScrean />
      ) : (
        <MoveMarker data={data} showImage={props.showImage} pos={props.pos} setPos={props.setPos}>
          <div>
            <img src={data.mapImg} alt="map" className="map" />
            <MarkerList locationData={props.locationData} />
          </div>
        </MoveMarker>
      )}
    </>
  );
}
