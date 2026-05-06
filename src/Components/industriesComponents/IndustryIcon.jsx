const iconPaths = {
    pharma: (
        <>
            <path d="M12 21c5-4 9-8 9-13a5 5 0 0 0-9-3 5 5 0 0 0-9 3c0 5 4 9 9 13Z" />
            <path d="M12 7v8M8 11h8" />
        </>
    ),
    chemicals: (
        <>
            <path d="M9 2h6M10 2v6l-5 9a4 4 0 0 0 3.5 6h7a4 4 0 0 0 3.5-6l-5-9V2" />
            <path d="M7 16h10M9 19h6" />
        </>
    ),
    textiles: (
        <>
            <path d="M4 7h16v12H4z" />
            <path d="M4 11h16M8 7v12M12 7v12M16 7v12" />
        </>
    ),
    energy: <path d="m13 2-8 12h7l-1 8 8-12h-7l1-8Z" />,
    automobile: (
        <>
            <path d="M3 13h18l-2-5H5l-2 5Z" />
            <path d="M5 13v5M19 13v5M7 18h10" />
            <circle cx="7" cy="18" r="2" />
            <circle cx="17" cy="18" r="2" />
        </>
    ),
    packaging: (
        <>
            <path d="m12 2 8 4v12l-8 4-8-4V6l8-4Z" />
            <path d="m4 6 8 4 8-4M12 10v12" />
        </>
    ),
    time: (
        <>
            <circle cx="12" cy="12" r="9" />
            <path d="M12 7v6l4 2" />
        </>
    ),
    glassware: (
        <>
            <path d="M8 2h8l-1 8 4 8a3 3 0 0 1-3 4H8a3 3 0 0 1-3-4l4-8-1-8Z" />
            <path d="M8 15h8" />
        </>
    ),
    electronics: (
        <>
            <rect x="4" y="5" width="16" height="12" rx="2" />
            <path d="M8 21h8M12 17v4M8 9h3M8 13h8" />
        </>
    ),
};

function IndustryIcon({ type }) {
    return (
        <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="h-8 w-8"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            {iconPaths[type] || iconPaths.packaging}
        </svg>
    );
}

export default IndustryIcon;
