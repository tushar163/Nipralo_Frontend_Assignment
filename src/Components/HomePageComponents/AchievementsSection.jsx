import React from 'react'


function AchievementsSection() {
    const stats = [
        { value: "7+", label: "Strategic Domestic Offices" },
        { value: "USA", label: "Global presence" },
        { value: "200+", label: "Logistics Experts" },
        { value: "50+", label: "Awards & Accolades" },
    ];
    return (
        <section
            className="relative w-full overflow-hidden bg-[url('/lineas-CSz1CbRe.png')] bg-no-repeat bg-cover bg-center"
            style={{ backgroundColor: "#3D5166" }}
        >
            

            {/* ── Content ── */}
            <div className="relative z-10 max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16 py-14 sm:py-16 lg:py-20">
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-0">

                    {/* Left — Title + Description */}
                    <div className="lg:w-[38%] flex flex-col justify-center lg:pr-16">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#E8571A] mb-4 leading-tight">
                            Our Achievements
                        </h2>
                        <p className="text-sm sm:text-base text-white/70 leading-relaxed max-w-xs">
                            Over 31+ years of excellence, trusted globally, delivering reliable
                            logistics solutions with precision.
                        </p>
                    </div>

                    {/* Right — Stats grid */}
                    <div className="lg:w-[62%] grid grid-cols-2 gap-x-8 gap-y-10 sm:gap-x-16 sm:gap-y-12">
                        {stats.map(({ value, label }) => (
                            <div key={label} className="flex flex-col gap-2">
                                <span className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-none tracking-tight">
                                    {value}
                                </span>
                                <span className="text-sm sm:text-base text-white/70 font-medium">
                                    {label}
                                </span>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    )
}

export default AchievementsSection