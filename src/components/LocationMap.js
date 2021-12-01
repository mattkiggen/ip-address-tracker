import { MapContainer, TileLayer, Circle, useMap } from 'react-leaflet';
import { LatLng } from 'leaflet';
import styles from '../styles/Map.module.scss';

export default function LocationMap({ data }) {
  const lat = data ? data.location.lat : -33.93156;
  const lng = data ? data.location.lng : 18.4448;
  const position = [lat, lng];

  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={false}
      className={styles.map}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url={`https://api.mapbox.com/styles/v1/mattkiggen/ckwng3o5t9lqd15p7ttvdchl3/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
      />
      <Circle
        center={position}
        pathOptions={{ fillColor: 'red' }}
        radius={600}
      />
      <ChangeView lat={position[0]} lng={position[1]} />
    </MapContainer>
  );
}

function ChangeView({ lat, lng }) {
  const map = useMap();
  map.setView(new LatLng(lat, lng));
  return null;
}
