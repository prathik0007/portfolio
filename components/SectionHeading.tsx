export default function SectionHeading({
  title,
  highlight,
  subtitle,
  align = "center",
}: {
  title: string;
  highlight?: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      <h2 className="font-serif text-3xl font-bold text-ink sm:text-4xl">
        {title}
        {highlight && <span className="text-primary"> {highlight}</span>}
      </h2>
      <span
        className={`mt-2 block h-[3px] w-14 rounded-full bg-primary ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
      {subtitle && <p className="mt-4 text-base text-ink-soft">{subtitle}</p>}
    </div>
  );
}
