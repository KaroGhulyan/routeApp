import React, { useEffect, useState } from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from 'react-leaflet';
import { useSelector } from 'react-redux';
import L from 'leaflet';
import {selectRoutes } from '../../features/appSlice';
import RedIcon from "../../assets/red.svg"
import BlueIcon from '../../assets/blue.svg'

function Map() {
  const finished = L.icon({
    iconUrl:RedIcon,
    iconSize: [27, 57],
    iconAnchor: [12.5, 41],
    popupAnchor: [0, -41],
  });
  const delivery = L.icon({
    iconUrl:BlueIcon,
    iconSize: [27, 57],
    iconAnchor: [12.5, 41],
    popupAnchor: [0, -41],
  });
  const stops = useSelector(selectRoutes);
  const [stopsData, setStopsData] = useState([]);

  useEffect(() => {
    let arr = [];
    if (stops.length > 0) {
      stops.forEach(({ address }) => {
        arr.push(Object.values({ lat: address.lat, lng: address.lng }));
      });
    }
    setStopsData(arr);
  }, [stops]);

  const stopsRoutes = () => {
    if(stops.length > 0){
      return stops.map((stop, index) => {
        return (
          <Marker position={[stop?.address?.lat,stop?.address?.lng]} icon={stop?.isFinished ? finished : delivery} key={index}>
            <Popup>
              <h3>{stop?.information?.name}</h3>
              <span>{stop?.information?.street}</span>
              <h4 style={{color:stop?.isFinished ? '#28a745' : 'tomato'}}>{stop?.isFinished ? 'Delivered' : 'Delivery'}</h4>
            </Popup>
          </Marker>
        );
      });

    }
  };

  return (
    <MapContainer
      className="map"
      center={[52.79797, 6.89503]}
      zoom={13}
      scrollWheelZoom={false}
      style={{top:"48px"}}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Polyline pathOptions={{ color: '#1329FE' }} positions={stopsData} />
      {
        stopsRoutes()
      }
    </MapContainer>
  );
}

export default Map;
