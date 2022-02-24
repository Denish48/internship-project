import React, { useState } from "react";
import "./AboutUS.css";
import { dt } from "../FireBase";
import { addDoc, collection } from "firebase/firestore";

const AboutUs = () => {
  const [viewer_Name, setViewer_Name] = useState("");
  const [viewer_Email, setViewer_Email] = useState("");
  const [viewer_Contact_No, setViewer_Contact_No] = useState("");
  const [viewer_Message, setViewer_Message] = useState("");

  const dtds = collection(dt, "ContactUsData");

  const Contact_US_Data_Handler = (e) => {
    e.preventDefault();
    setViewer_Name(viewer_Name);
    setViewer_Email(viewer_Email);
    setViewer_Contact_No(viewer_Contact_No);
    setViewer_Message(viewer_Message);

    if ((viewer_Name, viewer_Email, viewer_Contact_No === "")) {
      window.alert("Fill The Data");
    } else {
      const ContactData = async () => {
        await addDoc(dtds, {
          viewer_Name: viewer_Name,
          viewer_Email: viewer_Email,
          viewer_Contact: viewer_Contact_No,
          viewer_Message: viewer_Message,
        });
      };
      if (ContactData()) {
        setViewer_Name("");
        setViewer_Email("");
        setViewer_Contact_No("");
        setViewer_Message("");
        window.history.replaceState(null, null, "/");

      }
    }
  };

  return (
    <>
      <div className="background">
        <div className="container">
          <div className="screen">
            <div className="screen-header">
              <div className="screen-header-left">
                <div className="screen-header-button close"></div>
                <div className="screen-header-button maximize"></div>
                <div className="screen-header-button minimize"></div>
              </div>
              <div className="screen-header-right">
                <div className="screen-header-ellipsis"></div>
                <div className="screen-header-ellipsis"></div>
                <div className="screen-header-ellipsis"></div>
              </div>
            </div>
            <div className="screen-body">
              <div className="screen-body-item left">
                <div className="app-title">
                  <span>CONTACT</span>
                  <span>US</span>
                </div>
                <div className="app-contact" style={{ fontSize: "12px" }}>
                  CONTACT INFO : +91 8154810414
                </div>
              </div>
              <div className="screen-body-item">
                <div className="app-form">
                  <div className="app-form-group">
                    <input
                      className="app-form-control"
                      required
                      name="viewer_Name"
                      placeholder="NAME"
                      value={viewer_Name}
                      onChange={(e) => setViewer_Name(e.target.value)}
                      autoComplete="off"
                    />
                  </div>
                  <div className="app-form-group">
                    <input
                      className="app-form-control"
                      required
                      name="viewer_Email"
                      placeholder="EMAIL"
                      value={viewer_Email}
                      onChange={(e) => setViewer_Email(e.target.value)}
                      autoComplete="off"
                    />
                  </div>
                  <div className="app-form-group">
                    <input
                      className="app-form-control"
                      name="viewer_Contact"
                      placeholder="CONTACT NO"
                      value={viewer_Contact_No}
                      required
                      onChange={(e) => setViewer_Contact_No(e.target.value)}
                      autoComplete="off"
                    />
                  </div>
                  <div className="app-form-group message">
                    <input
                      className="app-form-control"
                      required
                      name="viewer_Message"
                      value={viewer_Message}
                      onChange={(e) => setViewer_Message(e.target.value)}
                      placeholder="MESSAGE"
                      autoComplete="off"
                    />
                  </div>
                  <div className="app-form-group buttons">
                    <button className="app-form-button">CANCEL</button>
                    <button
                      className="app-form-button"
                      onClick={Contact_US_Data_Handler}
                    >
                      SEND
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="credits">
            inspired by
            <a
              className="credits-link"
              href="https://www.elsner.com/"
              target="_blank"
            >
              <svg className="dribbble" viewBox="0 0 200 200">
                <g stroke="#ffffff" fill="none">
                  <circle cx="100" cy="100" r="90" stroke-width="20"></circle>
                  <path
                    d="M62.737004,13.7923523 C105.08055,51.0454853 135.018754,126.906957 141.768278,182.963345"
                    stroke-width="20"
                  ></path>
                  <path
                    d="M10.3787186,87.7261455 C41.7092324,90.9577894 125.850356,86.5317271 163.474536,38.7920951"
                    stroke-width="20"
                  ></path>
                  <path
                    d="M41.3611549,163.928627 C62.9207607,117.659048 137.020642,86.7137169 189.041451,107.858103"
                    stroke-width="20"
                  ></path>
                </g>
              </svg>
              Elsner
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
