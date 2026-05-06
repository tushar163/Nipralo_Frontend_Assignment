import React from 'react'

function PentakuhlAboutSection() {
    return (
        <div className="relative z-10 h-full flex flex-row gap-20 items-start px-6 sm:px-12 lg:px-20 my-10 sm:my-16 lg:my-20 max-w-screen-xl mx-auto w-full">

            {/* Label block */}
            <div className="flex flex-col justify-center items-center mb-6 sm:mb-8 w-full ">
                <span className="text-xs sm:text-lg font-bold tracking-[0.25em] uppercase text-[#E8571A]">
                    About Us
                </span>

                {/* Divider line */}
                <div className="w-48 h-[2px] bg-[#E8571A] my-2" />

                <span className="text-xs sm:text-lg font-bold tracking-[0.2em] uppercase text-[#E8571A]">
                    Penta Freight
                </span>
            </div>

            {/* Description text */}
            <div className="max-w-xs sm:max-w-sm lg:max-w-full">
                <p className="text-sm sm:text-base lg:text-[18px] text-gray-700 leading-relaxed">
                    Penta Freight provides reliable{" "}
                    <strong className="text-gray-900 font-bold">logistics solutions</strong>,
                    specializing in temperature-sensitive shipments. We ensure safe,{" "}
                    <strong className="text-gray-900 font-bold">on-time delivery</strong>{" "}
                    worldwide. Trust us for seamless supply chain management.
                </p>
            </div>
        </div>
    )
}

export default PentakuhlAboutSection