import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

// Import your image and video files
import image1 from "/1.jpg"; // Replace with your image path
import image2 from "/3.jpg"; // Replace with your image path
import video from "/2.mp4"; // Replace with your video path

function App() {
  return (
    <div className="app-container">
     
  
      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "20px",
          maxWidth: "960px",
          margin: "0 auto",
        }}
      >
        <h1 style={{ textAlign: "center" }}>
          GreenRina Ointment: Official Approval
        </h1>
        <h2 style={{ textAlign: "center" }}>
          <span>We are proud to announce that </span>
          <strong style={{ fontWeight: "bold" }}>Rina Sabz Ointment</strong>
          <span>
            {" "}
            has been officially approved for its quality and effectiveness.
          </span>
        </h2>

        <div
          className="content"
          style={{
            textAlign: "left",
            width: "90%",
            maxWidth: "700px",
            marginBottom: "20px",
          }}
        >
          <p>
            Our ointment is designed to provide fast and reliable relief from
            hemorrhoid symptoms, ensuring a comfortable and pain-free
            experience.
          </p>

          <h3 style={{ fontWeight: "bold" }}>Product Benefits:</h3>
          <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
            <li>Fast-acting relief</li>
            <li>Reduces inflammation and swelling</li>
            <li>Soothes discomfort and irritation</li>
            <li>Safe and effective</li>
          </ul>

          <h3 style={{ fontWeight: "bold" }}>Quality Assurance:</h3>
          <p>
            Rina Sabz Ointment has passed rigorous testing to guarantee safety
            and efficiency. We are committed to offering only the best for our
            customers.
          </p>
        </div>

        <div
          className="media-container"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          <img
            src={image1}
            alt="Rina Sabz Ointment 1"
            className="media"
            style={{
              maxWidth: "300px",
              height: "auto",
              margin: "10px",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          />
          <img
            src={image2}
            alt="Rina Sabz Ointment 2"
            className="media"
            style={{
              maxWidth: "300px",
              height: "auto",
              margin: "10px",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          />
          <video
            src={video}
            controls
            className="media"
            style={{
              maxWidth: "300px",
              height: "300px", // Set height equal to width for a square
              margin: "10px",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              objectFit: "cover", // Maintain aspect ratio and cover the square
            }}
          />
        </div>

        <div
          className="footer"
          style={{ textAlign: "center", marginTop: "20px" }}
        >
          <p>For more information, please contact us or visit our website.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
