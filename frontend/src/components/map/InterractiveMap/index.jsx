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
        <div className="interractiveMap">
          <h1>{data.mapTitle ? data.mapTitle : data.nom}</h1>
          <MoveMarker
            data={data}
            showImage={props.showImage}
            pos={props.pos}
            setPos={props.setPos}
            markerType={props.markerType}
          >
            <div className="map">
              <img src={data.mapImg} alt="map" className="mapImg" />
              <MarkerList locationData={props.locationData} />
            </div>
          </MoveMarker>
        </div>
      )}
    </>
  );
}
