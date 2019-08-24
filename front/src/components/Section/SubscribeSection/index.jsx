import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

const Section = () => {
  return (
    <MDBContainer id="subscribeSection">
      <br /><br />
      <MDBRow className="subscribe">
        <MDBCol md="2" xs="6" >
          <img src="/assets/img/editorial2.png" className="imgSubs" />
        </MDBCol>
        <MDBCol md="2" xs="3">
          <ul className="ulInicial">
            <li>Link 1</li>
            <li>Link 2</li>
            <li>Link 3</li>
            <li>Link 4</li>
          </ul>
        </MDBCol>
        <MDBCol md="2" xs="3">
          <ul className="ulFinal">
            <li>Link 1</li>
            <li>Link 2</li>
            <li>Link 3</li>
            <li>Link 4</li>
          </ul>
        </MDBCol>
        <MDBCol md="6">
          <div className="">
            <form action="">
              <img src="/assets/img/cuadrado.png" className="imgTabla" />
              <MDBRow className="tablaSubs">
                <MDBCol xs="6" ><img src="/assets/img/logoSusc.png" alt="" className="imgLogoSusc" /></MDBCol>
                <MDBCol xs="3" className="formSubs"><input type="text" name="search" />
                  <input type="submit" value="Enviar" className="btnCarrito btnEnviar" /></MDBCol>
              </MDBRow>
            </form>
          </div>
        </MDBCol>
      </MDBRow>

    </MDBContainer>
  );
}

export default Section;