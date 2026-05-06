const reasons = [
    {
        title: "Comprehensive Solutions",
        description:
            "Full-spectrum logistics services including air, sea, and multimodal transport for seamless handling of your cargo.",
        icon: (
            <svg viewBox="0 0 64 64" aria-hidden="true" className="h-16 w-16">
                <path d="M32 9a22 22 0 0 1 20 13" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />
                <path d="M53 14v8h-8" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M32 55A22 22 0 0 1 12 42" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />
                <path d="M11 50v-8h8" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="32" cy="32" r="13" fill="none" stroke="currentColor" strokeWidth="2.8" />
                <path d="m25 32 5 5 10-11" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M32 20v4M32 40v4M20 32h4M40 32h4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        title: "Expertise and Experience",
        description:
            "Over 30+ years of experience with skilled customs agents ensuring accurate clearance and secure delivery.",
        icon: (
            <svg viewBox="0 0 64 64" aria-hidden="true" className="h-16 w-16">
                <path d="M20 42 16 57l9-6 7 8 6-17" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
                <path d="m44 42 4 15-9-6-7 8-6-17" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M32 7 38 12l8-1 3 8 7 5-3 8 3 8-7 5-3 8-8-1-6 5-6-5-8 1-3-8-7-5 3-8-3-8 7-5 3-8 8 1Z" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinejoin="round" />
                <rect x="18" y="25" width="28" height="13" rx="2" fill="none" stroke="currentColor" strokeWidth="2.8" />
                <text x="32" y="34.5" textAnchor="middle" className="fill-current text-[9px] font-bold tracking-tight">
                    EXPERT
                </text>
            </svg>
        ),
    },
    {
        title: "State-of-the-Art Facilities",
        description:
            "Advanced transit warehouse with specialized storage and a fleet of reefer and general trucks for efficient nationwide transport.",
        icon: (
            <svg viewBox="0 0 64 64" aria-hidden="true" className="h-16 w-16">
                <path d="M9 23h29v23H9zM38 30h9l8 8v8H38z" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="19" cy="48" r="4" fill="none" stroke="currentColor" strokeWidth="2.8" />
                <circle cx="48" cy="48" r="4" fill="none" stroke="currentColor" strokeWidth="2.8" />
                <path d="M47 30v8h8" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="27" cy="33" r="7" fill="none" stroke="currentColor" strokeWidth="2.6" />
                <path d="M27 22v4M27 40v4M16 33h4M34 33h4M19.5 25.5l3 3M31.5 37.5l3 3M34.5 25.5l-3 3M22.5 37.5l-3 3" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
            </svg>
        ),
    },
];

function WhyChooseSection() {
    return (
        <section className="bg-white px-4 py-14 sm:px-8 lg:px-12">
            <div className="mx-auto grid max-w-screen-xl grid-cols-1 border-gray-200 md:grid-cols-2 lg:grid-cols-4">
                <div className="min-h-[250px] border-gray-200 pb-10 md:pr-10 lg:border-r lg:pb-0">
                    <div className="mb-8 flex items-center gap-4">
                        <span className="h-2 w-2 rounded-full bg-black" />
                        <span className="rounded-full border border-gray-300 px-6 py-2 text-base text-black">
                            Why us
                        </span>
                    </div>

                    <h2 className="text-4xl font-normal leading-tight tracking-normal text-black lg:text-[38px]">
                        Why choose
                        <span className="mt-3 block text-gray-500">Penta Freight.</span>
                    </h2>
                </div>

                {reasons.map((reason) => (
                    <div
                        key={reason.title}
                        className="min-h-[250px] border-t border-gray-200 py-8 text-black md:px-8 lg:border-l-0 lg:border-r lg:border-t-0 lg:px-8 lg:py-0 last:lg:border-r-0"
                    >
                        <div className="mb-5 text-black">{reason.icon}</div>
                        <h3 className="mb-2 text-xl font-normal leading-snug text-black">
                            {reason.title}
                        </h3>
                        <p className="max-w-[270px] text-base leading-relaxed text-gray-500">
                            {reason.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default WhyChooseSection;
