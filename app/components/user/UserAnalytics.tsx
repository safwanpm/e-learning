
import React from "react";
import Image from 'next/image';

const UserAnalytics = () => {
    return (
        <div className=" font- mt-28 md:mt-20 md:ms-72 my-2 md:my-10 py-6 md:py-20 px-2 mx-4 bg-teritory dark:bg-gray-800 text-black dark:text-white  rounded-lg  max-w-5xl  flex flex-col md:flex-row items-center md:justify-between relative space-y-6 md:space-y-0 ">

            <div className="flex  flex-wrap items-center md:items-center justify-center md:basis-2/4 space-x-4">

                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-primary dark:border-secondary overflow-hidden">

                    <Image
                        src='/assets/image/avatar.jpg'
                        alt="Anna Williams"
                        width={300}                    
                        height={300}                   
                        priority={true}              
                    />
                    <div className="absolute inset-0 rounded-full border-2 border-gray-900"></div>
                </div>


                <div className="text-center md:text-left mt-8 md:mt-0">
                    <h2 className="text-base sm:text-lg font-bold flex items-center justify-center md:justify-start">
                        Anna Williams

                    </h2>
                    <p className="text-xs sm:text-sm text-gray-400">Computer Science Class</p>
                </div>
            </div>


            <div className="flex flex-wrap items-center justify-center md:justify-center md:basis-2/4 space-x-1 md:space-x-8">

                <div className="text-center">
                    <h3 className="text-xl sm:text-3xl md:text-4xl font-extrabold">45</h3>
                    <p className="text-gray-400 text-xs sm:text-sm mt-1">Total Sessions <br />Completed</p>
                </div>


                <div className="text-center">
                    <h3 className="text-xl sm:text-3xl md:text-4xl font-extrabold">82.3%</h3>
                    <p className="text-gray-400 text-xs sm:text-sm mt-1">Average Scores<br /> Across Assessments</p>
                </div>


                <div className="text-center">
                    <div className="flex flex-col items-center">
                        <div className="text-green-500 text-xl sm:text-3xl md:text-4xl font-extrabold">
                            +15%
                        </div>
                        <p className="text-gray-400 text-xs sm:text-sm mt-1">Weekly Progress<br /> Trend</p>
                    </div>
                </div>
            </div>

        </div>




    )
}

export default UserAnalytics