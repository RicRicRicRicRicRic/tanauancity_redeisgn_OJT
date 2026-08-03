# Tanauan City Government Website - Agent & Developer Skills Guide (`skills.md`)

This document outlines the architectural standards, conventions, and routing rules for developing and maintaining the official **Tanauan City Government Website** codebase in TypeScript React. All AI agents and human contributors must follow these guidelines to ensure consistency, WCAG compliance, and maintainability.

---

## 1. Directory Architecture Overview

The source code (`src/`) strictly follows a hybrid modular and feature-driven architecture separating low-level primitives from business domains, localized content, and global configurations.

```text
src/
├── api/                  # API clients, endpoints, and data fetching services
│   ├── client.ts         # Base Axios/Fetch configuration
│   └── servicesApi.ts    # Endpoints for government services, applications, etc.
│
├── assets/               # Static assets
│   ├── fonts/            # Official typography files
│   ├── images/           # Agency logos, seals, hero banners
│   └── styles/           # Global CSS, Tailwind config, or theme variables
│
├── components/           # Globally shared application components
│   ├── layout/           # Structural layout components
│   │   ├── Header.tsx    # Agency branding, global navigation
│   │   ├── Footer.tsx    # Mandatory government links (Privacy, FOI, Hotlines)
│   │   ├── Sidebar.tsx   # Quick links, citizen portal access
│   │   └── AccessibilityBar.tsx # Font resizer, high-contrast toggle
│   │
│   ├── ui/               # Low-level atomic primitives (Design system)
│   │   ├── Button.tsx
│   │   ├── FloatingIcon.tsx # E.g., feedback widget or accessibility helper
│   │   ├── Modal.tsx
│   │   └── Input.tsx
│   │
│   └── common/           # Compound or reusable complex widgets
│       ├── Slideshow.tsx # Hero carousel for announcements
│       └── NoticeBanner.tsx # Emergency alerts or advisory tickers
│
├── features/             # Feature-driven modules (Domain-specific business logic)
│   ├── services/         # Citizen transactions (e.g., permit applications, renewals)
│   │   ├── components/   # Service-specific UI elements
│   │   ├── hooks/        # Service-related state/logic
│   │   └── types/        # Service data models
│   │
│   ├── transparency/     # Transparency Seal and public documents
│   │   ├── components/   # Financial reports tables, budget viewers
│   │   └── data/         # Static or fetched transparency records
│   │
│   └── news/             # Press releases, bulletins, announcements
│       ├── components/   # Article cards, list views
│       └── pages/        # News archive and detail views
│
├── hooks/                # Global custom hooks (e.g., useTheme, useA11y)
│
├── i18n/                 # Localization & Multi-language support (critical for gov sites)
│   ├── en/
│   │   └── translation.json
│   └── localLang/        # Regional or secondary official language files
│
├── pages/                # Route-level page components (views)
│   ├── HomePage.tsx
│   ├── TransparencyPage.tsx
│   ├── ServicesPage.tsx
│   └── ContactPage.tsx
│
├── routes/               # Routing configuration (e.g., React Router setup)
│   └── AppRoutes.tsx
│
├── store/                # Global state management (Zustand, Redux, Context API)
│   └── accessibilityStore.ts # Manages high-contrast, font size, screen reader modes
│
├── types/                # Global TypeScript interfaces and type definitions
│   ├── api.types.ts
│   └── user.types.ts
│
├── utils/                # Helper functions, formatters (e.g., date formatting, validators)
│   ├── formatters.ts
│   └── validators.ts
│
├── App.tsx               # Root component wrapping providers
└── main.tsx              # Application entry point
```

---

## 2. Component Placement Rules

When deciding where a new component belongs, adhere strictly to these rules:

1. **`src/components/ui/` (Atoms & Primitives)**
   - Use for stateless or minimal-state building blocks with no domain business logic (e.g., buttons, inputs, modals, floating action icons).
   - Must be fully accessible (WAI-ARIA compliant, keyboard navigation supported).

2. **`src/components/common/` (Complex Shared Widgets)**
   - Use for composite widgets used across multiple pages that manage complex interactions or internal state (e.g., `Slideshow.tsx` for hero announcements, `NoticeBanner.tsx` for emergency advisories).

3. **`src/components/layout/` (Structural Framework)**
   - Reserved for core layout shells (`Header`, `Footer`, `Sidebar`, `AccessibilityBar`) that wrap around page routes.

4. **`src/features/<domain>/components/` (Feature Isolation)**
   - Use when a component is tied exclusively to a specific government domain module (e.g., `services`, `transparency`, `news`). Do not place domain-specific tables or forms in global `components/`.

---

## 3. Coding Standards & Conventions

### TypeScript & Strict Typing
- **No `any` Types:** All component props, API responses, and state models must be explicitly typed using interfaces or type aliases.
- **Data Models:** Place shared domain types in `src/types/` or feature-specific types in `src/features/<domain>/types/`.

### Accessibility (WCAG 2.1 AA Compliance)
- All interactive elements must support proper `aria-*` attributes.
- The website must integrate seamlessly with `src/store/accessibilityStore.ts` to allow text resizing, high-contrast mode toggles, and screen reader optimizations.
- Color palettes must meet contrast ratios for public sector accessibility guidelines.

### Localization (`i18n`)
- Hardcoding static text in UI components is prohibited. All user-facing labels, headings, and notices must use translation keys managed under `src/i18n/`.

### Styling & Assets
- Use Tailwind CSS configured via `src/assets/styles/`.
- Official Tanauan City seals, logos, and typography must be stored under `src/assets/images/` and `src/assets/fonts/`.

---

## 4. Git & Contribution Workflow
1. **Branch Naming:** `feature/`, `bugfix/`, or `hotfix/` followed by a descriptive kebab-case name (e.g., `feature/transparency-seal-table`).
2. **Pull Requests:** Must pass TypeScript compilation checks (`tsc --noEmit`), linting rules, and accessibility audits before merging into `main`.
