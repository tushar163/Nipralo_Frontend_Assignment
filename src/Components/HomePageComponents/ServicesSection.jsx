"use client";

import { services } from "@/Data/Homepage";
import Lenis from 'lenis'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

function ServiceCard({
    title,
    description,
    imageAlt,
    image,
    tags,
    link,
    imagePosition,
    index,
    setCardRef,
}) {
    const isLeft = imagePosition === "left";

    return (
        <article
            ref={(node) => setCardRef(node, index)}
            style={{ top: `calc(5rem + ${index * 18}px)`, zIndex: index + 1 }}
            className="service-card w-full overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-[0_22px_70px_rgba(15,23,42,0.08)] will-change-transform md:sticky"
        >
            <div className="flex flex-col md:flex-row">
                <div
                    className={`service-card__image relative order-1 min-h-[240px] w-full flex-shrink-0 overflow-hidden sm:min-h-[300px] md:min-h-[380px] md:w-[45%] ${isLeft ? "md:order-1" : "md:order-2"
                        }`}
                >
                    <Image
                        src={image}
                        alt={imageAlt}
                        fill
                        className="service-card__photo object-cover object-center"
                        sizes="(max-width: 768px) 100vw, 45vw"
                    />

                    <div
                        className={`absolute inset-0 ${isLeft
                            ? "bg-gradient-to-r from-transparent via-transparent to-white"
                            : "bg-gradient-to-l from-transparent via-transparent to-white"
                            }`}
                    />
                </div>

                <div
                    className={`service-card__content order-2 flex flex-1 flex-col justify-center px-6 py-8 sm:px-8 sm:py-10 lg:px-12 ${isLeft ? "md:order-2" : "md:order-1"
                        }`}
                >
                    <h2 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                        {title}
                    </h2>

                    <div className="mb-6 flex flex-col gap-3">
                        {description.map((para) => (
                            <p key={para} className="text-sm leading-relaxed text-gray-500 sm:text-[15px]">
                                {para}
                            </p>
                        ))}
                    </div>

                    {tags.length > 0 && (
                        <div className="service-card__tags mb-7 flex flex-wrap gap-2">
                            {tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="rounded-full border border-gray-300 px-4 py-1.5 text-xs font-medium text-gray-600 sm:text-sm"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}

                    <div>
                        <Link
                            href={link}
                            className="inline-block rounded-lg bg-[#E8571A] px-8 py-3 text-sm font-bold text-white transition-colors duration-200 hover:bg-[#cf4a12]"
                        >
                            Read More
                        </Link>
                    </div>
                </div>
            </div>
        </article>
    );
}

function ServicesSection() {
    const sectionRef = useRef(null);
    const eyebrowRef = useRef(null);
    const headingRef = useRef(null);
    const copyRef = useRef(null);
    const cardRefs = useRef([]);

    const setCardRef = (node, index) => {
        cardRefs.current[index] = node;
    };

    useEffect(() => {
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        if (prefersReducedMotion) {
            return;
        }

        const lenis = new Lenis({
            duration: 1.15,
            lerp: 0.08,
            smoothWheel: true,
            wheelMultiplier: 0.85,
        });

        const raf = (time) => {
            lenis.raf(time * 1000);
        };

        lenis.on("scroll", ScrollTrigger.update);
        gsap.ticker.add(raf);
        gsap.ticker.lagSmoothing(0);

        const ctx = gsap.context(() => {
            gsap.set([eyebrowRef.current, headingRef.current, copyRef.current], {
                autoAlpha: 0,
                y: 42,
            });

            gsap.to([eyebrowRef.current, headingRef.current, copyRef.current], {
                autoAlpha: 1,
                y: 0,
                duration: 0.9,
                ease: "power3.out",
                stagger: 0.12,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 72%",
                },
            });

            cardRefs.current.forEach((card, index) => {
                if (!card) {
                    return;
                }

                const image = card.querySelector(".service-card__image");
                const photo = card.querySelector(".service-card__photo");
                const content = card.querySelector(".service-card__content");
                const tags = card.querySelectorAll(".service-card__tags span");

                gsap.set(card, {
                    y: 110,
                    scale: 0.96,
                    backgroundColor: "#ffffff",
                    clearProps: "filter",
                    transformOrigin: "50% 100%",
                });
                gsap.set(image, { autoAlpha: 0, clipPath: "inset(0 0 100% 0)" });
                gsap.set(photo, { scale: 1.12 });
                gsap.set(content, { autoAlpha: 0, y: 34 });
                gsap.set(tags, { autoAlpha: 0, y: 14 });

                const timeline = gsap.timeline({
                    scrollTrigger: {
                        trigger: card,
                        start: "top 82%",
                        end: "top 42%",
                        scrub: 1,
                    },
                });

                timeline
                    .to(card, {
                        y: 0,
                        scale: 1,
                        ease: "power3.out",
                    })
                    .to(
                        image,
                        {
                            autoAlpha: 1,
                            clipPath: "inset(0 0 0% 0)",
                            ease: "power3.out",
                        },
                        "<"
                    )
                    .to(
                        photo,
                        {
                            scale: 1,
                            ease: "power3.out",
                        },
                        "<"
                    )
                    .to(
                        content,
                        {
                            autoAlpha: 1,
                            y: 0,
                            ease: "power3.out",
                        },
                        "<0.08"
                    )
                    .to(
                        tags,
                        {
                            autoAlpha: 1,
                            y: 0,
                            ease: "power2.out",
                            stagger: 0.04,
                        },
                        "<0.12"
                    );

                if (index < cardRefs.current.length - 1) {
                    gsap.to(card, {
                        y: -12,
                        scale: 0.985,
                        ease: "none",
                        scrollTrigger: {
                            trigger: cardRefs.current[index + 1],
                            start: "top 88%",
                            end: "top 38%",
                            scrub: true,
                        },
                    });
                }
            });
        }, sectionRef);

        ScrollTrigger.refresh();

        return () => {
            ctx.revert();
            lenis.destroy();
            gsap.ticker.remove(raf);
        };
    }, []);

    return (
        <main
            ref={sectionRef}
            className="mx-auto flex max-w-screen-xl flex-col gap-8 bg-white px-4 py-16 perspective-[1200px] sm:px-8 md:gap-14 md:py-24 lg:px-12"
        >
            <section className="w-full pb-10">
                <div className="max-w-screen-xl">
                    <div ref={eyebrowRef} className="mb-5 flex items-center gap-2 sm:mb-6">
                        <span className="inline-block h-2 w-2 rounded-full bg-gray-800" />
                        <span className="rounded-full border border-gray-400 px-6 py-2 text-xs font-medium text-gray-700 sm:text-lg">
                            Services
                        </span>
                    </div>

                    <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
                        <div ref={headingRef} className="flex-shrink-0">
                            <h2 className="text-3xl leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
                                Seamless Solutions for
                            </h2>
                            <h2 className="text-3xl leading-tight text-gray-400 sm:text-4xl lg:text-5xl">
                                Every Logistics Need
                            </h2>
                        </div>

                        <p
                            ref={copyRef}
                            className="max-w-sm text-sm leading-relaxed text-gray-900 sm:text-base lg:max-w-xs lg:text-right xl:max-w-sm"
                        >
                            Tailored logistics solutions for timely, cost-effective deliveries
                            across air, sea, and multimodal transport.
                        </p>
                    </div>
                </div>
            </section>

            {services.map((service, index) => (
                <ServiceCard
                    key={service.title}
                    {...service}
                    index={index}
                    setCardRef={setCardRef}
                />
            ))}
        </main>
    );
}

export default ServicesSection;
