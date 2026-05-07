import React from 'react'
import Link from "next/link";

function Banner({ height, imageUrl, overlayOpacity, heading, description, buttonHref, buttonLabel }) {
    return (
        <div
            className={`relative w-full ${height} bg-cover bg-center`}
            style={{
                backgroundImage: `url("${imageUrl}")`,
                backgroundAttachment: "fixed",   // parallax effect
            }}
        >
            {/* Dark overlay */}
            <div
                className="absolute inset-0 flex items-center justify-center"
                style={{ backgroundColor: `rgba(0,0,0,${overlayOpacity})` }}
            >
                <div className="px-6 sm:px-10 text-center text-white max-w-2xl mx-auto">

                    {/* Heading */}
                    <h2 className="mb-4 text-3xl font-bold md:text-4xl leading-tight">
                        {heading}
                    </h2>

                    {/* Description */}
                    <p className="mb-8 text-base md:text-xl text-white/85 leading-relaxed">
                        {description}
                    </p>

                    {/* Button */}
                    <Link
                        href={buttonHref}
                        className="inline-block bg-[#E8571A] hover:bg-[#cf4a12] text-white text-sm font-bold
                       px-8 py-3.5 rounded-lg transition-colors duration-200
                       shadow-[0_8px_24px_rgba(232,87,26,0.35)] hover:shadow-[0_12px_32px_rgba(232,87,26,0.45)]"
                    >
                        {buttonLabel}
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default Banner