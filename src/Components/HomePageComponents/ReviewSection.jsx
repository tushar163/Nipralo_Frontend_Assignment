"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const reviews = [
    {
        company: "Lufthansa Cargo",
        companyTagline: "Networking the world.",
        logo: "/Award11.png",
        quote:
            '"Penta Freight India was founded 25 years ago and has been a highly valued and reliable partner of Lufthansa Cargo since then. We know that they always stand by their commitment, which makes a meaningful difference to our business. Their continuous high focus on customer service and their strive towards individual solutions are key to staying dynamic and competitive in the market. Penta Freight is a pioneer in various ways: They were amongst the first forwarders to become our Premium Partner and so far they are the only one in India.... "',
        name: "Frank Naeve",
        role: "Vice President Asia Pacific",
        accentColor: "#E8A020",
    },
    {
        company: "Sun Pharma",
        companyTagline: "",
        logo: "/SunPharm.png",
        quote:
            '"We highly regard Penta Freight\'s professionalism and knowledge in the freight field. Their team takes the work load and worry off our shoulders. For about two decades we have been satisfied by the flexible, reliable and trustworthy service and excellent quality of work. One key feature that Penta Freight portrays is that they understand our needs and put their best efforts in making thing possible. They have continued to innovate and change with the freight industry.... "',
        name: "Makarand Sane",
        role: "General Manager Head - Export Logistics",
        accentColor: "#E8A020",
    },
    {
        company: "Watson Pharmaceuticals",
        companyTagline: "",
        logo: "/Watson.png",
        quote:
            '"Penta Freight has been one of our export LSP’s for several years and our experience with them has been consistently good. Besides having strong relationships with airlines to obtain competitive rates, Penta Freight has the ability to get things done in a compliant manner. In addition, an excellent service level and professional relationship was maintained throughout the course of export operations. Best wishes for all success. "',
        name: "Operations Team",
        role: "Watson Pharmaceuticals",
        accentColor: "#E8A020",
    },
    {
        company: "Lufthansa Cargo",
        companyTagline: "Networking the world.",
        logo: "/Award11.png",
        quote:
            '"Penta Freight India was founded 25 years ago and has been a highly valued and reliable partner of Lufthansa Cargo since then. We know that they always stand by their commitment, which makes a meaningful difference to our business. Their continuous high focus on customer service and their strive towards individual solutions are key to staying dynamic and competitive in the market. Penta Freight is a pioneer in various ways: They were amongst the first forwarders to become our Premium Partner and so far they are the only one in India.... "',
        name: "Regional Manager",
        role: "Lufthansa Cargo India",
        accentColor: "#E8A020",
    },
];

function CompanyLogo({ company, accentColor, logo }) {
    return (
        <div className="flex items-center w-[50%] h-12 mx-auto gap-3 mb-6">

            <Image
                src={logo}
                alt={company}
                width={1000}
                height={1000}
                className="object-contain w-full h-full "
            />

        </div>
    );
}

function ReviewCard({ review, index }) {
    return (
        <div
            className={`review-card max-w-fit lg:w-sm rounded-2xl border border-gray-200  bg-white p-8 sm:p-10 shadow-[0_8px_40px_rgba(0,0,0,0.06)] ${index % 2 === 0 ? "translate-x-[0px]" : "lg:translate-x-[200px]"} `}
        // style={{ opacity: 100, transform: `${index % 2 === 0 ? 'translateX(0px)' : 'translateX(200px)'} ` }}
        >
            <CompanyLogo
                company={review.company}
                accentColor={review.accentColor}
                logo={review.logo}
            />

            <p className="text-base sm:text-[17px] leading-relaxed text-gray-700 text-center mb-8">
                {review.quote}
            </p>

            <div className="border-t border-gray-100 pt-6 text-center">
                <p className="font-semibold text-gray-900 text-base">{review.name}</p>
                <p className="text-sm text-gray-500 mt-0.5">{review.role}</p>
            </div>
        </div>
    );
}

export default function ReviewSection() {
    const wrapperRef = useRef(null);
    const stickyRef = useRef(null);
    const cardsRef = useRef(null);
    const headerRef = useRef(null);
    const cardEls = useRef([]);

    useEffect(() => {
        const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        const ctx = gsap.context(() => {
            // Fade in header
            gsap.fromTo(
                headerRef.current,
                { autoAlpha: 0, y: 30 },
                {
                    autoAlpha: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: wrapperRef.current,
                        start: "top 80%",
                    },
                }
            );

            if (prefersReduced) {
                // Just show all cards without animation
                cardEls.current.forEach((card) => {
                    if (card) gsap.set(card, { autoAlpha: 1, y: 0 });
                });
                return;
            }

            // ── Sticky scroll: pin the outer wrapper while cards scroll up ──
            const totalCards = cardEls.current.length;

            // Each card staggered reveal on scroll
            cardEls.current.forEach((card, i) => {
                if (!card) return;
                gsap.fromTo(
                    card,
                    { autoAlpha: 0, y: 60 },
                    {
                        autoAlpha: 1,
                        y: 0,
                        duration: 0.7,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: card,
                            start: "top 85%",
                            toggleActions: "play none none none",
                        },
                    }
                );
            });
        }, wrapperRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={wrapperRef} className="bg-white py-20 sm:py-24 lg:py-32">
            <div className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16">

                {/* ── Layout: sticky left + scrolling right ── */}
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 lg:items-start">

                    {/* LEFT — sticky */}
                    <div
                        ref={stickyRef}
                        className="lg:w-[38%] lg:sticky lg:top-[30vh] flex-shrink-0"
                    >
                        <div ref={headerRef} style={{ opacity: 0 }}>
                            {/* Pill tag */}
                            <div className="flex items-center gap-3 mb-6">
                                <span className="w-2 h-2 rounded-full bg-gray-800 inline-block" />
                                <span className="border border-gray-300 text-gray-700 text-sm font-medium px-5 py-1.5 rounded-full">
                                    Reviews
                                </span>
                            </div>

                            {/* Heading */}
                            <h2 className="text-4xl sm:text-5xl font-normal leading-snug text-gray-900 mb-6">
                                Hear From Our Satisfied{" "}
                                <span className="block text-gray-400">Clients Worldwide.</span>
                            </h2>

                            {/* Description */}
                            <p className="text-base text-gray-500 leading-relaxed max-w-sm">
                                Explore what industry leaders and long-term partners say about our
                                commitment to excellence and innovation.
                            </p>
                        </div>
                    </div>

                    {/* RIGHT — scrolling cards */}
                    <div
                        ref={cardsRef}
                        className="lg:w-[62%] flex flex-col gap-6"
                    >
                        {reviews.map((review, i) => (
                            <div
                                key={`${review.name}-${i}`}
                                ref={(el) => (cardEls.current[i] = el)}
                            >
                                <ReviewCard review={review} index={i} />
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}