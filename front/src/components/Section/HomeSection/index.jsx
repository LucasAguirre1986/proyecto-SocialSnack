import React from "react";
import { MDBJumbotron, MDBBtn, MDBCol, MDBCardTitle, MDBIcon } from "mdbreact";

const HomeSection = () => {
  return (
    <>
      <MDBJumbotron style={{ padding: 0 }} className="bannerHome" id="homeSection">
        <MDBCol className="text-white text-center py-5 px-4 my-5" 
            style={{ backgroundImage: `url(http://jamones-simeon.com/wp-content/uploads/2016/02/jamones-ibericos-fondo-gris.jpeg)` }}>
          <MDBCol className="py-5">
            <MDBCardTitle className="h1-responsive pt-3 m-5 font-bold">Create your beautiful website with MDBootstrap</MDBCardTitle>
            <p className="mx-5 mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam, voluptatem,
              optio vero odio nam sit officia accusamus minus error nisi architecto nulla ipsum dignissimos. Odit sed qui, dolorum!
                </p>
            <MDBBtn outline color="white" className="mb-5"><MDBIcon icon="clone" className="mr-2"></MDBIcon> View project</MDBBtn>
          </MDBCol>
        </MDBCol>
      </MDBJumbotron>
    </>
  )
}

export default HomeSection;