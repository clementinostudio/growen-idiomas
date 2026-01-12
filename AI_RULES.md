# AI Editor Rules and Technical Stack Overview

This document outlines the technical stack, architectural conventions, and specific library usage rules for the Growen Idiomas application. Adherence to these rules ensures consistency, maintainability, and alignment with project standards.

## Technical Stack Summary

*   **Framework:** React (v19+), utilizing functional components and hooks.
*   **Language:** TypeScript (mandatory for all new files and components).
*   **Styling:** Tailwind CSS (mandatory for all styling, including responsiveness).
*   **Build Tool:** Vite.
*   **Routing:** React Router (routes should be defined and maintained in `src/App.tsx`).
*   **Icons:** `lucide-react`.
*   **Design Principle:** All designs must be responsive and mobile-first.
*   **Component Structure:** Components must be small, focused, and reside in `src/components/`.

## Library Usage Rules

| Component Type | Mandatory Library | Notes |
| :--- | :--- | :--- |
| **UI Components** | shadcn/ui (Radix UI) | Prioritize using or adapting existing shadcn/ui components for standard elements (Buttons, Dialogs, Forms, etc.). |
| **Icons** | `lucide-react` | Use exclusively for all visual icons. |
| **Notifications** | `react-hot-toast` (if installed) | Use for all user feedback (success, error, loading). |
| **Data/Auth** | Supabase (if integrated) | If the user requests database access, authentication, or server-side functions, prompt for Supabase integration first. |

## Architectural Conventions

1.  **File Structure:**
    *   Components must reside in `src/components/`.
    *   Pages (routes) must reside in `src/pages/`.
    *   Utility files (types, constants) must reside in `src/` or appropriate subdirectories.
2.  **Code Quality:** Prioritize simplicity, elegance, and readability. Avoid over-engineering.
3.  **Error Handling:** Do not implement `try/catch` blocks unless explicitly requested, allowing errors to bubble up for debugging.