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

function ProductMark({ mark }) {
    const toneClass = {
        red: "text-[#ef4b35]",
        blue: "text-[#2b9bdc]",
        navy: "text-[#17477f]",
        teal: "text-[#1797aa]",
        gray: "text-gray-500",
        pink: "text-[#ef6d93]",
    }[mark.tone];

    return (
        <div className={`flex flex-col items-center justify-center font-bold leading-none ${toneClass}`}>
            <span className="text-[15px] tracking-tight sm:text-base">{mark.name}</span>
            <span className="mt-1 text-[10px] uppercase tracking-wide">{mark.suffix}</span>
        </div>
    );
}

function ProductRow({ row }) {
    return (
        <div className="grid min-h-[74px] grid-cols-[0.9fr_1fr_1fr] items-center border border-gray-100 bg-white shadow-[0_5px_16px_rgba(15,23,42,0.06)]">
            <div className="px-5 text-2xl font-bold text-black sm:text-3xl">{row.label}</div>
            {row.marks.map((mark) => (
                <div key={`${mark.name}-${mark.suffix}`} className="flex h-full items-center justify-center border-l border-gray-200">
                    <ProductMark mark={mark} />
                </div>
            ))}
            {row.marks.length === 1 && <div className="h-full border-l border-gray-200" />}
        </div>
    );
}

function ProductSolutionCard({ solution, cardRef, contentRef }) {
    return (
        <article
            ref={cardRef}
            className="product-solution-card flex min-h-[560px] w-[min(92vw,880px)] flex-col justify-center bg-white px-4 py-14 text-center shadow-[0_3px_16px_rgba(15,23,42,0.13)] sm:px-8 lg:w-[calc(50vw-42px)] xl:min-h-[610px]"
        >
            <div ref={contentRef} className="product-solution-content">
                <h3 className="text-5xl font-normal leading-tight text-black sm:text-6xl">
                    {solution.title}
                </h3>
                <p className="mx-auto mt-10 max-w-4xl text-xl leading-relaxed text-black sm:text-2xl">
                    {solution.description}
                </p>

                <div className="mt-11 flex flex-col gap-10">
                    {solution.rows.map((row) => (
                        <ProductRow key={row.label} row={row} />
                    ))}
                </div>

                <button
                    type="button"
                    className="mt-8 rounded-lg bg-[#f2652d] px-8 py-4 text-base font-bold text-white shadow-[0_18px_36px_rgba(242,101,45,0.2)] transition-colors duration-200 hover:bg-[#d9541f] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f2652d]"
                >
                    {solution.buttonLabel}
                </button>
            </div>
        </article>
    );
}

function ProductSolutionsSection() {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const leftCardRef = useRef(null);
    const rightCardRef = useRef(null);
    const leftContentRef = useRef(null);
    const rightContentRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;

        if (!section) {
            return;
        }

        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        if (prefersReducedMotion) {
            gsap.set([leftCardRef.current, rightCardRef.current, leftContentRef.current, rightContentRef.current], {
                clearProps: "all",
                autoAlpha: 1,
            });
            return;
        }

        const ctx = gsap.context(() => {
            const leftContentItems = leftContentRef.current.querySelectorAll("h3, p, .grid, button");
            const rightContentItems = rightContentRef.current.querySelectorAll("h3, p, .grid, button");

            gsap.set(leftCardRef.current, { xPercent: -112, autoAlpha: 1 });
            gsap.set(rightCardRef.current, { xPercent: 112, autoAlpha: 1 });
            gsap.set([leftContentRef.current, rightContentRef.current], { autoAlpha: 0 });
            gsap.set([leftContentItems, rightContentItems], { y: 34, autoAlpha: 0 });
            gsap.set(titleRef.current, { autoAlpha: 1, scale: 1 });

            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: "top top",
                    end: "+=2800",
                    pin: true,
                    scrub: 1,
                    anticipatePin: 1,
                },
            });

            timeline
                .to(
                    [leftCardRef.current, rightCardRef.current],
                    {
                        xPercent: 0,
                        duration: 0.9,
                        ease: "power3.inOut",
                    },
                    0
                )
                .to(
                    titleRef.current,
                    {
                        autoAlpha: 0.06,
                        scale: 0.96,
                        duration: 0.45,
                        ease: "power2.out",
                    },
                    0.42
                )
                .to(leftContentRef.current, { autoAlpha: 1, duration: 0.01 }, 0.9)
                .to(
                    leftContentItems,
                    {
                        autoAlpha: 1,
                        y: 0,
                        stagger: 0.12,
                        duration: 0.64,
                        ease: "power3.out",
                    },
                    0.98
                )
                .to(
                    rightCardRef.current,
                    {
                        autoAlpha: 0.18,
                        duration: 0.4,
                        ease: "none",
                    },
                    0.98
                )
                .to(
                    rightCardRef.current,
                    {
                        autoAlpha: 1,
                        duration: 0.35,
                        ease: "none",
                    },
                    1.72
                )
                .to(rightContentRef.current, { autoAlpha: 1, duration: 0.01 }, 1.72)
                .to(
                    rightContentItems,
                    {
                        autoAlpha: 1,
                        y: 0,
                        stagger: 0.12,
                        duration: 0.76,
                        ease: "power3.out",
                    },
                    1.82
                );
        }, section);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative overflow-hidden bg-white">
            <div className="relative flex min-h-screen items-center justify-center px-0 py-16">
                <h2
                    ref={titleRef}
                    className="pointer-events-none absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-5xl font-normal text-black sm:text-6xl"
                >
                    Product Solutions
                </h2>

                <div className="relative z-10 flex w-full flex-col items-center gap-8 lg:flex-row lg:items-stretch lg:justify-between lg:gap-16">
                    <ProductSolutionCard
                        solution={productSolutions[0]}
                        cardRef={leftCardRef}
                        contentRef={leftContentRef}
                    />
                    <ProductSolutionCard
                        solution={productSolutions[1]}
                        cardRef={rightCardRef}
                        contentRef={rightContentRef}
                    />
                </div>
            </div>
        </section>
    );
}

export default ProductSolutionsSection;
