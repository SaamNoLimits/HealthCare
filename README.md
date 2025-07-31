# 🏥 Portail Patient - Digital Medical Record Portal

> A modern and intuitive patient portal that allows patients to view their medical history, visualize appointments, and access personalized health recommendations.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Available-brightgreen)](https://health-care-main.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-14+-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Enabled-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC)](https://tailwindcss.com/)

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Quick Start](#-quick-start)
- [Project Structure](#-project-structure)
- [Key Pages](#-key-pages)
- [Configuration](#-configuration)
- [Deployment](#-deployment)
- [Contributing](#-contributing)

## 🌟 Overview

The **Portail Patient** is a comprehensive digital healthcare solution designed to streamline patient experience by providing easy access to medical records, appointment management, and personalized health recommendations. Built with modern web technologies, it offers a responsive, accessible, and user-friendly interface.

### 🎯 Key Objectives

- **Centralized Health Data**: All medical information in one secure location
- **Enhanced Patient Experience**: Intuitive interface with modern UX principles
- **Mobile-First Design**: Fully responsive across all devices
- **Accessibility**: Compliant with web accessibility standards
- **Scalable Architecture**: Ready for integration with real healthcare APIs

## ✨ Features

### 🏠 **Dashboard**
- **Personalized Welcome** with patient's first name
- **Latest Appointment Overview** (type, date, physician)
- **Daily Health Recommendation** (e.g., "Drink 1.5L of water", "Walk for 30 minutes")
- **Quick Statistics**: upcoming appointments, active treatments, allergies, recommendations
- **Quick Actions** for easy navigation to different sections

### 📅 **Appointment Management** (`/rendez-vous`)
- **Complete Appointment List** (past and upcoming)
- **Detailed Information**: physician, specialty, date, location, status
- **Smart Filters**: "All", "Upcoming", "Past"
- **Dynamic Counters** and intuitive interface

### 📋 **Medical Records** (`/dossier`)
- **Complete Medical History** with detailed records
- **Allergies & Contraindications** management
- **Current Treatments** with status tracking
- **Reusable Components** for each section

### 💡 **Health Recommendations** (`/recommandations`)
- **Personalized Medical Advice** (mocked data)
- **Categories**: Sleep, Nutrition, Physical Activity
- **Category Filters** with interactive tabs
- **Modern Interface** with detailed cards

### 🎨 **User Interface**
- **Responsive Design** adapted for all screen sizes
- **Dark/Light Mode** with automatic toggle
- **Smooth Animations** on component load
- **Medical Theme** with appropriate healthcare colors
- **Accessibility Features** with proper focus states and contrast

## 🛠️ Tech Stack

| Technology | Purpose | Version |
|------------|---------|---------|
| **Next.js** | React Framework | 14+ |
| **TypeScript** | Type Safety | Latest |
| **Tailwind CSS** | Styling | Latest |
| **React Context** | Global State Management | - |
| **Axios** | HTTP Client | Latest |
| **Classnames** | Conditional CSS Classes | Latest |

## 🚀 Quick Start

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (version 18 or higher)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/portail-patient.git
   cd Portail-Patient-main
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint code checking |
| `npm run type-check` | Run TypeScript type checking |

## 📁 Project Structure

```
Portail-Patient-main/
├── 📁 app/                     # Next.js App Router pages
│   ├── 📄 layout.tsx          # Root layout component
│   ├── 📄 page.tsx            # Homepage
│   ├── 📁 rendez-vous/        # Appointments management
│   │   └── 📄 page.tsx
│   ├── 📁 dossier/            # Medical records
│   │   └── 📄 page.tsx
│   └── 📁 recommandations/    # Health recommendations
│       └── 📄 page.tsx
├── 📁 components/             # Reusable UI components
│   ├── 📄 Header.tsx          # Navigation header
│   ├── 📄 Footer.tsx          # Page footer
│   ├── 📄 AppointmentCard.tsx # Appointment display card
│   ├── 📄 HealthTipCard.tsx   # Health recommendation card
│   └── 📄 FilterTabs.tsx      # Filter tabs component
├── 📁 context/               # React Context providers
│   └── 📄 ThemeContext.tsx   # Theme management
├── 📁 data/                  # Mock data files
│   ├── 📄 rendezvous.json    # Appointments data
│   ├── 📄 dossier.json       # Medical records data
│   └── 📄 recommendations.json # Health tips data
├── 📁 public/               # Static assets
├── 📄 tailwind.config.js    # Tailwind configuration
├── 📄 tsconfig.json         # TypeScript configuration
└── 📄 package.json          # Project dependencies
```

## 📖 Key Pages

### 🏠 Homepage (`/`)
The main dashboard providing an overview of the patient's health status with quick access to all major features.

### 📅 Appointments (`/rendez-vous`)
Comprehensive appointment management with filtering capabilities and detailed appointment information.

### 📋 Medical Records (`/dossier`)
Complete medical history including past conditions, current treatments, and allergy information.

### 💡 Recommendations (`/recommandations`)
Personalized health advice categorized by type (sleep, nutrition, exercise) with filtering options.

## 📊 Mock Data Structure

The application uses JSON files to simulate API responses:

### `rendezvous.json`
```json
{
  "appointments": [
    {
      "id": "1",
      "doctor": "Dr. Martin",
      "specialty": "Cardiologue",
      "date": "2024-02-15",
      "time": "14:30",
      "location": "Cabinet Medical Central",
      "status": "confirmed"
    }
  ]
}
```

### `dossier.json`
```json
{
  "patient": {
    "name": "Jean Dupont",
    "birthDate": "1985-03-15",
    "allergies": ["Pénicilline", "Arachides"],
    "currentTreatments": [...]
  }
}
```

## ⚙️ Configuration

### Tailwind CSS Customization
The project includes custom medical-themed colors:

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'medical-primary': '#2563eb',
        'medical-secondary': '#06b6d4',
        'medical-accent': '#10b981',
        'medical-warning': '#f59e0b',
        'medical-error': '#ef4444',
      }
    }
  }
}
```

### Theme Context
Global theme management with dark/light mode support:

```typescript
// context/ThemeContext.tsx
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  // ... theme logic
};
```

## 🌐 Deployment

The application is optimized for deployment on various platforms:

### Vercel (Recommended)
```bash
npm run build
vercel --prod
```

### Netlify
```bash
npm run build
# Deploy dist folder
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 🧪 Testing

```bash
# Run unit tests
npm run test

# Run e2e tests
npm run test:e2e

# Generate coverage report
npm run test:coverage
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

### Development Guidelines

- Follow TypeScript best practices
- Use conventional commit messages
- Ensure responsive design
- Maintain accessibility standards
- Write comprehensive tests

## 📝 License

This project is developed as part of a Next.js educational exercise.

## 🙏 Acknowledgments

- **Next.js Team** for the amazing framework
- **Tailwind CSS** for the utility-first CSS framework
- **Vercel** for seamless deployment
- **Healthcare Community** for inspiration and requirements

---

<div align="center">

**Developed with ❤️ to improve patient experience**

[🌐 Live Demo](https://health-care-main.vercel.app/) • [📚 Documentation](https://github.com/your-username/portail-patient/wiki) • [🐛 Report Bug](https://github.com/your-username/portail-patient/issues)

</div>
