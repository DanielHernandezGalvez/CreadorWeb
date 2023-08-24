import Image from "next/image";
import React from "react";
import "./carrousel.css";

const Carrousel: React.FC = () => {
  return (
    <div>
      <div className="slider max-w-7xl mx-auto">
        <div className="slide-track">
          <div className="slide flex items-center">
            <Image
              src="https://cdn.pixabay.com/photo/2015/12/11/11/43/google-1088004_640.png"
              height={100}
              width={100}
              alt=""
            />
          </div>
          <div className="slide flex items-center">
            <Image
              src="https://cdn.pixabay.com/photo/2016/08/09/17/52/instagram-1581266_1280.jpg"
              height={100}
              width={100}
              alt=""
            />
          </div>
          <div className="slide flex items-center">
            <Image
              src="https://cdn.pixabay.com/photo/2016/04/13/14/27/google-chrome-1326908_640.png"
              height={100}
              width={100}
              alt=""
            />
          </div>
          <div className="slide flex items-center">
            <Image
              src="https://cdn.pixabay.com/photo/2016/11/19/03/08/youtube-1837872_640.png"
              height={100}
              width={100}
              alt=""
            />
          </div>
          <div className="slide flex items-center">
            <Image
              src="https://cdn.pixabay.com/photo/2017/01/28/13/23/color-circle-articles-2015356_640.png"
              height={100}
              width={100}
              alt=""
            />
          </div>
          <div className="slide flex items-center">
            <Image
              src="https://cdn.pixabay.com/photo/2020/09/16/18/39/icon-5577198_640.png"
              height={100}
              width={100}
              alt=""
            />
          </div>
          <div className="slide flex items-center">
            <Image
              src="https://cdn.pixabay.com/photo/2015/04/23/17/41/node-js-736399_1280.png"
              height={100}
              width={100}
              alt=""
            />
          </div>
          <div className="slide flex items-center">
            <Image
              src="https://cdn.pixabay.com/photo/2016/12/26/18/33/logo-1932539_640.png"
              height={100}
              width={100}
              alt=""
            />
          </div>
          <div className="slide flex items-center">
            <Image
              src="https://cdn.pixabay.com/photo/2015/02/02/23/58/sign-621746_640.png"
              height={100}
              width={100}
              alt=""
            />
          </div>
          <div className="slide flex items-center">
            <Image
              src="https://cdn.pixabay.com/photo/2017/01/13/01/22/rocket-1976107_640.png"
              height={100}
              width={100}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carrousel;
