# TempMail

<div align="center">

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/tempmail)

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-22c55e?style=flat-square)
![Build](https://img.shields.io/badge/build-passing-22c55e?style=flat-square)

**A free disposable email service — generate random or custom email addresses to receive mail without creating an account.**

</div>

---

## Features

- Generate random or custom email addresses with available domains
- **Real-time** inbox updates via Server-Sent Events (SSE)
- Desktop notifications for new incoming emails
- View emails in HTML or plain text format
- Address history saved across sessions
- Global usage statistics (emails received in the last 24h)
- One-click inbox cleanup

## Tech Stack

| Technology | Version |
|---|---|
| [Next.js](https://nextjs.org/) | 15 (Pages Router) |
| [TypeScript](https://www.typescriptlang.org/) | 5 |
| [Tailwind CSS](https://tailwindcss.com/) | v4 |
| [Axios](https://axios-http.com/) | 1.x |

---

## Getting Started

### Prerequisites

- **Node.js** >= 18
- **npm** >= 9

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/zerohost356/TempMail.git
cd tempmail

# 2. Install dependencies
npm install

# 3. Set up environment variables (optional)
cp .env.example .env.local

# 4. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

---

## Environment Variables

Create a `.env.local` file from the example:

```bash
cp .env.example .env.local
```

```env
# Port the server listens on (default: 3000)
PORT=3000

# Disable Next.js telemetry (optional)
NEXT_TELEMETRY_DISABLED=1
```

> No API keys or tokens are required — the app automatically manages sessions with the upstream service.

---

## Deployment

### Deploy to Vercel (Recommended)

Click the button below to deploy instantly:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/tempmail)

**Manual steps:**

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) → **Add New Project**
3. Import your GitHub repository
4. Vercel auto-detects Next.js — click **Deploy**

### Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

### Environment Variables on Vercel

Go to **Project Settings → Environment Variables** and add:

| Key | Value | Environment |
|-----|-------|-------------|
| `NEXT_TELEMETRY_DISABLED` | `1` | Production, Preview, Development |

> `PORT` is not required on Vercel — it is managed automatically.

### ⚠️ SSE Timeout Notice

The real-time inbox feature (`/api/stream`) uses long-lived SSE connections. Vercel Serverless Functions have a **30-second timeout** on the free plan. If you need longer SSE connections, consider:

- Upgrading to **Vercel Pro** (up to 300s timeout)
- Switching to **polling** as an alternative to SSE

---

## API Reference

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/domains` | List available email domains |
| `GET` | `/api/generator-email` | Generate a random email address |
| `GET` | `/api/custom-email?username=&domain=` | Generate a custom email address |
| `GET` | `/api/inbox?inbox=` | Fetch emails in an inbox |
| `GET` | `/api/email/[id]?inbox=` | Get a specific email's content |
| `DELETE` | `/api/clear?inbox=` | Delete all emails in an inbox |
| `GET` | `/api/stats` | Get global usage statistics |
| `GET` | `/api/stream?inbox=` | SSE stream for real-time updates |

---

## Project Structure

```
├── components/
│   └── Layout.tsx         # Shared layout (header, navigation)
├── lib/
│   ├── tempmail.ts        # Upstream service integration
│   └── cookies.ts         # Cookie management utilities
├── pages/
│   ├── index.tsx          # Main application page
│   ├── docs.tsx           # Documentation page
│   ├── statistics.tsx     # Statistics page
│   ├── domains.tsx        # Available domains page
│   └── api/               # API route handlers
├── public/                # Static assets (icons, manifest)
├── styles/                # Global CSS
└── scripts/               # API testing scripts
```

---

## License

This project is licensed under the [MIT License](LICENSE).
