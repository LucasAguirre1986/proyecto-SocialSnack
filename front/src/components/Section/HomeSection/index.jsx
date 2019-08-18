import React from "react";
import { MDBJumbotron, MDBRow, MDBCol, MDBContainer, MDBIcon, MDBAnimation } from "mdbreact";

const HomeSection = () => {
  return (
    <>
      <MDBJumbotron className="bannerHome" id="homeSection"
        style={{ backgroundImage: `url(http://jamones-simeon.com/wp-content/uploads/2016/02/jamones-ibericos-fondo-gris.jpeg)` }}>
        <MDBContainer className="jumbotronHome">
          <MDBRow>
            <MDBCol md="7" >
              <MDBAnimation type="lightSpeedIn" >
                <h1 className="titleHome">Libro destacado</h1>
                <hr />
                <p className="parrafoHome">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic ipsam sed omnis? Ut minus non,
                  vero enim laudantium aliquam earum obcaecati cuan, sapiente, error numquam officia sint similique
                  amet cum!
                </p>
                <span className="btnCarrito">
                  Comprar <i className="fas fa-shopping-basket"></i>
                </span>
                <br/><br/>
              </MDBAnimation>
            </MDBCol>
            <MDBCol md="4">
              <MDBAnimation type="bounceInLeft" delay="900ms">
                <img src="/assets/img/libro.jpeg" className="imgHome" />
              </MDBAnimation>
            </MDBCol>
            <MDBCol md="1"></MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBJumbotron>

      <MDBContainer className="footerEnviosHome">
        <p className="parrafoHome">
          <MDBIcon icon="truck" />  -  Envios gratis a todo el país.
        </p>
      </MDBContainer>

    </>
  )
}

export default HomeSection;