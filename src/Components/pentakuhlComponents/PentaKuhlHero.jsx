"use client";

import { useEffect, useRef, useState } from "react";

function PentaKuhlHero() {
    const heroRef = useRef(null);
    const videoRef = useRef(null);
    const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

    useEffect(() => {
        const hero = heroRef.current;

        if (!hero) {
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShouldLoadVideo(true);
                    observer.disconnect();
                }
            },
            { rootMargin: "240px 0px" }
        );

        observer.observe(hero);

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const video = videoRef.current;

        if (!video || !shouldLoadVideo) {
            return;
        }

        video.load();
        video.play().catch(() => {});
    }, [shouldLoadVideo]);

    return (
        <section
            ref={heroRef}
            className="relative min-h-[calc(100vh-4rem)] overflow-hidden bg-[#111827] text-white"
        >
            <video
                ref={videoRef}
                className="absolute inset-0 h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="none"
                aria-hidden="true"
            >
                {shouldLoadVideo && <source src="/pentakuhlbg.mp4" type="video/mp4" />}
            </video>

            <div className="absolute inset-0 bg-black/52" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/20 to-black/35" />

            <div className="relative z-10 mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl flex-col items-center justify-center px-5 py-20 text-center sm:px-8 lg:px-12">
                <h1 className="max-w-5xl text-[36px] font-normal leading-[1.25] tracking-normal text-white sm:text-6xl lg:text-[54px]">
                    Ensuring Safe Transport for Temperature-
                    <span className="block pt-5">Sensitive Products</span>
                </h1>

                <div className="mt-16 w-full max-w-[1180px]">
                    <div className="h-px w-full bg-white/80" />

                    <div className="grid gap-8 pt-8 text-left md:grid-cols-[1fr_auto] md:items-start">
                        <p className="max-w-2xl text-xl font-light leading-relaxed text-white sm:text-2xl">
                            Explore our frequently asked questions to gain clarity about Penta
                            Kuhl&apos;s services and features
                        </p>

                        <button
                            type="button"
                            className="inline-flex w-fit items-center gap-3 rounded bg-[#f2652d] px-8 py-5 text-base font-bold text-white transition-colors duration-200 hover:bg-[#d9541f] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                        >
                            Explore
                            <svg
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                                className="h-5 w-5"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.4"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="m6 9 6 6 6-6" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PentaKuhlHero;
