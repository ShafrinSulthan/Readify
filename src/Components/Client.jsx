import React from "react";
import "./css/Client.css";

import profile1 from "../assets/profile1.jpg";
import profile2 from "../assets/profile2.jpg";

const Client = () => {
  return (
    <div className="container my-3">
        <section>
        <div className="feedback">
            <h5 className="main-heading">WHAT OUR CLIENT SAY</h5>
            <h1 className="heading">Resent Feedback</h1>
            <div className="feedback-list">
                <div className="feedback-details">
                <div className="profile">
                    <img src={profile1} alt=""/>
                    <div className="profile-details">
                    <h5>Ellis Austin</h5>
                    <p className="para">Founder of Apple</p>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    </div>
                </div>
                <p className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores voluptate debitis eos inventore ad aliquid illo expedita quia odio deserunt accusantium, maiores voluptatum ipsam tempora quidem hic, recusandae natus quasi?</p>
                </div>
                <div className="feedback-details">
                <div className="profile">
                    <img src={profile2} alt=""/>
                    <div className="profile-details">
                    <h5>Rose Hopkins</h5>
                    <p className="para">Founder of Apple</p>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    </div>
                </div>
                <p className="para para1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores voluptate debitis eos inventore ad aliquid illo expedita quia odio deserunt accusantium, maiores voluptatum ipsam tempora quidem hic, recusandae natus quasi?</p>
                </div>
                
            </div>

        </div>
    </section>
    </div>
  );
};

export default Client;