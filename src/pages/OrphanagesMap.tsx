import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import api from '../services/api';

import { Container } from '../styles/pages/orphanagesmap';

import mapMarkerImg from '../images/mapmarker.svg';

import mapIcon from '../utils/mapIcon';

interface IOrphanage {
  id: number;
  latitude: number;
  longitude: number;
  name: string;
}

export default function OrphanagesMap() {
  const [orphanages, setOrphanages] = useState<IOrphanage[]>();

  useEffect(() => {
    api.get(`/orphanages`).then(r => {
      setOrphanages(r.data);
    }).catch();
  },[]);

  return (
    <Container>
     <aside>
       <header>
         <img src={mapMarkerImg} alt="Happy"/>

         <h2>Escolha um orfanato no mapa</h2>
         <p>Muitas crianças estão esperando a sua visita :)</p>
       </header>

       <footer>
         <strong>Curitiba</strong>
         <span>Paraná</span>
       </footer>
     </aside>

     <Map 
      center={[-25.5066808,-49.2957667]} 
      zoom={15}
      style={{ width: '100%', height: '100%' }}
     >
       <TileLayer 
          url={`https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} 
        />
       
        {orphanages?.map(orphanage => {
          return (
            <Marker
            icon={mapIcon}
            position={[orphanage.latitude, orphanage.longitude]}
            key={orphanage.id} 
          >
            <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup" >
              {orphanage.name}
              <Link to={`/orphanages/${orphanage.id}`}>
                <FiArrowRight size={20} color="#fff" />
              </Link>
            </Popup>
          </Marker>
          )
        })}

      </Map>
    
     <Link to="" className="create-orphanage">
      <FiPlus size={32} color="#fff" />
     </Link>

    </Container>
  )
}
