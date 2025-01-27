# Story Pod

A modern web application for preserving personal stories and memories through audio and video recordings.

## Tech Stack

### Frontend
- React (TypeScript)
- Vite as build tool
- TailwindCSS for styling
- Radix UI components
- React Query for data fetching
- RecordRTC for audio recording

### Backend
- Node.js with Express
- TypeScript
- PostgreSQL database
- Drizzle ORM
- Passport.js for authentication
- Multer for file uploads
- Nodemailer for emails

### APIs & Services
- ElevenLabs for text-to-speech
- OpenAI for text processing

### Development & Deployment
- Replit for development and hosting
- Nix for package management
- ESBuild for server-side bundling

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/MarkFNYC/story-pod.git
cd story-pod
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm run dev
```

## Project Structure

```
/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/          # Page components
│   ├── hooks/          # Custom React hooks
│   ├── services/       # API services
│   ├── types/          # TypeScript types/interfaces
│   ├── utils/          # Utility functions
│   └── styles/         # Global styles
├── public/             # Static assets
└── server/            # Backend code
```

## Contributing

Please read our contributing guidelines before submitting pull requests.

## License

MIT