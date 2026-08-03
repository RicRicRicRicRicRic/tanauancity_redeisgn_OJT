# Tanauan City Government Website - Cline AI Rules (`.clinerules`)

You are Cline, an autonomous AI programming assistant working on the official **Tanauan City Government Website** codebase in TypeScript React. Follow these architectural directives, design standards, and coding conventions strictly.

---

## 1. Core Directives & Context

- **Project:** Tanauan City Government Portal (TypeScript, React, Tailwind CSS).
- **Compliance:** All features must adhere to **WCAG 2.1 AA** accessibility standards and support multi-language localization via `src/i18n/`.
- **Primary Source of Truth:** This file is the complete architectural and coding standard for the project.

---

## 2. Directory Architecture Overview

The source code (`src/`) follows a hybrid modular and feature-driven architecture that separates low-level primitives from business domains, localized content, and global configurations.

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

## 3. Component Placement Rules (Strict Enforcement)

When creating or moving files within `src/`, adhere strictly to the following directory structure and conventions:

Directory Structure & Responsibilities

1. `src/components/ui/` (Atoms & Primitives)
* **Scope:** Low-level, stateless, or minimal-state building blocks with no domain business logic.
* **Examples:** `Button.tsx`, `Input.tsx`, `Modal.tsx`, `FloatingIcon.tsx`
* **Requirements:**
  * Must be fully **WAI-ARIA compliant**.
  * Must be fully **keyboard-navigable**.

---

2. `src/components/common/` (Complex Shared Widgets)
* **Scope:** Composite widgets used across multiple pages that manage internal state or complex interactions.
* **Examples:** `Slideshow.tsx`, `NoticeBanner.tsx`

---
3. `src/components/layout/` (Structural Framework)
* **Scope:** Core layout shells only.
* **Allowed Files:** `Header.tsx`, `Footer.tsx`, `Sidebar.tsx`, `AccessibilityBar.tsx`

---

4. `src/features/<domain>/components/` (Feature Isolation)
* **Scope:** Any component tied exclusively to a specific domain (e.g., services, transparency, news).
* **Strict Rule:** **Never** place domain-specific forms, tables, or business logic in the global `src/components/` directory.

## 4. Coding Standards & Conventions
TypeScript & Strict Typing

Absolutely no any types allowed.
Explicitly type all component props, state objects, and API response contracts.
Place shared types in src/types/ or feature-specific types in src/features/<domain>/types/.

Localization (i18n)

Never hardcode user-facing strings in components.
Always use translation keys from src/i18n/.

Accessibility (WCAG 2.1 AA)

All interactive elements must use proper aria-* attributes.
Integrate cleanly with src/store/accessibilityStore.ts for font sizing, high-contrast mode, and screen-reader support.
Color contrast must meet public-sector accessibility guidelines.

Styling & Assets

Use Tailwind CSS classes styled according to src/assets/styles/.
Official city seals, logos, and typography must come from src/assets/images/ and src/assets/fonts/.


## 5. Git & Code Modification Guidelines
When implementing changes, always check file paths against the src/ hierarchy defined above.
Ensure all code builds cleanly and passes TypeScript type checking (tsc --noEmit) before completing any task.
Branch Naming: feature/, bugfix/, or hotfix/ followed by a descriptive kebab-case name (e.g., feature/transparency-seal-table).
Pull Requests: Must pass TypeScript compilation, linting, and accessibility audits before merging into main.

text