import { useState } from 'react';
import '../../styles/jdrStyle.scss';
import AddTown from '../../components/map/AddTown';
import InterractiveMap from '../../components/map/InterractiveMap';

export default function JdrMap() {
  const [showImage, setShowImage] = useState(true);
  const [pos, setPos] = useState({ top: 89, left: 5 });

  return (
    <>
      <InterractiveMap showImage={showImage} pos={pos} setPos={setPos} />
      <AddTown showImage={showImage} setShowImage={setShowImage} pos={pos} />
    </>
  );
}
