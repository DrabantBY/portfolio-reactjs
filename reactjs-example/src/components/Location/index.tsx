import Map, { NavigationControl, Marker } from 'react-map-gl';
import { ReactComponent as MarkerIcon } from '../../assets/marker.svg';

import 'mapbox-gl/dist/mapbox-gl.css';
import './styles.scss';

const MARKERS = [
  { longitude: 2.3364, latitude: 48.86091 },
  { longitude: 2.3333, latitude: 48.8602 },
  { longitude: 2.3397, latitude: 48.8607 },
  { longitude: 2.333, latitude: 48.8619 },
  { longitude: 2.3365, latitude: 48.8625 },
];

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
