"use client";

import Image from "next/image";
import { useRef, useState, useCallback, useEffect } from "react";

const awards = [
    {
        id: 1,
        company: "Emirates SkyCargo",
        logo: "/awards/emirates-skycargo.png",
        achievements: ["Top Cargo Agents, 2016/17", "Top Cargo Agents, 2005/06"],
    },
    {
        id: 2,
        company: "Delta Air Lines",
        logo: "/awards/delta-airlines.png",
        achievements: ["Top Revenue Performance, 2002"],
    },
    {
        id: 3,
        company: "Maskargo",
        logo: "/awards/maskargo.png",
        achievements: ["Mega Tonners, 2006/07"],
    },
    {
        id: 4,
        company: "CONCOR",
        logo: "/awards/concor.png",
        achievements: ["CONCOR Exim Star, 2003/04"],
    },
    {
        id: 5,
        company: "Air France",
        logo: "/awards/airfrance.png",
        achievements: ["Meritorious Performance, 1999/2000"],
    },
    {
        id: 6,
        company: "Finnair Cargo",
        logo: "/awards/finnair-cargo.png",
        achievements: ["Top Performance, 2008", "Top Performance, 2007"],
    },
    {
        id: 7,
        company: "IAG Cargo",
        logo: "/awards/iag-cargo.png",
        achievements: ["Significant Support and Contribution, 2007"],
    },
    {
        id: 8,
        company: "STAT Trade Times",
        logo: "/awards/stat-trade-times.png",
        achievements: [
            "International Award for Excellence in Air Cargo, Region India - Winner, 2018",
        ],
    },
    {
        id: 9,
        company: "Turkish Airlines",
        logo: "/awards/turkish-airlines.png",
        achievements: ["Best Agent Award, 2019"],
    },
    {
        id: 10,
        company: "Lufthansa Cargo",
        logo: "/awards/lufthansa-cargo.png",
        achievements: ["Premium Partner Award, 2021"],
    },
    {
        id: 11,
        company: "Qatar Airways Cargo",
        logo: "/awards/qatar-airways-cargo.png",
        achievements: ["Top Agent, 2020"],
    },
    {
        id: 12,
        company: "Singapore Airlines",
        logo: "/awards/singapore-airlines.png",
        achievements: ["Best Performance Award, 2018"],
    },
];

export default function AwardsSection() {
    const cardRefs = useRef([]);
    const gridRef = useRef(null);
    const blobRef = useRef(null);

    // Track current blob center (in grid-relative coords)
    const blobPos = useRef({ x: 0, y: 0 });
    const targetPos = useRef({ x: 0, y: 0 });
    const rafRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(null);
    const [blobVisible, setBlobVisible] = useState(false);

    // Smooth blob movement via rAF lerp
    useEffect(() => {
        const lerp = (a, b, t) => a + (b - a) * t;

        const tick = () => {
            blobPos.current.x = lerp(blobPos.current.x, targetPos.current.x, 0.12);
            blobPos.current.y = lerp(blobPos.current.y, targetPos.current.y, 0.12);

            if (blobRef.current) {
                blobRef.current.style.left = `${blobPos.current.x - 150}px`;
                blobRef.current.style.top = `${blobPos.current.y - 110}px`;
            }

            rafRef.current = requestAnimationFrame(tick);
        };

        rafRef.current = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(rafRef.current);
    }, []);

    const moveBlobToCard = useCallback((index) => {
        if (!gridRef.current || !cardRefs.current[index]) return;
        const gridRect = gridRef.current.getBoundingClientRect();
        const cardRect = cardRefs.current[index].getBoundingClientRect();
        targetPos.current = {
            x: cardRect.left - gridRect.left + cardRect.width / 2,
            y: cardRect.top - gridRect.top + cardRect.height / 2,
        };
    }, []);

    // On very first hover, snap blob to card with no lerp lag
    const firstHover = useRef(true);

    const handleMouseEnter = useCallback((index) => {
        setActiveIndex(index);
        setBlobVisible(true);

        if (!gridRef.current || !cardRefs.current[index]) return;
        const gridRect = gridRef.current.getBoundingClientRect();
        const cardRect = cardRefs.current[index].getBoundingClientRect();
        const cx = cardRect.left - gridRect.left + cardRect.width / 2;
        const cy = cardRect.top - gridRect.top + cardRect.height / 2;

        if (firstHover.current) {
            // Snap instantly on first entry — no travel from (0,0)
            blobPos.current = { x: cx, y: cy };
            firstHover.current = false;
        }

        targetPos.current = { x: cx, y: cy };
    }, []);

    const handleMouseLeave = useCallback(() => {
        setActiveIndex(null);
        setBlobVisible(false);
        firstHover.current = true;
    }, []);

    return (
        <section className="bg-white py-16 sm:py-20 lg:py-24 px-6 sm:px-10 lg:px-16">
            <div className="max-w-screen-xl mx-auto">

                {/* ── Header ── */}
                <div className="mb-12 sm:mb-16">
                    <div className="flex items-center gap-3 mb-5">
                        <span className="w-2 h-2 rounded-full bg-gray-800 inline-block" />
                        <span className="border border-gray-300 text-gray-700 text-sm font-medium px-5 py-1.5 rounded-full">
                            Awards
                        </span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal leading-snug text-gray-900">
                        Proudly Recognized with Prestigious
                    </h2>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal leading-snug text-gray-400">
                        Awards and Accolades.
                    </h2>
                </div>

                {/* ── Grid ── */}
                <div
                    ref={gridRef}
                    className="relative"
                    onMouseLeave={handleMouseLeave}
                >
                    {/* Travelling glow blob — lerps between cards */}
                    <div
                        ref={blobRef}
                        className="pointer-events-none absolute z-0 rounded-full"
                        style={{
                            width: 300,
                            height: 220,
                            background:
                                "radial-gradient(ellipse at center, rgba(232,87,26,0.20) 0%, rgba(232,87,26,0.07) 55%, transparent 80%)",
                            filter: "blur(4px)",
                            opacity: blobVisible ? 1 : 0,
                            transition: "opacity 0.35s ease",
                        }}
                    />

                    {/* Cards */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 relative z-10">
                        {awards.map((award, index) => {
                            const isActive = activeIndex === index;
                            return (
                                <div
                                    key={award.id}
                                    ref={(el) => (cardRefs.current[index] = el)}
                                    onMouseEnter={() => handleMouseEnter(index)}
                                    className="relative bg-white rounded-2xl border flex flex-col gap-5 p-6 sm:p-8 cursor-default select-none"
                                    style={{
                                        borderColor: isActive
                                            ? "rgba(232,87,26,0.30)"
                                            : "rgba(0,0,0,0.07)",
                                        boxShadow: isActive
                                            ? "0 0 0 1px rgba(232,87,26,0.18), 0 10px 36px rgba(232,87,26,0.10), 0 2px 8px rgba(0,0,0,0.05)"
                                            : "0 1px 4px rgba(0,0,0,0.04)",
                                        transform: isActive ? "translateY(-3px)" : "translateY(0px)",
                                        transition:
                                            "box-shadow 0.35s ease, transform 0.35s ease, border-color 0.35s ease",
                                    }}
                                >
                                    {/* Logo */}
                                    <div className="h-[90px] flex items-center justify-center">
                                        <Image
                                            src={award.logo}
                                            alt={award.company}
                                            width={150}
                                            height={70}
                                            className="object-contain max-h-[70px] max-w-[150px]"
                                        />
                                    </div>

                                    {/* Divider */}
                                    <div
                                        className="h-px w-full"
                                        style={{
                                            backgroundColor: isActive
                                                ? "rgba(232,87,26,0.18)"
                                                : "#f0f0f0",
                                            transition: "background-color 0.35s ease",
                                        }}
                                    />

                                    {/* Achievements */}
                                    <div className="flex flex-col gap-1.5">
                                        {award.achievements.map((a, i) => (
                                            <p
                                                key={i}
                                                className="text-xs sm:text-[13px] leading-snug"
                                                style={{
                                                    color: isActive ? "#555" : "#9ca3af",
                                                    transition: "color 0.3s ease",
                                                }}
                                            >
                                                {a}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}