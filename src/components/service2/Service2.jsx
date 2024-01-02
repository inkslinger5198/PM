import React from "react";
import "./service.css";
import { IoCheckmarkCircleSharp } from "react-icons/io5";

const Service2 = ({img, heading, para}) => {
  return (
    <div className="service">
      <div className="service-image">
        <img src={img} alt="service" />
      </div>
      <div className="service-content">
        <div className="tick">
          <IoCheckmarkCircleSharp className="check" />
        </div>
        <div className="service-data">
          <h1>{heading}</h1>
          <p>
            {para}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service2;
