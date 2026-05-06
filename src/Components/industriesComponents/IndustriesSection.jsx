"use client";

import { useRef } from "react";
import { industries } from "../../Data/industries";
import AnimatedCards from "./AnimatedCards";

function IndustriesSection() {
    const sectionRef = useRef(null);

    return (
        <section
            ref={sectionRef}
            className="relative overflow-hidden bg-white px-5 py-20 sm:px-8 lg:px-12"
        >

            <div className="relative mx-auto flex min-h-[calc(100vh-4rem)] max-w-screen-xl flex-col justify-start py-12">
                <header className="mx-auto mb-14 max-w-xl text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.34em] text-gray-400">
                        Industries
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-gray-400">
                        Over the past two decades we have been coming up with innovative
                        global trade access across industries.
                    </p>
                </header>

                <AnimatedCards industries={industries} sectionRef={sectionRef} />
            </div>
        </section>
    );
}

export default IndustriesSection;
