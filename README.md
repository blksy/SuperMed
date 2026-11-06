# 🏥 SUPERMED — Medical Clinic Website

Modern, responsive website for **SUPERMED**, a primary healthcare clinic located in Poznań, Poland.

The project focuses on improving accessibility to healthcare information, simplifying navigation for patients, and providing a clean, intuitive user experience across desktop and mobile devices.

Built with **React, TypeScript, Vite and Tailwind CSS**.

## 🌐 Project Overview

SUPERMED is a redesign of an existing medical clinic website, developed with a focus on usability, maintainability, responsive design, and clear presentation of patient information.

The application provides access to doctors' schedules, registration procedures, vaccination information, laboratory testing locations, announcements, and clinic contact details.

**Repository:** https://github.com/blksy/SuperMed

## ✨ Features

### Patient Information
- Doctors' schedules with search and filtering by weekday.
- Vaccination schedules and dedicated HPV vaccination information.
- Patient registration rules and home visit information.
- Downloadable patient declarations and documents.
- Laboratory testing information, including ALAB and Diagnostyka collection points.
- Ultrasound examination locations and registration details.

### Clinic Information
- About the clinic page.
- Contact page with clickable phone number and email addresses.
- Embedded Google Maps location and directions.
- Dedicated email contact for prescription requests.
- News and announcements section.
- Patient information and legal documents.

### User Experience
- Fully responsive layouts.
- Mobile-friendly navigation.
- Reusable UI components.
- Consistent typography, spacing, and color system.
- Accessible navigation and semantic HTML elements.
- Interactive links and external resource integration.

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React | Component-based user interface |
| TypeScript | Static typing and maintainability |
| Vite | Development server and production builds |
| Tailwind CSS v4 | Utility-first styling |
| React Router | Client-side routing |
| Lucide React | Icons |
| ESLint | Code quality and linting |
| Git & GitHub | Version control |

## 📁 Project Structure

```text
SuperMed/
├── public/
│   └── documents/
├── src/
│   ├── components/
│   │   ├── home/
│   │   └── layout/
│   ├── data/
│   │   └── doctors.ts
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── AboutPage.tsx
│   │   ├── ContactPage.tsx
│   │   ├── DoctorsSchedulePage.tsx
│   │   ├── LaboratoryTestsPage.tsx
│   │   ├── UltrasoundPage.tsx
│   │   ├── VaccinationsPage.tsx
│   │   ├── HPVVaccinationPage.tsx
│   │   └── ...
│   ├── types/
│   │   └── doctor.ts
│   ├── App.tsx
│   └── main.tsx
├── package.json
└── README.md
```

The structure separates reusable components, page-level views, typed data, and routing configuration.

## 🚀 Getting Started

### Prerequisites

- Node.js
- npm
- Git

### Installation

Clone the repository:

```bash
git clone https://github.com/blksy/SuperMed.git
cd SuperMed
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL displayed in your terminal.

### Production Build

```bash
npm run build
```

### Linting

```bash
npm run lint
```

## 🌿 Git Workflow

The project follows a feature-branch workflow.

| Branch | Purpose |
|---|---|
| `main` | Stable production-ready code |
| `dev` | Integration and development |
| `feature/*` | Individual features and improvements |

Typical workflow:

1. Create a feature branch from `dev`.
2. Implement and test the feature.
3. Commit changes using descriptive commit messages.
4. Merge the completed feature into `dev`.
5. Promote tested changes from `dev` to `main`.

Example commit:

```bash
git commit -m "feat: add clinic contact and about pages"
```

## 🗺️ Roadmap

Planned improvements include:

- [ ] Administrative panel for managing announcements.
- [ ] Doctor absence and holiday notices.
- [ ] Content management without editing source code.
- [ ] Improved accessibility and keyboard navigation.
- [ ] SEO metadata and structured data.
- [ ] Automated tests for important user flows.
- [ ] Further performance optimization.

## 🔐 Privacy and Patient Data

The public website is designed primarily as an informational platform.

It does not currently provide patient accounts, medical record storage, or online prescription processing.

Prescription requests are directed to the clinic's designated email address. Any future feature processing personal or medical information will require appropriate security, privacy, and data protection measures.

## 👨‍💻 Author

**Bartosz Oleksy**

GitHub: [@blksy](https://github.com/blksy)

## 📄 Project Information

This project is a website redesign and frontend implementation for SUPERMED, a medical clinic in Poznań, Poland.

Medical schedules, opening hours, and organizational information should be maintained and verified by the clinic before production publication.
