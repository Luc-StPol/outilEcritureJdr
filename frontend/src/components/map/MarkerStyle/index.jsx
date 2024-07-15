import PlaceDescription from '../PlaceDescription';

import cityIcon from '../../../asset/icons/cityIcon.png';
import villageIcon from '../../../asset/icons/villageIcon.png';
import dungeonIcon from '../../../asset/icons/dungeonIcon.png';
import siteIcon from '../../../asset/icons/siteIcon.png';
import habitationIcon from '../../../asset/icons/habitation.png';
import marketPlaceIcon from '../../../asset/icons/MarketPlace.png';
import taverneIcon from '../../../asset/icons/taverne.png';

import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function MarkerStyle(props) {
  const marker = props.marker;
  const [openTitle, setOpenTitle] = useState(false);

  const modal =
    marker.type === 'Ville' || marker.type === 'Site' || marker.type === 'Village' || marker.type === 'Donjon'
      ? false
      : true;

  const titleStyle = {
    position: 'absolute',
    top: `${marker.markerPos[0].top}%`,
    left: `${marker.markerPos[0].left}%`,
    transform: `translate(-50%, -250%)`,
    backgroundColor: 'white',
    borderRadius: '5px',
    display: openTitle ? 'block' : 'none',
  };

  function mapIcon(type) {
    let imgIcon = null;
    if (type === 'Ville') {
      imgIcon = cityIcon;
    } else if (type === 'Village') {
      imgIcon = villageIcon;
    } else if (type === 'Site') {
      imgIcon = siteIcon;
    } else if (type === 'Donjon') {
      imgIcon = dungeonIcon;
    } else if (type === 'habitation') {
      imgIcon = habitationIcon;
    } else if (type === 'commerce') {
      imgIcon = marketPlaceIcon;
    } else if (type === 'auberge') {
      imgIcon = taverneIcon;
    } else if (type === 'place') {
      imgIcon = siteIcon;
    }

    return imgIcon;
  }

  return (
    <div>
      {modal ? (
        <div style={titleStyle}>
          <PlaceDescription marker={marker} />
        </div>
      ) : (
        <Link to={`/carte/lieu/${marker._id}`} style={titleStyle}>
          {marker.nom}
          <p>Marker</p>
        </Link>
      )}

      <img
        key={marker.id}
        src={mapIcon(marker.type)}
        alt="mapMarker"
        onClick={() => setOpenTitle(!openTitle)}
        style={{
          position: 'absolute',
          top: `${marker.markerPos[0].top}%`,
          left: `${marker.markerPos[0].left}%`,
          transform: `translate(-50%, -50%)`,
        }}
      />
    </div>
  );
}
