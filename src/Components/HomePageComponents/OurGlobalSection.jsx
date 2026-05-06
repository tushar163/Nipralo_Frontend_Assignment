import Image from 'next/image'
import React from 'react'

function OurGlobalSection() {
    return (
        <section
            className="w-full py-14 h-screen sm:py-20 overflow-hidden bg-[url('/lineas-CSz1CbRe.png')] bg-no-repeat bg-cover bg-[#3D5166]"

        >
            <div className="relative z-10">
                {/* Heading */}
                <div className="text-center mb-10 sm:mb-14 px-6">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#E8571A] mb-3">
                        Our Global Footprint
                    </h2>

                </div>
                <Image
                    src="/WorldMap.webp"
                    alt="Penta Freight global footprint map"
                    width={1200}
                    height={800}
                    className="object-contain w-full h-full max-h-[calc(100vh-200px)] mx-auto"
                />


            </div>


        </section>
    )
}

export default OurGlobalSection