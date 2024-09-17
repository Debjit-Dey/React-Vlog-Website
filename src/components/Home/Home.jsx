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
        <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
            <h2 className="text-4xl font-bold sm:text-5xl shadow-red-800" style={textShadowStyle}>
              Explore the Latest Trends
              <span className="block text-4xl text-gray-500">
                In Technology and Lifestyle
              </span>
            </h2>

            <Link
              className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
              to="https://www.instagram.com/djdey.rox?igsh=YjN4YjByYXl1bjB4"
            >
              <svg
                fill="white"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
              >
                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
              </svg>
              &nbsp; Follow now
            </Link>
          </div>
        </div>

        <div className="absolute inset-0 w-full sm:my-20 sm:mx-auto sm:pt-1 pt-12 h-full ">
          <img className="w-80 mx-auto md:mx-16" src={img2} alt="image1" />
        </div>
      </aside>

      <div className="grid  place-items-center sm:mt-20 mt-20 mx-auto px-2 rounded-lg">
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
        {/* <img className="sm:w-96 w-48" src="https://i.ibb.co/2M7rtLk/Remote1.png" alt="image2" /> */}
      </div>

      <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium dark:text-white" style={textShadowStyle}>
    Stay Ahead with Expert Insights, Reviews, and Tutorials
</h1>
    </div>
  );
}
