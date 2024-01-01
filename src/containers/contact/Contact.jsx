import React from "react";
import "./contact.css";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    const setupCal = async () => {
      try {
        const cal = await getCalApi();

        if (cal && cal.ns && typeof cal.ns["funnel-syndicate"] === "function") {
          cal.ns["funnel-syndicate"]("ui", {
            theme: "light",
            styles: { branding: { brandColor: "#000000" } },
            hideEventTypeDetails: false,
            layout: "month_view",
          });
        } else {
          console.error("cal.ns.funnel-syndicate is not available:", cal);
        }
      } catch (error) {
        console.error("Error during Cal API setup:", error);
      }
    };

    setupCal();
  }, []);

  return (
    <div className="PM-contact " id="contact">
      <div className="PM-contact-content">
        <h1>Book A Call</h1>
        <p>
          {" "}
          Our SmartLink Outreach strategy is hand-crafted for B2B companies like
          yours and lets you scale your business profitably. You can contact us
          and add 2-5 clients every month with our AI-based SmartLink process.
        </p>
      </div>

      <div className="PM-contact-frame">
        <Cal
          namespace="progressor-media"
          calLink="pravitbh/progressor-media"
          style={{ width: "100%", height: "100%", overflow: "scroll" }}
          config={{ layout: "month_view" }}
        />
      </div>

      <div className="PM-contact-content">
        <h3>Take your business to a new level.</h3>
      </div>
    </div>
  );
};

export default Contact;
