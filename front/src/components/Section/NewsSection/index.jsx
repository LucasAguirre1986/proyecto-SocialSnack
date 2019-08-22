import React from "react";
import { MDBRow, MDBCol, MDBContainer, MDBIcon, MDBAnimation } from "mdbreact";
import Carousel from './Carousel'
var items = ['libro.jpeg', 'libro7.jpg', 'libro8.jpg', 'libro6.jpg', 'libro5.jpg', 'libro4.jpg',
  'libro3.jpg', 'libro2.jpg', 'libro10.jpg', 'libro9.png']

export default function Section() {
  return (
    <MDBContainer className="" id="newsSection">
      <MDBRow>
        <MDBCol md="2" className="fondoPunteado">
          {/* fondo punteado Img */}
        </MDBCol>
        <MDBCol md="10" >
          <MDBAnimation type="lightSpeedIn" >
            <div className="horizontal_dotted_line">
              <span><h1 className="titleNews">Novedades</h1></span>
            </div>
            <br/>
            <Carousel items={items} active={0} className="margenTop"/>
            <br /><br />
          </MDBAnimation>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
