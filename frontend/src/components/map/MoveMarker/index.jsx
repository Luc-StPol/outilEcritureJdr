import { useState } from 'react';
import '../../../styles/componentStyle.scss';

import cityIcon from '../../../asset/icons/cityIcon.png';
import villageIcon from '../../../asset/icons/villageIcon.png';
import dungeonIcon from '../../../asset/icons/dungeonIcon.png';
import siteIcon from '../../../asset/icons/siteIcon.png';
import habitationIcon from '../../../asset/icons/habitation.png';
import marketPlaceIcon from '../../../asset/icons/MarketPlace.png';
import taverneIcon from '../../../asset/icons/taverne.png';

export default function MoveMarker(props) {
  const pos = props.pos;
  const [styleTarget, setStyleTarget] = useState(false);

  const markerImg = [cityIcon, villageIcon, dungeonIcon, siteIcon, habitationIcon, taverneIcon, marketPlaceIcon];

  function handleClick(e) {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const relativeX = ((clientX - left) / width) * 100;
    const relativeY = ((clientY - top) / height) * 100;
    props.setPos({ top: relativeY, left: relativeX });
  }

  const targetStyle1 = {
    position: 'absolute',
    top: `${pos.top}%`,
    left: `${pos.left}%`,
    transform: `translate(-50%, -50%)`,
  };

  console.log(props.markerType);

  return (
    <>
      <div className="moveMarker" onMouseMove={styleTarget ? handleClick : null}>
        {props.children}
        <div>
          {props.showImage && (
            <img
              src={markerImg[props.markerType]}
              alt="target"
              className="targetIcon"
              style={targetStyle1}
              onClick={() => setStyleTarget(!styleTarget)}
            />
          )}
        </div>
      </div>
    </>
  );
}
