import { useParams } from 'react-router';
import { useState } from 'react';
import useFetch from '../../utils/hooks/useFetch';
import { WaitingScrean } from '../../utils/commun';
import InterractiveMap from '../../components/map/InterractiveMap';
import AddPlace from '../../components/map/AddPlace';

export default function CityMap() {
  const { locationId } = useParams();

  const { data, dataLoading } = useFetch(`http://localhost:4200/api/villes/${locationId}`);
  const [showImage, setShowImage] = useState(true);
  const [pos, setPos] = useState({ top: 89, left: 5 });

  return (
    <>
      {dataLoading ? (
        <WaitingScrean />
      ) : (
        <>
          <InterractiveMap
            data={data}
            showImage={showImage}
            pos={pos}
            setPos={setPos}
            locationData={data.place}
            dataLoading={dataLoading}
          />
          <AddPlace showImage={showImage} setShowImage={setShowImage} pos={pos} locationId={locationId} />
        </>
      )}
    </>
  );
}
