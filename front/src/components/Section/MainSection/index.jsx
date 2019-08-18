import React from "react";

import Home from '../HomeSection' // Sección Principal. Se encuentra en el top de la web
import Autors from '../AutorsSection/index' // Sección de Autores
import Instagram from '../InstagramSection/index' // Sección de Instagram
import News from '../NewsSection/index' // Sección de Novedades
import Subscribe from '../SubscribeSection/index' // Sección de Novedades

import dummyText from "../DummyText";

export default function mainSection() {
    return (
        <div className="App">
          <Home
            title="Section N 2"
            subtitle={dummyText}
            dark={false}
            id="homeSection"
          />
          <News
            title="Section 4"
            subtitle={dummyText}
            dark={false}
            id="newsSection"
          />
          <Autors
            title="Section N 1"
            subtitle={dummyText}
            dark={true}
            id="autorsSection"
          />          
          <Instagram
            title="Section N 3"
            subtitle={dummyText}
            dark={true}
            id="instagramSection"
          />
          <Subscribe
            title="Section N 3"
            subtitle={dummyText}
            dark={true}
            id="subscribeSection"
          />
          
        </div>
  );
}
