import React from "react";
import "./testimonial.css";

const Testimonials: React.FC = () => {
  return (
    <>
      <div className="testimonial">
        <div className="card">
          <div className="layer"></div>
          <div className="content">
            <p className="text-gray-700">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
            <div className="image">
              <img
                src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/oscar_boy-128.png"
                alt="avatar"
              />
            </div>
            <div className="details">
              <h2 className="text-gray-700">Someone Famous</h2> <br />{" "}
              <span>Web Designer</span>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="layer"></div>
          <div className="content">
            <p className="text-gray-700">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
            <div className="image">
              <img
                src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/oscar_boy-128.png"
                alt="avatar"
              />
            </div>
            <div className="details">
              <h2 className="text-gray-700">Someone Famous</h2> <br />{" "}
              <span>Graphic Designer</span>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="layer"></div>
          <div className="content">
            <p className="text-gray-700">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
            <div className="image">
              <img
                src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/oscar_boy-128.png"
                alt="avatar"
              />
            </div>
            <div className="details">
              <h2 className="text-gray-700">Someone Famous</h2>{" "}
              <span>Product Designer</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
