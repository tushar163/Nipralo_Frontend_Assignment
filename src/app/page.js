"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { Suspense, useRef } from "react";
const ServicesSection = dynamic(
  () => import("@/Components/HomePageComponents/ServicesSection"),
  { ssr: false, loading: () => <SectionSkeleton height="h-[600px]" /> }
);

const WhyChooseSection = dynamic(
  () => import("@/Components/HomePageComponents/WhyChooseSection"),
  { ssr: false, loading: () => <SectionSkeleton height="h-[500px]" /> }
);

const AchievementsSection = dynamic(
  () => import("@/Components/HomePageComponents/AchievementsSection"),
  { ssr: false, loading: () => <SectionSkeleton height="h-[320px]" dark /> }
);

const ReviewSection = dynamic(
  () => import("@/Components/HomePageComponents/ReviewSection"),
  { ssr: false, loading: () => <SectionSkeleton height="h-[700px]" /> }
);

const CertificationsSection = dynamic(
  () => import("@/Components/HomePageComponents/Certificationssection"),
  { ssr: false, loading: () => <SectionSkeleton height="h-[280px]" dark /> }
);

const AwardsSection = dynamic(
  () => import("@/Components/HomePageComponents/AwardSection"),
  { ssr: false, loading: () => <SectionSkeleton height="h-[600px]" /> }
);

const OurGlobalSection = dynamic(
  () => import("@/Components/HomePageComponents/OurGlobalSection"),
  { ssr: false, loading: () => <SectionSkeleton height="h-[520px]" dark /> }
);

// ── Skeleton placeholder shown while a chunk is downloading ──────────────────
function SectionSkeleton({ height = "h-[400px]", dark = false }) {
  return (
    <div
      className={`w-full ${height} flex items-center justify-center animate-pulse`}
      style={{ backgroundColor: dark ? "#3D5166" : "#f5f5f5" }}
    >
      <div className="flex flex-col items-center gap-4 opacity-30">
        <div
          className="h-5 w-48 rounded-full"
          style={{ backgroundColor: dark ? "white" : "#d1d5db" }}
        />
        <div
          className="h-3 w-72 rounded-full"
          style={{ backgroundColor: dark ? "white" : "#d1d5db" }}
        />
      </div>
    </div>
  );
}


export default function HeroBanner() {
  const nextSectionRef = useRef(null);

  const handleScrollDown = () => {
    const nextSection = document.getElementById("next-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
    <>
      {/* ── Hero Banner ── */}
      <section className="relative w-full h-screen overflow-hidden">

        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/homevideo-bpwZoUMP.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* ── Semi-circle Scroll Button ── */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20">
          <button
            onClick={handleScrollDown}
            aria-label="Scroll to next section"
            className="group relative flex items-start justify-center w-40 h-20 bg-transparent rounded-t-full shadow-[0_-4px_24px_rgba(0,0,0,0.25)] border-amber-50 border-[0.5px]  focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            {/* Down arrow SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5 mt-8 text-white transition-colors duration-300 animate-bounce"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
        </div>
      </section>

      {/* ── Next Section (scroll target) ── */}
      <section id="next-section"
        ref={nextSectionRef} className="relative w-full h-screen min-h-[500px] max-h-[900px] sm:h-screen sm:max-h-none overflow-hidden">

        {/* ── Background Flight Image ── */}
        <Image
          src="/flight.jpg"
          alt="Penta Freight airplane in flight at sunset"
          fill
          priority
          className="object-cover object-center"
        />


        <Image
          src="/HomeSection.png" // your overlay image
          alt="overlay"
          fill
          className="object-cover z-0 opacity-100  h-[120vh] w-full"
        />

        {/* ── Content ── */}
        <div className="relative z-10 h-full flex flex-row gap-20 items-start px-6 sm:px-12 lg:px-20 pt-10 sm:pt-16 lg:pt-20 max-w-screen-xl mx-auto w-full">

          {/* Label block */}
          <div className="flex flex-col justify-center items-center mb-6 sm:mb-8 w-full ">
            <span className="text-xs sm:text-sm font-bold tracking-[0.25em] uppercase text-[#E8571A]">
              About Us
            </span>

            {/* Divider line */}
            <div className="w-48 h-[2px] bg-[#E8571A] my-2" />

            <span className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[#E8571A]">
              Penta Freight
            </span>
          </div>

          {/* Description text */}
          <div className="max-w-xs sm:max-w-sm lg:max-w-full">
            <p className="text-sm sm:text-base lg:text-[17px] text-gray-700 leading-relaxed">
              Penta Freight provides reliable{" "}
              <strong className="text-gray-900 font-bold">logistics solutions</strong>,
              specializing in temperature-sensitive shipments. We ensure safe,{" "}
              <strong className="text-gray-900 font-bold">on-time delivery</strong>{" "}
              worldwide. Trust us for seamless supply chain management.
            </p>
          </div>
        </div>
      </section>
      <div>
        <div className="py-8 md:py-10 bg-[#425462] bg-[url('/lineas-CSz1CbRe.png')] bg-no-repeat bg-cover">
          <div className="flex flex-col items-center justify-center h-full text-center w-[85%] md:max-w-[60%] mx-auto">
            <h2 className="mb-6 md:text-[36px] lg:text-[36px] text-[28px] font-[500] text-[#f06c30]">Our Philosophy</h2>
            <p className="text-white mb-[2%] pb-5">Customer satisfaction drives everything we do. Every shipment is a promise, and we deliver it with precision, care, and professionalism. With expert resources, we ensure safe, timely transport, building lasting partnerships founded on trust and excellence.</p>
            <button className="px-6 py-3 bg-[#E8571A] text-white rounded hover:bg-[#f06c30] transition-colors duration-300">
              Read More
            </button>
          </div>
        </div>
      </div>
      <Suspense fallback={<SectionSkeleton height="h-[600px]" />}>
        <ServicesSection />
      </Suspense>

      <Suspense fallback={<SectionSkeleton height="h-[500px]" />}>
        <WhyChooseSection />
      </Suspense>

      <Suspense fallback={<SectionSkeleton height="h-[320px]" dark />}>
        <AchievementsSection />
      </Suspense>

      <Suspense fallback={<SectionSkeleton height="h-[700px]" />}>
        <ReviewSection />
      </Suspense>

      <Suspense fallback={<SectionSkeleton height="h-[280px]" dark />}>
        <CertificationsSection />
      </Suspense>

      <Suspense fallback={<SectionSkeleton height="h-[600px]" />}>
        <AwardsSection />
      </Suspense>

      <Suspense fallback={<SectionSkeleton height="h-[520px]" dark />}>
        <OurGlobalSection />
      </Suspense>
    </>
  );
}
