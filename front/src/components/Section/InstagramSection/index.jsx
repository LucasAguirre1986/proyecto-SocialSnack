import React from "react";
import { MDBRow, MDBCol, MDBContainer, MDBAnimation } from "mdbreact";

export default class Section extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const listado = ['BgHCHsSjQLm', 'Bss7xVWHBWQ', 'Bv4SH-bHVwG']
    return (
      <div id="instagramSection">
        <br /><br />
        <img src="/assets/img/instagram.png" alt="" className="imgInstagramLogo" />
        <MDBContainer>
          <MDBAnimation type="fadeIn" duration="3000ms" reveal >
            <div className="section-content instagram" >
              <img src="/assets/img/puntos.jpg" alt="" className="imgInstagram" />
              <MDBRow>
                {
                  listado && listado.map((item, i) => (
                    <MDBCol md="4" key={i}>
                      <iframe id="instagram-embed-0"
                        className="instagram-media instagram-media-rendered classInstagram1"
                        src={`https://www.instagram.com/p/${item}/embed?utm_source=ig_embedembed/captioned/`}
                        scrolling="no"
                        data-instgrm-payload-id="instagram-media-payload-1"
                        frameBorder="0">
                      </iframe>
                    </MDBCol>
                  ))
                }
              </MDBRow>
            </div>
          </MDBAnimation>
        </MDBContainer >
        <br /><br />
      </div >
    );
  }
}
