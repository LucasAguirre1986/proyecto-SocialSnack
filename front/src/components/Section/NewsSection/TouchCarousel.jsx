import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBCardText, MDBCard, MDBCardImage, MDBCardBody } from
    "mdbreact";

const TouchCarousel = ({ items }) => {

    return (
        <MDBCarousel
            activeItem={1}
            length={items.length}
            showControls={true}
            showIndicators={true}
            interval={10000}
            className="cardTouch"
        >
            <MDBCarouselInner>
                {
                    items && items.map((item, i) => (

                        <MDBCarouselItem itemId={i + 1} key={i}>
                            <MDBView >
                                <MDBCard style={{ width: "22rem" }}>
                                    <MDBCardImage className="imgCarrouselTouch" src={`/assets/img/${item.img}`} waves />
                                    <MDBCardBody>
                                        <span className="titleImgTouch">{item.title}</span>
                                        <MDBCardText>
                                            <span className="nameImgTouch">{item.name}</span> <span className="priceImgTouch">${item.price}</span>
                                        </MDBCardText>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBView>
                        </MDBCarouselItem>
                    ))
                }
            </MDBCarouselInner>
        </MDBCarousel>
    );
}

export default TouchCarousel;