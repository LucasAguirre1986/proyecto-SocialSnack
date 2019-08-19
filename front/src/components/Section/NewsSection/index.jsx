import React from "react";
import { MDBRow, MDBCol, MDBContainer, MDBIcon, MDBAnimation } from "mdbreact";
import Carrusel from './Carrusel'

export default function Section() {
  return (
    <MDBContainer className="" id="newsSection">
      <MDBRow>
        <MDBCol md="2" className="fondoPunteado">
          {/* fondo punteado Img */}
        </MDBCol>
        <MDBCol md="10" >
          <MDBAnimation type="lightSpeedIn" >
            <div class="horizontal_dotted_line">
              <span><h1 className="titleNews">Novedades</h1></span>
            </div>
            <Carrusel /> 
            <br /><br />
          </MDBAnimation>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
