export default function Skills() {
  return (
    <div className="space-y-6 text-base leading-relaxed text-ink-soft sm:text-lg">
      <p>
        Hi, I&apos;m{" "}
        <span className="font-bold text-primary">Prathik</span> — a full-stack
        developer focused on building{" "}
        <strong className="font-bold text-ink">fast</strong>,{" "}
        <strong className="font-bold text-ink">scalable</strong>, and{" "}
        <strong className="font-bold text-ink">real-world</strong> web and mobile
        applications. I enjoy solving problems and turning ideas into clean,
        production-ready code.
      </p>

      <p>
        I work with{" "}
        <strong className="font-bold text-ink">Python</strong>,{" "}
        <strong className="font-bold text-ink">Flask</strong>,{" "}
        <strong className="font-bold text-ink">Django</strong>,{" "}
        <strong className="font-bold text-ink">Node.js</strong>,{" "}
        <strong className="font-bold text-ink">Express.js</strong>, and modern
        frontend technologies like{" "}
        <strong className="font-bold text-ink">React</strong> and{" "}
        <strong className="font-bold text-ink">Next.js</strong>. My priority is
        simple: write code that is{" "}
        <strong className="font-bold text-ink">maintainable</strong>,{" "}
        <strong className="font-bold text-ink">efficient</strong>, and easy to scale.
      </p>

      <p>
        I also strengthen my fundamentals in{" "}
        <span className="font-bold text-primary">DSA</span> (100+ LeetCode
        problems solved),{" "}
        <strong className="font-bold text-ink">system design</strong>, and{" "}
        <strong className="font-bold text-ink">performance optimization</strong> —
        because good engineering is about long-term reliability, not just
        &ldquo;making it work.&rdquo;
      </p>

      <p>
        I also have strong hands-on experience with databases, including{" "}
        <strong className="font-bold text-ink">MySQL</strong>,{" "}
        <strong className="font-bold text-ink">SQLite</strong>,{" "}
        <strong className="font-bold text-ink">PostgreSQL</strong>, and{" "}
        <strong className="font-bold text-ink">MongoDB</strong>. I can design
        efficient schemas, write optimized queries, and build secure CRUD-based
        systems with proper validation. I understand key database concepts like{" "}
        <span className="font-bold text-primary">normalization</span>,{" "}
        <span className="font-bold text-primary">indexes</span>, and{" "}
        <span className="font-bold text-primary">relationships</span>.
      </p>

      {/* What I Bring Card */}
      <div className="mt-8 rounded-2xl border border-surface-border bg-surface-muted/40 p-6 sm:p-8 shadow-sm transition-all hover:border-primary/30 hover:shadow-card">
        <h4 className="font-sans text-xl font-bold tracking-tight text-ink">
          What I Bring
        </h4>
        <p className="mt-2.5 font-sans text-sm font-medium text-ink-soft sm:text-base">
          Strong fundamentals &bull; Clean architecture &bull; Practical problem-solving &bull; Growth mindset
        </p>
      </div>
    </div>
  );
}
