import React from "react";
import { MDBAnimation} from "mdbreact";

export default function Section({}) {
  return (
    <div id="autorsSection">
      <br />
      <MDBAnimation type="fadeIn" duration="3000ms" reveal >
        <div className="cajaAutors">
          <div className="titleAutors">Autores</div>
          <img
            src="assets/img/mujer_tech3.png"
            className="imgAutors"
            alt=""
          />
          <div className="cajafrase">
            <img className="fraseIzq" src="assets/img/frase-izq.png" alt="" />
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Sapiente consequuntur consequatur exercitationem necessitatibus illum.
            Similique cum ea accusantium animi impedit. Sapiente consectetur
            iste excepturi sequi, eius corrupti harum officia dicta.
          <br /><br />
            <strong className="autor">Laura Vallejos.</strong>
            <img className="fraseDer" src="assets/img/frase-der.png" alt="" />
          </div>
        </div>
      </MDBAnimation>
    </div>
  );
}
