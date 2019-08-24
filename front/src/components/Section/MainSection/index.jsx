import React from "react";

import Home from '../HomeSection' // Sección Principal. Se encuentra en el top de la web
import Autors from '../AutorsSection/index' // Sección de Autores
import Instagram from '../InstagramSection/index' // Sección de Instagram
import News from '../NewsSection/index' // Sección de Novedades
import Subscribe from '../SubscribeSection/index' // Sección de Novedades


export default function mainSection() {
  return (
    <div className="App">
      <Home id="homeSection" />
      <News id="newsSection" />
      <Autors id="autorsSection" />
      <Instagram id="instagramSection" />
      <Subscribe id="subscribeSection" />
    </div>
  );
}
