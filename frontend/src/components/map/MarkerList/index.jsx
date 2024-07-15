import MarkerStyle from '../MarkerStyle';

export default function MarkerList(props) {
  const data = props.locationData;

  return (
    <>
      <div>
        {data.map((marker) => (
          <div>
            <MarkerStyle marker={marker} key={marker.id} />
          </div>
        ))}
      </div>
    </>
  );
}
