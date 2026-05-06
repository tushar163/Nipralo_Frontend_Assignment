"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const storyProfiles = [
    { column: "left", y: -60, entryX: -140, lift: -250, rotate: -4, scale: 1 },
    { column: "right", y: 120, entryX: 150, lift: -210, rotate: 3, scale: 1.02 },
    { column: "left", y: 360, entryX: -90, lift: -180, rotate: 2, scale: 0.98 },
    { column: "right", y: 290, entryX: 120, lift: -230, rotate: -3, scale: 1 },
    { column: "left", y: 620, entryX: -120, lift: -190, rotate: -2, scale: 1 },
    { column: "right", y: 500, entryX: 130, lift: -210, rotate: 2, scale: 1.01 },
    { column: "left", y: 850, entryX: -150, lift: -180, rotate: 3, scale: 1 },
    { column: "right", y: 750, entryX: 110, lift: -230, rotate: -2, scale: 1 },
    { column: "center", y: 1030, entryX: 30, lift: -200, rotate: 2, scale: 0.98 },
];

function getResponsiveConfig() {
    if (window.matchMedia("(max-width: 767px)").matches) {
        return {
            scrollLength: 2300,
            storyScale: 0.72,
            sidePadding: 0.04,
            startY: 1.32,
            revealGap: 0.07,
        };
    }

    if (window.matchMedia("(max-width: 1023px)").matches) {
        return {
            scrollLength: 3000,
            storyScale: 0.82,
            sidePadding: 0.05,
            startY: 1.28,
            revealGap: 0.08,
        };
    }

    return {
        scrollLength: 4600,
        storyScale: 1,
        sidePadding: 0.08,
        startY: 1.3,
        revealGap: 0.085,
    };
}

function getStoryPosition({ gridWidth, cardWidth, profile, config }) {
    const leftX = gridWidth * config.sidePadding;
    const rightX = gridWidth - cardWidth - gridWidth * config.sidePadding;
    const centerX = gridWidth / 2 - cardWidth / 2;

    if (window.matchMedia("(max-width: 767px)").matches) {
        return {
            x: centerX,
            y: Math.max(0, profile.y * config.storyScale),
        };
    }

    const x = profile.column === "left" ? leftX : profile.column === "right" ? rightX : centerX;

    return {
        x,
        y: profile.y * config.storyScale,
    };
}

export function useIndustriesAnimation({ sectionRef, gridRef, cardRefs }) {
    useEffect(() => {
        const section = sectionRef.current;
        const grid = gridRef.current;
        const cards = cardRefs.current.filter(Boolean);

        if (!section || !grid || cards.length === 0) {
            return;
        }

        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        if (prefersReducedMotion) {
            gsap.set(cards, { autoAlpha: 1, clearProps: "all" });
            return;
        }

        const ctx = gsap.context(() => {
            const config = getResponsiveConfig();
            const gridWidth = grid.offsetWidth;
            const cardMetrics = cards.map((card) => ({
                x: card.offsetLeft,
                y: card.offsetTop,
                width: card.offsetWidth,
                height: card.offsetHeight,
            }));
            const gridHeight = Math.max(grid.scrollHeight, window.innerHeight * 1.45);
            const centerX = gridWidth / 2 - cardMetrics[0].width / 2;

            gsap.set(grid, { minHeight: gridHeight });
            gsap.set(cards, {
                position: "absolute",
                left: 0,
                top: 0,
                width: (index) => cardMetrics[index].width,
                height: (index) => cardMetrics[index].height,
                autoAlpha: 0,
                scale: 0.78,
                x: centerX,
                y: window.innerHeight * config.startY,
                rotate: 0,
                z: 0.01,
                zIndex: (index) => index + 1,
                transformOrigin: "50% 55%",
                willChange: "transform, opacity",
            });

            const timeline = gsap.timeline({
                defaults: { force3D: true },
                scrollTrigger: {
                    trigger: section,
                    start: "top top",
                    end: `+=${config.scrollLength}`,
                    pin: true,
                    scrub: 1,
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
                },
            });

            cards.forEach((card, index) => {
                const final = cardMetrics[index];
                const profile = storyProfiles[index];
                const story = getStoryPosition({
                    gridWidth,
                    cardWidth: final.width,
                    profile,
                    config,
                });
                const enterAt = 0.12 + index * config.revealGap;
                const liftAt = 0.42 + index * 0.06;
                const storyAt = 0.92 + index * 0.045;
                const alignAt = 2.42 + index * 0.035;
                const lockAt = 3.22 + index * 0.018;

                timeline
                    .to(
                        card,
                        {
                            autoAlpha: 1,
                            x: story.x + profile.entryX,
                            y: window.innerHeight * 0.95 + index * 34,
                            scale: 0.9,
                            rotate: profile.rotate * 0.8,
                            duration: 0.5,
                            ease: "power3.out",
                        },
                        enterAt
                    )
                    .to(
                        card,
                        {
                            x: story.x - profile.entryX * 0.45,
                            y: story.y + profile.lift,
                            scale: 1.04,
                            rotate: profile.rotate * -0.9,
                            duration: 0.76,
                            ease: "sine.inOut",
                        },
                        liftAt
                    )
                    .to(
                        card,
                        {
                            x: story.x,
                            y: story.y,
                            scale: profile.scale,
                            rotate: profile.rotate,
                            duration: 0.86,
                            ease: "sine.inOut",
                        },
                        storyAt
                    )
                    .to(
                        card,
                        {
                            x: final.x + (story.x - final.x) * 0.18,
                            y: final.y - 120 * config.storyScale,
                            scale: 1.01,
                            rotate: profile.rotate * 0.35,
                            duration: 0.72,
                            ease: "power2.inOut",
                        },
                        alignAt
                    )
                    .to(
                        card,
                        {
                            x: final.x,
                            y: final.y,
                            scale: 1,
                            rotate: 0,
                            duration: 0.78,
                            ease: "power4.out",
                        },
                        lockAt
                    );
            });

            timeline
                .to(
                    cards,
                    {
                        y: (index) => cardMetrics[index].y - 8,
                        duration: 0.2,
                        stagger: 0.018,
                        ease: "power1.out",
                    },
                    3.72
                )
                .to(
                    cards,
                    {
                        y: (index) => cardMetrics[index].y,
                        boxShadow: "0 16px 34px rgba(232, 87, 26, 0.18)",
                        duration: 0.24,
                        stagger: 0.012,
                        ease: "power2.out",
                    },
                    3.92
                );
        }, section);

        return () => ctx.revert();
    }, [sectionRef, gridRef, cardRefs]);
}
