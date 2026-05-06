import React from 'react';

function ReadMoreSection() {
    return (
        <section className="px-7 lg:px-0 py-10 md:py-20 bg-[#425462] bg-[url('/lineas-CSz1CbRe.png')] bg-no-repeat bg-cover">
            <div className="max-w-[1200px] mx-auto flex flex-col items-center justify-around">

                <div className="flex items-center justify-center px-8 pt-5 mb-4 bg-white rounded-xl">
                    <img
                        src="/peli_logo_vertical_full_color-BSk9BalL.png"
                        alt="Pelican BioThermal Logo"
                        className="h-32 mb-4 rounded-lg"
                    />
                </div>

                <div className="text-start">
                    <h2 className="text-[24px] md:text-[32px] text-center text-white">
                        Authorized Distributors for Pelican BioThermal
                        <sup>™</sup> Products
                    </h2>

                </div>
                <button className="px-6 py-3 mt-4 bg-[#E8571A] text-white rounded hover:bg-[#f06c30] transition-colors duration-300">
                    Read More
                </button>

            </div>
        </section>
    );
}

export default ReadMoreSection;