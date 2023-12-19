import Map, { NavigationControl, Marker } from 'react-map-gl';
import { ReactComponent as MarkerIcon } from '../../../../assets/svg/marker.svg';
import MARKERS from '../../../../data/markers';
import 'mapbox-gl/dist/mapbox-gl.css';
import './styles.scss';

const Location = (): JSX.Element => {
  return (
    <Map
      initialViewState={{
        ...MARKERS[0],
        zoom: 16,
      }}
      mapboxAccessToken={import.meta.env.VITE_MAP_ACCESS_TOKEN}
      mapStyle='mapbox://styles/mapbox/light-v10'
      style={{ maxWidth: '960px', height: '620px' }}
    >
      <NavigationControl />
      {MARKERS.map(({ longitude, latitude }, index) => {
        return (
          <Marker
            key={longitude + latitude}
            longitude={longitude}
            latitude={latitude}
            anchor='bottom'
          >
            <MarkerIcon fill={index ? 'gray' : 'black'} />
          </Marker>
        );
      })}
    </Map>
  );
};

export default Location;
