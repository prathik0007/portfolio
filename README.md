# Portfolio Website

A production-ready personal portfolio built with Next.js (App Router), React, TypeScript, and Tailwind CSS. All content lives in a handful of data files so you can make the site yours without touching component code.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

To create a production build:

```bash
npm run build
npm start
```

## Pages

- `/` — Home (hero)
- `/about` — About, education timeline, skills, interests, opportunities
- `/projects` — Project showcase
- `/resume` — Resume preview and downloads
- `/contact` — Contact info and message form

## Where to edit your content

Everything you'll want to personalize lives in `data/`:

| File | Controls |
|---|---|
| `data/portfolio.ts` | Name, role, bio, contact details, hero copy, homepage info card, social links, nav labels, SEO metadata, resume/profile image paths |
| `data/skills.ts` | Technical skill categories, proficiency levels, percentages, interests, and opportunities |
| `data/certificates.ts` | Certifications, issuers, issue dates, credential IDs, verification links, and skill tags |
| `data/handles.ts` | Coding platform profiles (LeetCode, GitHub, HackerRank, CodeChef, Codeforces, etc.) with stats & handles |
| `data/projects.ts` | The full project list shown on `/projects` — add, remove, or edit entries freely |
| `data/education.ts` | Education timeline entries on `/about` |

You generally never need to edit files inside `components/` or `app/` just to update your info — edit the data files instead.

### 1. Update your personal information

Open `data/portfolio.ts` and replace every placeholder value (name, role, email, phone, location, bio, etc.). The `roleHighlight` field controls which word/phrase in your role is styled in red on the homepage — make sure it's an exact substring of `role`.

### 2. Replace your profile photo

Swap in your own image at:

```
public/images/profile.jpg
```

Keep the same filename, or update `profileImagePath` in `data/portfolio.ts` if you rename it. A square image works best since it's cropped into a circle.

### 3. Add or edit projects

Open `data/projects.ts`. Each project supports one or more images (an array) — if you provide more than one, the project card automatically shows a swipeable carousel. Drop your screenshots into `public/images/` and reference them by path.

```ts
{
  id: "my-project",
  number: "01",
  title: "My Project",
  description: "What it does and why it matters.",
  images: ["/images/my-project-1.jpg", "/images/my-project-2.jpg"],
  technologies: ["Next.js", "PostgreSQL"],
  liveDemoUrl: "https://...",
  sourceCodeUrl: "https://github.com/...",
}
```

### 4. Replace your resume

Add your files at:

```
public/resume/resume.pdf
public/resume/resume-preview.png
```

(Keep the same filenames, or update `resumePdfPath` / `resumePreviewImagePath` in `data/portfolio.ts`.) The preview image is what's shown on the `/resume` page — a screenshot or export of your resume's first page works well.

### 5. Update social / contact links

Edit the `socialLinks` array in `data/portfolio.ts` — add, remove, or re-point any entry (GitHub, LinkedIn, email, phone, etc.). Icons are pulled from `lucide-react`; if you add a new platform, map it to an icon in `components/SocialLinks.tsx` and `components/NavigationDrawer.tsx`.

### 6. Wire up the contact form

`components/ContactForm.tsx` currently validates input and logs the submission to the console as a placeholder. To send real messages, replace the `handleSubmit` body with a call to your email service or an API route, e.g.:

```ts
await fetch("/api/contact", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(form),
});
```

The same applies to the newsletter form in `components/Footer.tsx`.

## Design system

- Primary red: `#E31E24`
- Ink (headings/body): deep navy `#1A2233`
- Backgrounds: white / very light gray
- Fonts: a serif display face for headings, a sans-serif for body text (both loaded via `next/font/google` in `app/layout.tsx`)

Colors and shadows are defined as Tailwind theme tokens in `tailwind.config.ts` (`primary`, `ink`, `surface`), so you can retint the whole site from one place.

## Project structure

```
app/
  layout.tsx          Root layout, fonts, metadata
  page.tsx             Home
  about/page.tsx
  projects/page.tsx
  resume/page.tsx
  contact/page.tsx
  globals.css
components/
  Header.tsx           Sticky header + hamburger trigger
  NavigationDrawer.tsx  Slide-in nav panel
  Hero.tsx
  SectionHeading.tsx
  PersonalInfo.tsx
  EducationTimeline.tsx
  Skills.tsx
  Interests.tsx
  Opportunities.tsx
  ProjectCard.tsx
  ProjectCarousel.tsx
  ResumePreview.tsx
  ContactForm.tsx
  Footer.tsx
  SocialLinks.tsx
  ScrollToTop.tsx
data/
  portfolio.ts
  projects.ts
  education.ts
  skills.ts
public/
  images/
  resume/
```

## Deploying to Vercel

1. Push this project to a GitHub/GitLab/Bitbucket repo.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Framework preset: Next.js (auto-detected). No environment variables are required for the base site.
4. Deploy — Vercel will run `npm install` and `npm run build` automatically.

## Notes

- All images use local files under `public/` — there are no external image dependencies.
- The navigation drawer supports closing via the close button, clicking the backdrop, or pressing `Escape`, and traps focus on open.
- The layout is fully responsive: single-column on mobile, adapting up through tablet and desktop breakpoints, with no horizontal scrolling.
- Placeholder images (profile, project screenshots, resume preview/PDF) are simple generated graphics — swap them out with your own as described above.
