import React from 'react'
import video2 from "../../assets/video2.mp4"

export default function About() {
    return (
        <div className="py-16 bg-white dark:bg-gray-700">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6 dark:text-white">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <video src={video2}
                               controls
                               type="video/mp4"
                               autoPlay
                               loop
                               muted></video>
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl dark:text-white">
                        Discover the World Through Our Travel Vlogs
                        </h2>
                        <p className="mt-6 text-gray-600 dark:text-white">
                        Embark on a journey with us as we explore breathtaking destinations, immerse ourselves in diverse cultures, and uncover hidden gems around the globe. Our travel vlogs are crafted to inspire and provide valuable insights into the world's most captivating places.
                        </p>
                        
                        <p className="mt-4 text-gray-600 dark:text-white">
                        Whether you're seeking travel tips, destination guides, or simply a dose of wanderlust, our vlogs offer a front-row seat to adventures that will spark your curiosity and ignite your passion for travel.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
