import IndustryIcon from "./IndustryIcon";

function IndustryCard({ title, description, icon, cardRef }) {
    return (
        <article
            ref={cardRef}
            className="industry-card min-h-[320px] w-full max-w-[350px] rounded-xl bg-[#f47a42] p-7 text-white shadow-[0_22px_46px_rgba(232,87,26,0.22)] will-change-transform sm:min-h-[350px]"
        >
            {/* Icon + Title inline row */}
            <div className="mb-7 flex items-center gap-4">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white/20 text-white/90">
                    <IndustryIcon type={icon} />
                </div>
                <h3 className="text-2xl font-bold leading-tight">{title}</h3>
            </div>

            <p className="text-base leading-relaxed text-white/88">{description}</p>
        </article>
    );
}

export default IndustryCard;
