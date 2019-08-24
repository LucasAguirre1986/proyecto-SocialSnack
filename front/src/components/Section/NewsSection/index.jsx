import React from "react";
import { MDBRow, MDBCol, MDBContainer, MDBIcon, MDBAnimation } from "mdbreact";
import Carousel from './Carousel';
import TouchCarousel from './TouchCarousel';

var items = ['libro.jpeg', 'libro7.jpg', 'libro8.jpg', 'libro6.jpg', 'libro5.jpg', 'libro4.jpg',
  'libro3.jpg', 'libro2.jpg', 'libro10.jpg', 'libro9.png']

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
            <MDBAnimation type="lightSpeedIn" >
              <div className="horizontal_dotted_line">
                <span><h1 className="titleNews">Novedades</h1></span>
              </div>
              {isMobile ?
                <TouchCarousel items={items}/>
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
