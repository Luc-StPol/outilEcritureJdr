import { useState } from 'react';
import target from '../../../asset/icons/tag-solid.svg';
import '../../../styles/componentStyle.scss';

export default function MoveMarker(props) {
  const pos = props.pos;
  const [styleTarget, setStyleTarget] = useState(false);

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

  return (
    <>
      <div className="interractiveMap" onMouseMove={styleTarget ? handleClick : null}>
        {props.children}
        <div>
          {props.showImage && (
            <img
              src={target}
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
