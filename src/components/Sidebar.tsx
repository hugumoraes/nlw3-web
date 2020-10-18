import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { useHistory } from "react-router-dom";


import mapMarkerImg from '../images/mapmarker.svg';

import { Container } from './styledSidebar';

export default function Sidebar() {
  const { goBack } = useHistory();

  return (
    <Container>
    <img src={mapMarkerImg} alt="Happy" />

    <footer>
      <button type="button" onClick={goBack}>
        <FiArrowLeft size={24} color="#FFF" />
      </button>
    </footer>
  </Container>
  )
}