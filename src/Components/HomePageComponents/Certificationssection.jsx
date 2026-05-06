"use client";

import Image from "next/image";

const certifications = [
    { name: "MTO", logo: "/certifications/mto.png" },
    { name: "Pharma Aero", logo: "/certifications/pharma-aero.png" },
    { name: "Indo-Italian Chamber", logo: "/certifications/indo-italian-chamber.png" },
    { name: "WCA Inter Global", logo: "/certifications/wca-inter-global.png" },
    { name: "GDP Certified", logo: "/certifications/gdp.png" },
    { name: "IATA", logo: "/certifications/iata.png" },
    { name: "ISO 9001", logo: "/certifications/iso-9001.png" },
];

function CertCard({ name, logo }) {
    return (
        <div className="flex-shrink-0 w-[200px] h-[140px] sm:w-[220px] sm:h-[150px] bg-white rounded-2xl shadow-sm flex items-center justify-center px-6 mx-3">
            {/* Replace the div below with <Image> when real logos are available */}
            <div className="relative w-full h-full flex items-center justify-center">
                <Image
                    src={logo}
                    alt={name}
                    width={160}
                    height={80}
                    className="object-contain max-h-[80px]"
                />
            </div>
        </div>
    );
}

export default function CertificationsSection() {
    // Duplicate array for seamless infinite loop
    const doubled = [...certifications, ...certifications];

    return (
        <section
            className="w-full py-14 sm:py-20 overflow-hidden bg-[url('/lineas-CSz1CbRe.png')] bg-no-repeat bg-cover bg-[#3D5166]"

        >
            <div className="relative z-10">
                {/* Heading */}
                <div className="text-center mb-10 sm:mb-14 px-6">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#E8571A] mb-3">
                        Certifications
                    </h2>
                    <p className="text-sm sm:text-base text-white/70 max-w-lg mx-auto leading-relaxed">
                        Certified excellence, ensuring compliance, quality, and global logistics reliability.
                    </p>
                </div>

                {/* Marquee track */}
                <div className="relative w-[66.66%] mx-auto overflow-hidden">

                    {/* Scrolling row */}
                    <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
                        {doubled.map((cert, i) => (
                            <CertCard key={`${cert.name}-${i}`} {...cert} />
                        ))}
                    </div>
                </div>
            </div>

            {/* Inline keyframe style */}
            <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 28s linear infinite;
        }
      `}</style>
        </section>
    );
}