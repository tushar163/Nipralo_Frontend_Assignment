"use client";

import { useState, useRef, useEffect } from "react";

export default function Accordion({ items = [], allowMultiple = false }) {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggle = (index) => {
    if (allowMultiple) {
      setOpenIndexes((prev) =>
        prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
      );
    } else {
      setOpenIndexes((prev) => (prev.includes(index) ? [] : [index]));
    }
  };

  return (
    <div className="w-full divide-y divide-gray-200 border-t border-gray-200">
      {items.map((item, index) => {
        const isOpen = openIndexes.includes(index);
        return (
          <AccordionItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={isOpen}
            onToggle={() => toggle(index)}
          />
        );
      })}
    </div>
  );
}

function AccordionItem({ question, answer, isOpen, onToggle }) {
  const bodyRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (bodyRef.current) {
      setHeight(isOpen ? bodyRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <div className="border-b border-gray-200">
      {/* Question row */}
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-6 py-5 text-left focus:outline-none group"
      >
        <span
          className={`text-sm sm:text-[15px] font-semibold leading-snug transition-colors duration-200 ${
            isOpen ? "text-gray-900" : "text-gray-800 group-hover:text-gray-900"
          }`}
        >
          {question}
        </span>

        {/* Chevron icon */}
        <span
          className="flex-shrink-0 flex items-center justify-center w-6 h-6 transition-transform duration-300"
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4 text-gray-500"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </span>
      </button>

      {/* Answer — animates height */}
      <div
        ref={bodyRef}
        style={{
          height: `${height}px`,
          overflow: "hidden",
          transition: "height 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <p className="pb-5 text-sm sm:text-[15px] text-gray-500 leading-relaxed pr-8">
          {answer}
        </p>
      </div>
    </div>
  );
}