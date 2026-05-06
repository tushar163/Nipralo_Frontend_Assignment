"use client";

import { useRef } from "react";
import { useIndustriesAnimation } from "../../hooks/useIndustriesAnimation";
import IndustryCard from "./IndustryCard";

function AnimatedCards({ industries, sectionRef }) {
    const gridRef = useRef(null);
    const cardRefs = useRef([]);
    
    useIndustriesAnimation({ sectionRef, gridRef, cardRefs });

    return (
        <div
            ref={gridRef}
            className="relative mx-auto grid w-full max-w-6xl grid-cols-1 justify-items-center gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12"
        >
            {industries.map((industry, index) => (
                <IndustryCard
                    key={industry.title}
                    title={industry.title}
                    description={industry.description}
                    icon={industry.icon}
                    cardRef={(node) => {
                        cardRefs.current[index] = node;
                    }}
                />
            ))}
        </div>
    );
}

export default AnimatedCards;
