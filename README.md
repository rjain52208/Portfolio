# Riddhi Jain - Professional Portfolio

A modern, responsive portfolio website showcasing my work as a Full Stack Developer, Data Analyst, and ML Engineer.

## Features

✨ **Special Features:**
- 🎨 Beautiful, modern design with gradient accents
- 🌓 Dark/Light mode toggle with persistent theme
- ✨ Smooth animations and transitions using Framer Motion
- 🎯 Interactive particle background effect
- 📱 Fully responsive design for all devices
- 🚀 Optimized performance with Next.js 14
- 🎭 Scroll-triggered animations
- 💫 Animated skill progress bars
- 🎪 Interactive project cards
- 📧 Contact form with validation

## Tech Stack

- **Framework:** Next.js 14 (React 18)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** React Icons
- **TypeScript:** Full type safety
- **Deployment Ready:** Vercel, Netlify, or any static host

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx             # Main page component
│   └── globals.css          # Global styles and animations
├── components/
│   ├── Navigation.tsx       # Header navigation with theme toggle
│   ├── Hero.tsx             # Hero section with animated intro
│   ├── About.tsx            # About section
│   ├── Skills.tsx           # Skills with progress bars
│   ├── Experience.tsx       # Professional experience timeline
│   ├── Projects.tsx         # Featured projects showcase
│   ├── Education.tsx        # Education section
│   ├── Contact.tsx          # Contact form and info
│   ├── Footer.tsx           # Footer component
│   ├── ThemeProvider.tsx    # Dark/light theme context
│   └── ParticlesBackground.tsx # Animated background particles
└── public/                  # Static assets
```

## Customization

### Update Personal Information

Edit the following files to update your information:
- `components/Hero.tsx` - Hero section content
- `components/About.tsx` - About section
- `components/Skills.tsx` - Skills and certifications
- `components/Experience.tsx` - Work experience
- `components/Projects.tsx` - Project showcase
- `components/Education.tsx` - Education details
- `components/Contact.tsx` - Contact information

### Theme Colors

Modify `tailwind.config.js` to customize the color scheme:
- Primary colors: Blue gradient
- Accent colors: Purple and Pink gradients

### Animations

Adjust animation timings and effects in individual component files using Framer Motion props.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with default settings

### Other Platforms

The site can be deployed to any static hosting service:
- Netlify
- GitHub Pages
- AWS Amplify
- Cloudflare Pages

## License

This project is open source and available under the MIT License.

## Contact

- **Email:** rjain5@binghamton.edu
- **LinkedIn:** [riddhijain2208](https://www.linkedin.com/in/riddhijain2208)
- **Location:** New York, NY

---

Made with ❤️ using Next.js and Tailwind CSS
