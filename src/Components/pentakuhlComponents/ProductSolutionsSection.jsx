"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const productSolutions = [
    {
        key: "parcel",
        title: "Parcel Shippers",
        description:
            "We understand the unique challenges faced by parcel shippers and offer tailored solutions for seamless shipping.",
        buttonLabel: "Parcel Shippers",
        rows: [
            {
                label: "Single Use",
                marks: [
                    { name: "COOLGUARD", suffix: "PCM", tone: "red" },
                    { name: "COOLGUARD", suffix: "ADVANCE", tone: "blue" },
                ],
            },
            {
                label: "Reusable",
                marks: [{ name: "Credo", suffix: "Cube", tone: "navy" }],
            },
        ],
    },
    {
        key: "pallet",
        title: "Pallet Shippers",
        description:
            "We provide tailored services for pallet shippers, ensuring your cargo arrives safely and efficiently.",
        buttonLabel: "Pallet Shippers",
        rows: [
            {
                label: "Single Use",
                marks: [
                    { name: "COOLPALL", suffix: "VERTOS", tone: "teal" },
                    { name: "COOLPALL", suffix: "VERTOS ADVANCE", tone: "gray" },
                ],
            },
            {
                label: "Reusable",
                marks: [
                    { name: "Credo", suffix: "XTREME", tone: "pink" },
                    { name: "Credo", suffix: "CARGO", tone: "red" },
                ],
            },
        ],
    },
];

const toneColors = {
    red: "#ef4b35",
    blue: "#2b9bdc",
    navy: "#17477f",
    teal: "#1797aa",
    gray: "#6b7280",
    pink: "#ef6d93",
};

function ProductMark({ mark }) {
    return (
        <div
            className="flex flex-col items-center justify-center font-bold leading-none"
            style={{ color: toneColors[mark.tone] }}
        >
            <span className="text-sm tracking-tight sm:text-base">{mark.name}</span>
            <span className="mt-1 text-[10px] uppercase tracking-wider opacity-80">{mark.suffix}</span>
        </div>
    );
}

function ProductRow({ row }) {
    return (
        <div className="grid min-h-[68px] grid-cols-[1fr_1fr_1fr] items-center border border-gray-100 bg-white shadow-[0_3px_12px_rgba(15,23,42,0.05)]">
            <div className="px-4 text-xl font-bold text-black sm:text-2xl">{row.label}</div>
            {row.marks.map((mark) => (
                <div
                    key={`${mark.name}-${mark.suffix}`}
                    className="flex h-full items-center justify-center border-l border-gray-200 py-3"
                >
                    <ProductMark mark={mark} />
                </div>
            ))}
            {row.marks.length === 1 && <div className="h-full border-l border-gray-200" />}
        </div>
    );
}

function Card({ solution, cardRef, innerRef }) {
    return (
        <div
            ref={cardRef}
            className="flex w-[calc(50vw-24px)] max-w-[50%] min-w-[280px] flex-col items-center justify-center
                 bg-white px-6 py-16 text-center
                 shadow-[0_4px_24px_rgba(15,23,42,0.10)]
                 sm:px-10 lg:px-14"
            style={{ minHeight: "560px" }}
        >
            <div ref={innerRef} className="w-full">
                <h3 className="text-4xl font-normal leading-tight text-black sm:text-5xl lg:text-6xl">
                    {solution.title}
                </h3>
                <p className="mx-auto mt-8 max-w-lg text-lg leading-relaxed text-gray-600 sm:text-xl">
                    {solution.description}
                </p>
                <div className="mt-10 flex flex-col gap-6">
                    {solution.rows.map((row) => (
                        <ProductRow key={row.label} row={row} />
                    ))}
                </div>
                <button
                    type="button"
                    className="mt-10 rounded-lg bg-[#f2652d] px-8 py-4 text-sm font-bold uppercase tracking-wider text-white
                     shadow-[0_12px_28px_rgba(242,101,45,0.25)]
                     transition-all duration-200 hover:bg-[#d9541f] hover:shadow-[0_16px_32px_rgba(242,101,45,0.35)]
                     focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f2652d]"
                >
                    {solution.buttonLabel}
                </button>
            </div>
        </div>
    );
}

export default function ProductSolutionsSection() {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const leftCardRef = useRef(null);
    const rightCardRef = useRef(null);
    const leftInnerRef = useRef(null);
    const rightInnerRef = useRef(null);
    const wrapperRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (prefersReduced) {
            gsap.set([leftCardRef.current, rightCardRef.current], { x: 0, autoAlpha: 1 });
            gsap.set([leftInnerRef.current, rightInnerRef.current], { autoAlpha: 1, y: 0 });
            return;
        }

        const ctx = gsap.context(() => {
            /* ─── Initial state ────────────────────────────────────── */
            // Cards start off-screen left/right
            gsap.set(leftCardRef.current, { xPercent: -105, autoAlpha: 1 });
            gsap.set(rightCardRef.current, { xPercent: 105, autoAlpha: 1 });

            // Card content starts invisible
            gsap.set(leftInnerRef.current, { autoAlpha: 0 });
            gsap.set(rightInnerRef.current, { autoAlpha: 0 });

            // Title visible at start
            gsap.set(titleRef.current, { autoAlpha: 1, y: 0, scale: 1 });

            /* ─── Master timeline scrubbed by scroll ───────────────── */
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: "top top",
                    end: "+=3000",          // total scroll distance for this sequence
                    pin: true,
                    scrub: 1.2,
                    anticipatePin: 1,
                },
            });

            /*
             * PHASE 1  (progress 0 → 0.35)
             * Cards slide in from both sides toward centre.
             * Title fades out as cards close in.
             */
            tl.to(
                [leftCardRef.current, rightCardRef.current],
                { xPercent: 0, duration: 1, ease: "power2.inOut" },
                0
            )
                .to(
                    titleRef.current,
                    { autoAlpha: 0, scale: 0.88, duration: 0.6, ease: "power2.in" },
                    0.3                       // title starts fading when cards are ~half way
                )

                /*
                 * PHASE 2  (progress 0.35 → 0.65)
                 * Left card content fades + slides up into view.
                 * Right card dims to hint it's "next".
                 */
                .to(
                    rightCardRef.current,
                    { autoAlpha: 0.15, duration: 0.2, ease: "none" },
                    1.05
                )
                .to(
                    leftInnerRef.current,
                    { autoAlpha: 1, duration: 0.01 },
                    1.05
                )
                .from(
                    leftInnerRef.current.querySelectorAll
                        ? leftInnerRef.current.querySelectorAll("h3, p, .flex, button")
                        : [],
                    { y: 36, autoAlpha: 0, stagger: 0.1, duration: 0.55, ease: "power3.out" },
                    1.08
                )

                /*
                 * PHASE 3  (progress 0.65 → 1.0)
                 * Right card brightens back to full.
                 * Right card content fades + slides up into view.
                 */
                .to(
                    rightCardRef.current,
                    { autoAlpha: 1, duration: 0.25, ease: "power2.out" },
                    1.7
                )
                .to(
                    rightInnerRef.current,
                    { autoAlpha: 1, duration: 0.01 },
                    1.72
                )
                .from(
                    rightInnerRef.current.querySelectorAll
                        ? rightInnerRef.current.querySelectorAll("h3, p, .flex, button")
                        : [],
                    { y: 36, autoAlpha: 0, stagger: 0.1, duration: 0.65, ease: "power3.out" },
                    1.78
                );
        }, section);

        ScrollTrigger.refresh();
        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative overflow-hidden "
        >
            {/* Subtle grid texture */}
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.03]"
                
            />

            {/* ── Viewport frame ── */}
            <div
                ref={wrapperRef}
                className="relative flex min-h-screen items-center justify-center overflow-hidden"
            >
                {/* "Product Solutions" title — fades away as cards arrive */}
                <h2
                    ref={titleRef}
                    className="pointer-events-none absolute left-1/2 top-1/2 z-0
                     -translate-x-1/2 -translate-y-1/2
                     whitespace-nowrap text-4xl font-light tracking-tight text-black
                     sm:text-5xl lg:text-6xl"
                >
                    Product Solutions
                </h2>

                {/* ── Cards row ── */}
                <div className="relative z-10 flex w-full items-stretch justify-center gap-8 lg:gap-6">
                    <Card
                        solution={productSolutions[0]}
                        cardRef={leftCardRef}
                        innerRef={leftInnerRef}
                    />
                    <Card
                        solution={productSolutions[1]}
                        cardRef={rightCardRef}
                        innerRef={rightInnerRef}
                    />
                </div>
            </div>
        </section>
    );
}