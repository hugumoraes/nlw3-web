import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

import { Container } from '../styles/pages/orphanagesmap';

import mapMarkerImg from '../images/mapmarker.svg';

export default function OrphanagesMap() {
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
       {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
     </Map>
    

     <Link to="" className="create-orphanage">
      <FiPlus size={32} color="#fff" />
     </Link>

    </Container>
  )
}
