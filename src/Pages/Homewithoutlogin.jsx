import React from "react";
import styled from "styled-components";

import Navbar from "../Components/Navbar/Navbar";
import Footer from "./Footer";

function Homewithoutlogin(props) {
  return (
    <div>
      <Navbar />
      <Homewithoutloginout>

        <div className="hero d-flex align-items-center justify-content-center">
          <h1 className="text-white">get lost in the beauty of nature</h1>
        </div>
        <div className="container">
          <div className="row py-5">
            <div className="col-lg-6 d-flex justify-content-center align-items-center">
              <div className="d-flex flex-column">
                <div className="d-flex flex-column">
                  <h1>TrekIt</h1>
                </div>
                <div className="d-flex flex-column">
                  <h6>
                    get lost in a adventures treck .
                  </h6>
                </div>
                <div className="d-flex flex-column">
                  <a href="/login">
                    <input
                      type="submit"
                      value="login/signup"
                      className="btn btn-primary"
                    />{" "}
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <img src="https://images.unsplash.com/photo-1587547131116-a0655a526190?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1216&q=80" />
            </div>
          </div>
        </div>
        <Extrapaddingforbottom></Extrapaddingforbottom>
      </Homewithoutloginout>
      
      <div classname="footer">
        <Footer/>
      </div>
    </div>
  );
}
const Homewithoutloginout = styled.div`
.hero{
  height:750px;
  background-image: url("https://images.unsplash.com/photo-1530461215976-31923a646c83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1794&q=80")
}
  img {
    width: 100%;
  }
  .footer{
    position: absolute;
    margin-bottom: 0px;
  }
  
`;
const Extrapaddingforbottom = styled.div`
  height: 300px;
`;

export default Homewithoutlogin;
