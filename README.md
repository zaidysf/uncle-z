# Uncle Z's Portfolio

A VS Code-inspired portfolio website built with Nuxt 3, featuring a modern tech stack and a sleek dark theme interface.

## 🌟 Features

- 🎨 VS Code-inspired interface
- 🌙 Dark theme
- 📱 Responsive design
- 🔄 Real-time GitHub integration
- 📧 Contact form with Mailgun integration
- 📄 PDF resume export
- 🔍 SEO optimized
- 🚀 Server-side rendering

## 🛠 Tech Stack

- **Frontend Framework**: Vue.js 3 / Nuxt 3
- **Styling**: TailwindCSS
- **Language**: TypeScript
- **Email Service**: Mailgun
- **Deployment**: Vercel/Netlify

## 🚀 Getting Started

### Prerequisites

- Node.js v20 or higher
- npm or yarn
- Git

### Installation

1. Clone the repository
```bash
git clone https://github.com/zaidysf/unclez.git
cd unclez
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Create environment file
```bash
cp .env.example .env
```

4. Configure environment variables in `.env`:
```env
# GitHub API Tokens
GITHUB_TOKEN_ONE=your_github_token_here
GITHUB_TOKEN_TWO=your_github_token_here

# Mailgun Configuration
MAILGUN_DOMAIN=your_mailgun_domain_here
MAILGUN_API_KEY=your_mailgun_api_key_here
MAILGUN_FROM=noreply@uncle-z.com

# Site Configuration
NUXT_PUBLIC_SITE_URL=https://uncle-z.com
```

5. Run development server
```bash
npm run dev
# or
yarn dev
```

Visit `http://localhost:3000` to see the site.

## 📦 Building for Production

```bash
# Generate static files
npm run generate
# or
yarn generate

# Preview production build
npm run preview
# or
yarn preview
```

## 🌐 Deployment

### Vercel

1. Push your code to GitHub
2. Import your repository in Vercel
3. Configure environment variables
4. Deploy

### Netlify

1. Push your code to GitHub
2. Import your repository in Netlify
3. Configure environment variables
4. Deploy

## 📁 Project Structure

```
unclez/
├── components/        # Vue components
├── pages/            # Application pages
├── public/           # Static files
│   ├── logos/        # Logo assets
│   └── resume.pdf    # Downloadable resume
├── server/           # Server-side code
│   └── api/         # API endpoints
├── app.vue           # App entry
├── nuxt.config.ts    # Nuxt configuration
└── package.json      # Project dependencies
```

## 🔧 Configuration

### GitHub Integration

1. Create a GitHub personal access token with the following permissions:
   - `repo`
   - `read:user`
   - `user:email`

2. Add the token to your environment variables:
   ```env
   GITHUB_TOKEN_ONE=your_token_here
   ```

### Mailgun Setup

1. Create a Mailgun account
2. Get your API key and domain
3. Add to environment variables:
   ```env
   MAILGUN_DOMAIN=your_domain
   MAILGUN_API_KEY=your_api_key
   MAILGUN_FROM=noreply@your_domain
   ```

## 🎨 Customization

### Themes

The site uses a VS Code-inspired dark theme by default. Colors can be customized in:
- `tailwind.config.js` for global theme colors
- Individual component styles for specific customizations

### Content

Update your information in:
- `components/ProfileTab.vue` for personal info
- `components/ExperienceTab.vue` for work experience
- `components/SkillsTab.vue` for skills
- `components/EducationTab.vue` for education
- `public/resume.pdf` for downloadable resume

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check [issues page](https://github.com/zaidysf/unclez/issues).

## 📧 Contact

Zaid Yasyaf - [zaid.ug@gmail.com](mailto:zaid.ug@gmail.com)

Project Link: [https://uncle-z.com](https://uncle-z.com)
