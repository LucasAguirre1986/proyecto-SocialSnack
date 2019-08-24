import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter className="font-small pt-4 mt-4 footerActual">
    <hr/>
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="3">
            <p>
              Condiciones de venta de productos
            </p>
          </MDBCol>
          <MDBCol md="3">
            <p>
              Politica de privacidad
            </p>
          </MDBCol>
          <MDBCol md="4">
            <p>
              Todos los derechos reservados
            </p>
          </MDBCol>
          <MDBCol md="2">
            <img src="/assets/img/logoSocial.png" className="logoSocial"/>
          </MDBCol>
          
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
  );
}

export default FooterPage;