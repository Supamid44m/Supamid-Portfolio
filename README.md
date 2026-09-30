# My Portfolio

Personal portfolio website of **Supamid Akarachat (Mart)** — Software Developer.

A single-page site with tabbed sections for About Me, Education, Work Experience, Projects, Certificates, and a CV/Resume viewer. It follows the system light/dark theme and works on mobile.

## Tech Stack

- [Next.js 16](https://nextjs.org) (App Router) + React 19
- TypeScript
- [MUI v9](https://mui.com) (Material UI + Lab) with Emotion
- [Tailwind CSS v4](https://tailwindcss.com)
- pnpm

## Requirements

- Node.js **20.9 or newer**
- pnpm **11** (enable it with `corepack enable`, or install with `npm install -g pnpm`)

## Installation

```bash
git clone <repository-url>
cd my-portfolio
pnpm install
```

## Running

### Development

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000). The page reloads automatically when you edit files.

### Production

```bash
pnpm build
pnpm start
```

`pnpm start` serves the build on port 3000. Use a different port with `pnpm start -p 4000`.

### Lint

```bash
pnpm lint
```

## Project Structure

```
app/
├── layout.tsx              # Root layout, fonts, metadata, providers
├── page.tsx                # Home page: Header + tabs + Footer
├── globals.css             # Tailwind import and page colors
├── component/              # UI components, one folder per section
│   ├── providers.tsx       # MUI theme + Emotion SSR cache
│   ├── header.tsx
│   ├── frontPage.tsx       # Tab navigation and content card
│   ├── aboutMe/ education/ workExperience/
│   ├── projects/ certificate/ resume/
│   └── timelineList.tsx, sectionTitle.tsx, pdfViewer.tsx, ...
├── constants/aboutMe.ts    # Name, role, birthdate, contacts
├── data/                   # Tabs, education, work experience, project data
├── hooks/themeProvider.ts  # MUI theme (colors, typography, light/dark)
└── utils/dateUtils.ts
public/
├── rick.png                # Profile image
└── pdf/SUPAMID_CV.pdf      # Resume shown in the CV / Resume tab
```

## Editing Content

| What to change | Where |
| --- | --- |
| Name, role, contacts | `app/constants/aboutMe.ts` |
| Education | `app/data/education.tsx` |
| Work experience | `app/data/workExperience.tsx` |
| Projects | `app/data/mock/mockProjectData.ts` |
| Tab order / new tabs | `app/data/tabs.tsx` (`sequence` controls order) |
| Resume PDF | Put the file in `public/pdf/` and update the path in `app/component/resume/resume.tsx` |
| Profile image | `public/rick.png` |
| Theme colors and font | `app/hooks/themeProvider.ts` |

## Deployment

The app builds to static pages, so it can be deployed to [Vercel](https://vercel.com/new) or any host that runs Node.js (`pnpm build && pnpm start`).
