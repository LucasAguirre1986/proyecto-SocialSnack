import React from "react";
import { MDBRow, MDBCol, MDBContainer, MDBAnimation } from "mdbreact";
import Carousel from './Carousel';
import TouchCarousel from './TouchCarousel';
import items from './seedItems'

export default class Section extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      width: window.innerWidth,
    }
  }
  render() {
    const { width } = this.state;
    const isMobile = width <= 500;

    return (
      <MDBContainer className="" id="newsSection">
        <MDBRow>
          <MDBCol md="2" className="fondoPunteado">
            {/* fondo punteado Img */}
          </MDBCol>
          <MDBCol md="10" style={isMobile ? { paddingRight: 0, paddingLeft: 0 } : {}}>
            <MDBAnimation type="fadeIn" duration="3000ms" reveal>
              <div className="horizontal_dotted_line">
                <span><h1 className="titleNews">Novedades</h1></span>
              </div>
              {isMobile ?
                <TouchCarousel items={items} />
                :
                <>
                  <br />
                  <Carousel items={items} active={0} className="margenTop" />
                </>
              }
              <br /><br />
            </MDBAnimation>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}
