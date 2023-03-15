import React from "react";
import Logo from "../Images/pokemon-logo.png";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

function Footer() {
  return (
    <footer id="footer">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 align-items-center">
          <div className="col-lg-4 col-md-8 col-xs-12 mb-3">
           
            <img src={Logo} alt="Logo" width="" height="" />
          </div>

          <div className="col-lg-4 col-md-8 col-xs-12 mb-3">
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Email address"
                aria-label="Email address"
                aria-describedby="basic-addon2"
              />
              <Button variant="outline-secondary" >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="GhostWhite"
                  className="bi bi-send-fill"
                  viewBox="0 0 16 16">
                  <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
                </svg>
              </Button>
            </InputGroup>
          </div>

          <div className="col-lg-4 col-md-8 col-xs-12 mb-3">
            
            <h4>Stay Connected</h4>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">Join our newsletter and stay up-to-date with all the latest news and updates in the world of Pokemon. 
              Join our community of Pokemon fans today and let's catch 'em all together!</li>
            </ul>
          </div>
        </div>
      </div>
      {/* <hr /> */}

      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5">
          <div className="col-lg-4 col-md-6 col-xs-12 mb-3">
          <h4 className= "mb-4">QUICK NAVIGATION</h4>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                HOME
              </li>
              <li className="nav-item mb-2">
                OUR POKEMONS
              </li>
              <li className="nav-item mb-2">
                ADD POKEMON
              </li>

              <li className="nav-item mb-2">
               PUBLIC POKEMONS
              </li>
              </ul>
          </div>

          <div className="col-lg-4 col-md-8 col-xs-12 mb-3 ">
            
            <h4 className= "mb-4">ABOUT US</h4>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
               
                We are a community of passionate Pokemon fans who love to discuss, share, and learn everything there is to know about the wonderful world of Pokemon.
              </li>
              <li className="nav-item mb-2">
                
                ABOUT US
              </li>
              <li className="nav-item mb-2">
                
                CONTACT US
              </li>

             
            </ul>
          </div>

          <div className="col-lg-4 col-md-8 col-xs-12 mb-3">
           
            <h4 className= "mb-4">SOCIAL MEDIA</h4>
            
            
            <ul className="list-unstyled d-flex">

            <li>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="45"
                    height="45"
                    fill="currentColor"
                    className="bi bi-linkedin"
                    viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                  </svg>
                </a>
              </li>
            
              <li className="ms-3">
                <a
                  href="https://www.facebook.com/"
                  target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="45"
                    height="45"
                    fill="currentColor"
                    className="bi bi-facebook"
                    viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                  </svg>
                </a>
              </li>
              <li className="ms-3">
                <a
                  href="https://twitter.com/?lang=en"
                  target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="45"
                    height="45"
                    fill="currentColor"
                    className="bi bi-twitter"
                    viewBox="0 0 16 16">
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                  </svg>
                </a>
              </li>
              
            </ul>
          
          </div>
        </div>
      </div>

      <div className="container-fluid gigi-footer2">
        <div className="container">
          <div className="d-flex flex-wrap justify-content-between align-items-center py-3 ">
            <div className="col-md-6 d-flex align-items-center">
              <span className="mb-3 mb-md-0">
                &copy; 2023 Kimsandra / Ahmed / Rodrigo / Cristian
              </span>
            </div>
            <p className="nav justify-content-end ">
            Group 1 WBS 
            </p>
           
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

