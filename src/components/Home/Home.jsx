import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import video3 from "../../assets/video3.mp4";

export default function Home() {
  const textShadowStyle = {
    textShadow: '2px 2px 4px rgba(255, 0, 0, 0.7)', // Red shadow
  };

  return (
    <div className="mx-auto w-full max-w-7xl bg-white dark:bg-gray-700">
      <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16 dark:text-white">
        <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
          <div className="flex flex-col-reverse sm:flex-row items-center justify-between">
            {/* Image */}
            <div className="flex-shrink-0">
              <img
                className="w-full max-w-md mx-auto sm:mx-0"
                src={img2}
                alt="image1"
              />
            </div>
            
            {/* Text */}
            <div className="text-center sm:text-right sm:ml-16 mt-8 sm:mt-0">
              <h2
                className="text-4xl font-bold sm:text-5xl shadow-red-800"
                style={textShadowStyle}
              >
                Explore the Latest Trends
                <span className="block text-4xl text-gray-500">
                  In Technology and Lifestyle
                </span>
              </h2>

              <Link
                className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75 mt-4 my-3"
                to="https://www.instagram.com/djdey.rox?igsh=YjN4YjByYXl1bjB4"
              >
                <svg
                  fill="white"
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.2c-5.42 0-9.8 4.38-9.8 9.8 0 5.42 4.38 9.8 9.8 9.8 5.42 0 9.8-4.38 9.8-9.8 0-5.42-4.38-9.8-9.8-9.8zm0 17.8c-4.4 0-7.8-3.4-7.8-7.8 0-4.4 3.4-7.8 7.8-7.8 4.4 0 7.8 3.4 7.8 7.8 0 4.4-3.4 7.8-7.8 7.8zm3.3-9.8c0 1.8-1.5 3.3-3.3 3.3s-3.3-1.5-3.3-3.3 1.5-3.3 3.3-3.3 3.3 1.5 3.3 3.3zm-1.7 0c0-.9-.7-1.7-1.7-1.7-.9 0-1.7.7-1.7 1.7 0 .9.7 1.7 1.7 1.7.9 0 1.7-.7 1.7-1.7zm2.8-5.3c-.1.4-.4.8-.8.8H8.8c-.4 0-.7-.4-.7-.8v-1.6c0-.4.3-.8.7-.8h2.4c.4 0 .8.4.8.8v1.6z" />
                </svg>
                &nbsp; Follow now
              </Link>
            </div>
          </div>
        </div>
      </aside>

      
      <h1
        className="text-center text-2xl sm:text-5xl py-10 font-medium dark:text-white text-wrap mx-12"
        style={textShadowStyle}
      >
        Stay Ahead with Expert Insights, Reviews, and Tutorials
      </h1>

      <div className="grid place-items-center sm:mt-20 mt-20 mx-auto px-2 rounded-lg my-6">
        <video
          className="w-96 md:w-[450px]"
          src={video3}
          height="240"
          controls
          type="video/mp4"
          autoPlay
          loop
          muted
        ></video>
      </div>
    </div>
  );
}
