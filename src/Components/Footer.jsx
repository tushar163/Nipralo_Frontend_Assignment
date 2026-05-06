import Link from "next/link";

const indiaOffices = [
  {
    city: "Mumbai",
    address: "902, 'A' Wing, Times Square, Andheri-Kurla Road, Marol, Andheri (East), Mumbai 400 059",
    phone: "+91 22-6222-6222",
  },
  {
    city: "Ahmedabad",
    address: "D21 The Address, True Value West Gate, SG highway, Ahmedabad 380 009",
    phone: "+91 7940227900",
  },
  {
    city: "Bengaluru",
    address: "205, 2nd floor, Connection point H.A.L Airport Exit Road, Bangalore 560 017",
    phone: "+91 80-4112-5590",
  },
  {
    city: "Chennai",
    address: "Flat no.A1, 1st floor, No 24 Vembuli Amman koil Street, Palavanthangal Chennai- 600 114",
    phone: "+91-44-22241462/ 1464",
  },
  {
    city: "Delhi",
    address:
      "Penta Freight Pvt. Ltd. Khasra No. 10/1/10/2, 11/5/1, No. 4, Samalkha, Old Delhi – Gurgaon Road, Opposite Primary School, New Delhi – 110 037",
    phone: "+91 11-4078-2222",
  },
  {
    city: "Hyderabad",
    address:
      "G-27 & 28, Cargo Satellite Building, Rajiv Gandhi International Airport, Shamshabad 501 218, Telangana, India",
    phone: "+91 40-2400-4048",
  },
  {
    city: "Kolkata",
    address:
      "131, Jangalpur Road, near airport, Gate No. 3, Motilal Colony, P.O Rajbari, Kolkata 700 081, West Bengal",
    phone: "+91 33-2514-7089",
  },
];

const usaOffices = [
  {
    city: "Chicago",
    address: "Penta Freight Pvt.Ltd 5100 Newport Dr. Sute 4, Rolling Meadows, IL 60008 USA",
    phone: "+040 234 6559 / +224 434 2154",
  },
];

function OfficeCard({ city, address, phone }) {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-[17px] font-bold text-gray-900 tracking-tight">{city}</h3>
      <p className="text-sm text-gray-500 leading-relaxed">{address}</p>
      <p className="text-sm text-gray-500">{phone}</p>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">

      {/* ── India Offices ── */}
      <div className="max-w-screen-xl mx-auto px-6 sm:px-8 lg:px-12 pt-16 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">

          {/* Section Label */}
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight leading-tight">
              Our <span className="text-[#E8571A]">India</span> Offices
            </h2>
            <p className="mt-4 text-sm text-gray-500 leading-relaxed max-w-xs">
              Penta Freight delivers seamless logistics across India, with branches
              in key cities for your convenience.
            </p>
          </div>

          {/* Office Cards */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {indiaOffices.map((office) => (
              <OfficeCard key={office.city} {...office} />
            ))}
          </div>
        </div>
      </div>

   

      {/* ── USA Office ── */}
      <div className="max-w-screen-xl mx-auto px-6 sm:px-8 lg:px-12 pt-10 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">

          {/* Section Label */}
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight leading-tight">
              Our <span className="text-[#E8571A]">USA</span> Office
            </h2>
            <p className="mt-4 text-sm text-gray-500 leading-relaxed max-w-xs">
              Penta Freight has expanded its operations globally, beginning with
              the USA, to offer continuous support across continents.
            </p>
          </div>

          {/* Office Cards */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {usaOffices.map((office) => (
              <OfficeCard key={office.city} {...office} />
            ))}
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="border-t border-gray-100">
        <div className="max-w-screen-xl mx-auto px-6 sm:px-8 lg:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">

          {/* Copyright */}
          <p className="text-sm text-gray-400 order-2 sm:order-1">
            © 2026 Penta Freight. All Rights Reserved
          </p>

          {/* LinkedIn Icon */}
          <div className="order-1 sm:order-2">
            <Link
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex items-center justify-center w-8 h-8 rounded border border-gray-300 text-gray-500 hover:border-[#0A66C2] hover:text-[#0A66C2] transition-colors duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path d="M20.447 20.452H17.01v-5.569c0-1.328-.024-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.584V9h3.298v1.561h.046c.459-.869 1.58-1.784 3.252-1.784 3.476 0 4.117 2.288 4.117 5.265v6.41zM5.337 7.433a1.912 1.912 0 110-3.824 1.912 1.912 0 010 3.824zm1.651 13.019H3.682V9h3.306v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </Link>
          </div>

          {/* Nav Links */}
          <div className="flex items-center gap-3 order-3 text-sm text-gray-400">
            <Link
              href="/privacy-policy"
              className="hover:text-gray-700 transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <span className="w-1.5 h-1.5 rounded-full bg-[#E8571A] inline-block" />
            <Link
              href="/terms-and-conditions"
              className="hover:text-gray-700 transition-colors duration-200"
            >
              Terms and Conditions
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
}