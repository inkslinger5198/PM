import React from "react";
import "./services.css";
import Service from "../../components/service/Service";
import Service2 from "../../components/service2/Service2";
import img1 from "../../assets/Services/1.jpg";
import img2 from "../../assets/Services/2.jpg";
import img3 from "../../assets/Services/3.jpg";
import img4 from "../../assets/Services/4.jpg";

const Services = () => {
  return (
    <div className="services" id="services">

    <div className="services__heading">
      <h1>Our Services</h1>
    </div>
    <div className="services__data">
      <Service
        img={img1}
        heading="Tailoring Your Approach To Your Ideal Customer"
        para="Creating a strong, compelling offer is gonna be the foundation for your outbound marketing. Having a dynamite offer that echoes with your ideal customer is key. We know how to help you restructure your offer in a way that resonates with your brand and prospects."
      />
      <Service2
        img={img2}
        heading="Building Your Ideal Customer Profile"
        para="We help you build your ideal customer profile. We help you identify the right people to target, and the right people to avoid. We help you identify the right people to target, and the right people to avoid."
      />
      <Service
        img={img3}
        heading="Client Acquisition Infrastructure"
        para="We at Leadsify will set up a complete client acquisition infrastructure for you across multiple channels. Which will predictably generate (10-35) qualified meetings on auto-pilot every month. We leverage API keys and GPT prompts and all kinds of crazy cool tech stuff to get those 10-35 meetings/mo. 

        This is precisely how we have generated 2000+ meetings for our partners."
      />
      <Service2
        img={img4}
        heading="Mastering Sales Velocity"
        para="As meetings begin to flow in, we'll help you refine your sales process, crafting detailed nurturing sequences to vet leads. We'll also automate your CRM for smooth, hassle-free operations, all designed to boost your sales velocity and expedite deal closures."
      />
    </div>
    </div>
  );
};

export default Services;
