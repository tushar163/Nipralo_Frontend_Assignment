"use client";

import { useState } from 'react'
import React from 'react'

const seriesData = [
    {
        key: "series4",
        label: "SERIES 4",
        tempRange: "2°C - 8°C",
        usage:
            "Typically used for products that require refrigeration.",
        idealFor:
            "Ideal for vaccines, insulin, biologics, and other temperature-sensitive pharmaceuticals.",
    },
    {
        key: "series22",
        label: "SERIES 22",
        tempRange: "15°C - 25°C",
        usage:
            "Designed for ambient temperature-sensitive products that must avoid both extreme cold and heat.",
        idealFor:
            "Ideal for certain oral medications, diagnostic kits, and room-temperature biologics.",
    },
    {
        key: "series20m",
        label: "SERIES 20M",
        tempRange: "-20°C to -15°C",
        usage:
            "Built for frozen pharmaceutical products requiring deep-freeze maintenance throughout transit.",
        idealFor:
            "Ideal for plasma, certain vaccines, and frozen biological samples.",
    },
    {
        key: "series50m",
        label: "SERIES 50M",
        tempRange: "-80°C to -60°C",
        usage:
            "Ultra-cold packaging for the most sensitive biologics and cell therapies requiring cryogenic temperatures.",
        idealFor:
            "Ideal for mRNA vaccines, CAR-T cell therapies, and critical research specimens.",
    },
];
function GuideSection() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animKey, setAnimKey] = useState(0); // forces re-mount of content for animation replay

    const handleTabHover = (index) => {
        if (index !== activeIndex) {
            setActiveIndex(index);
            setAnimKey((k) => k + 1);
        }
    };

    const active = seriesData[activeIndex];
    return (
        <section className="w-full bg-white py-20 sm:py-28 px-6 sm:px-10 lg:px-16">
            <div className="max-w-screen-xl mx-auto">

                {/* ── Heading ── */}
                <div className="text-center mb-14 sm:mb-16">
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight mb-5">
                        <span className="text-gray-900">Series </span>
                        <span className="text-gray-400">Guide</span>
                    </h2>
                    <p className="text-sm sm:text-base text-gray-500 leading-relaxed max-w-2xl mx-auto">
                        This guide outlines temperature-controlled packaging solutions designed for
                        the safe transport and storage of sensitive products, like vaccines and biologics,
                        across various thermal conditions, from refrigerated to deep-freeze.
                    </p>
                </div>

                {/* ── Tabs ── */}
                <div className="border border-gray-200 shadow-md grid grid-cols-2 sm:grid-cols-4">
                    {seriesData.map((series, index) => {
                        const isActive = activeIndex === index;
                        return (
                            <button
                                key={series.key}
                                onMouseEnter={() => handleTabHover(index)}
                                onClick={() => handleTabHover(index)}
                                className={`
                  relative px-4 py-4 sm:py-5 text-xs sm:text-sm font-semibold tracking-widest uppercase
                  transition-colors duration-200 focus:outline-none
                  ${index > 0 ? "border-l border-gray-200" : ""}
                  ${isActive ? "text-[#E8571A]" : "text-gray-400 hover:text-gray-700"}
                `}
                            >
                                {series.label}

                               
                            </button>
                        );
                    })}
                </div>

                {/* ── Content Panel ── */}
                <div className="border border-t-0 mt-4 shadow-md border-gray-200 overflow-hidden">
                    {/* Overflow hidden clips the bottom-to-top reveal */}
                    <div
                        key={animKey}
                        className="px-6 sm:px-10 py-8 sm:py-10 content-reveal"
                    >
                        <div className="" style={{ animationDelay: "0ms" }}>
                            <p className="text-sm sm:text-[15px] text-gray-700 leading-relaxed">
                                <strong className="text-gray-900 font-semibold">Temperature Range:</strong>{" "}
                                {active.tempRange}
                            </p>
                        </div>
                        <div className="content-line mt-3" style={{ animationDelay: "60ms" }}>
                            <p className="text-sm sm:text-[15px] text-gray-700 leading-relaxed">
                                <strong className="text-gray-900 font-semibold">Usage &amp; Applications:</strong>{" "}
                                {active.usage}
                            </p>
                        </div>
                        <div className="content-line mt-3" style={{ animationDelay: "120ms" }}>
                            <p className="text-sm sm:text-[15px] text-gray-700 leading-relaxed">
                                <strong className="text-gray-900 font-semibold">Ideal For:</strong>{" "}
                                {active.idealFor}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GuideSection