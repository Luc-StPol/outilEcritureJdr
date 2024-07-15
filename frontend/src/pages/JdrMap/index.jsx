import { useState } from 'react';
import '../../styles/jdrStyle.scss';
import AddTown from '../../components/map/AddTown';
import InterractiveMap from '../../components/map/InterractiveMap';
import { WaitingScrean } from '../../utils/commun';
import useFetch from '../../utils/hooks/useFetch';

export default function JdrMap() {
  const jdrId = sessionStorage.getItem('jdrId');
  const url = `http://localhost:4200/api/jdr/${jdrId}`;
  const { data, dataLoading } = useFetch(url);

  const { data: townsData, dataLoading: dataLoading2 } = useFetch(`http://localhost:4200/api/villes/all/${jdrId}`);

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
            locationData={townsData}
            dataLoading={dataLoading2}
          />
          <AddTown showImage={showImage} setShowImage={setShowImage} pos={pos} />
        </>
      )}
    </>
  );
}
