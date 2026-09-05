import { interests } from "@/data/skills";

export default function Interests() {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {interests.map((interest) => (
        <span
          key={interest}
          className="rounded-full border border-primary/25 bg-primary-light/60 px-5 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-white"
        >
          {interest}
        </span>
      ))}
    </div>
  );
}
