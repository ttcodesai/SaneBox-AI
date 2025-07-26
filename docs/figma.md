# Figma Structure & Design Guidelines
## SaneBox-AI

### Live Figma Project
**Design File:** [SaneBox-AI Community Figma](https://www.figma.com/make/PXJ0KGNtTzlq4oEB8gkhMd/sanebox-ai--Community-?node-id=0-1&t=M2vtTQUK5w1MEQYc-1)

---

### 1. Overview

**Document Purpose:**  
This guide provides a comprehensive outline for designing SaneBox-AI using Figma, including UI/UX philosophy, key page layouts, reusable components, accessibility principles, and future extensibility. It enables designers, developers, and stakeholders to stay aligned as the product evolves.

**Target Audience:**  
- UI/UX designers
- Frontend developers
- Product managers
- QA & stakeholders

---

### 2. Design Principles

- **Minimalist & Clean:** Zero-clutter interfaces, clear visual hierarchy, and lots of whitespace.
- **Modern & Calming:** Tech-forward but human, with a color palette that inspires trust and productivity.
- **Accessible:** WCAG 2.1 AA compliance, ARIA support, keyboard navigation.
- **Consistent Branding:** Brand colors, typography, and iconography used throughout.
- **Mobile-first:** Responsive/adaptive layouts for desktop, tablet, and mobile.

---

### 3. Brand Guidelines

- **Logo:** Simple "SaneBox AI" logotype with a calming color accent.
- **Colors:**  
  - Primary: Soft blue / teal (#2E80FF or #00B8A9)  
  - Secondary: Light gray (#F7F9FA), White (#FFFFFF)  
  - Accent: Green (#2AD881), Red (#FF4060) for status/action  
- **Typography:**  
  - Headers: Inter / SF Pro Display / Roboto, bold, 1.5x-2x base size  
  - Body: Regular, 1x base size, high readability  
- **Iconography:**  
  - Rounded, minimal, from Feather, Lucide, or Material Icon sets  
  - Unified stroke thickness

---

### 4. App Structure & Page Map

**A. App Shell / Navigation**
- Header with logo, user avatar (dropdown menu: Settings, Logout)
- Sidebar (desktop) or bottom nav (mobile/tablet):  
  - Dashboard / Today’s Highlights  
  - Categories  
  - Unsubscribe / Block  
  - Settings

**B. Main Pages**

1. **Login / Onboarding**
    - SaneBox AI logo & tagline
    - “Sign in with Google” button
    - Short product pitch / carousel (for first-time users)

2. **Dashboard (Today’s Highlights)**
    - Date & personalized greeting
    - Section: AI-picked priority emails as cards
    - Each card: Sender, subject, summary, time, category tag, quick actions (Read, Mark Done, Pin)
    - Filters/search

3. **Categories**
    - Tabs/Chips: Promotions, Finance, Travel, Other, All
    - Each tab: List or table of emails under that category
    - Bulk actions: Select All, Mark Read, Archive, etc.
    - Search/filter

4. **Unsubscribe / Block Suggestions**
    - Sender clusters: Each card = 1 sender/newsletter
    - Stats: # emails, open %, last received, engagement score
    - Recommended action: Unsubscribe / Block / Ignore (with “why”)
    - Action buttons: Unsubscribe (with link), Block, Add to Whitelist
    - Bulk actions: Select All / Unsubscribe All

5. **Settings**
    - Custom rules editor (for Today’s Highlights)
    - Whitelist/blacklist management
    - Notification preferences (email, push)
    - Privacy/data policy link

---

### 5. Core Components

- **Buttons:** Primary, secondary, destructive (clearly distinguishable)
- **Cards:** Email, sender, highlights
- **Chips/Tags:** For categories (Promotion, Finance, etc.), status indicators (Unread, Done)
- **Lists/Tables:** Email lists, sender clusters, settings options
- **Search/Filter Bar:** At top of categories/highlights
- **Modals/Dialogs:** Confirmation, onboarding, errors, success
- **Toasts/Banners:** For quick feedback (action success, errors)
- **Avatar/User Menu:** For account management

---

### 6. Interaction & Flow

- **First Login Flow:**  
    Welcome → Google OAuth → Permission → Initial fetch & analysis → Dashboard

- **Unsubscribe/Block Flow:**  
    Open Unsubscribe page → See sender list → Select senders → Click Unsubscribe/Block → Confirm in modal → Success banner

- **Custom Rule Flow:**  
    Go to Settings → Edit rules → Save → See effect immediately on Dashboard

- **Bulk Actions:**  
    Select multiple emails/senders → Bulk action (archive, block, mark as read) → Toast feedback

---

### 7. Accessibility

- Color contrast AA-compliant for all text & interactive elements
- Keyboard-navigable menus, buttons, and forms
- Focus rings for inputs/buttons
- Screen reader-friendly labels and ARIA tags

---

### 8. Mobile Responsiveness

- Dashboard: Cards stack vertically, easy thumb actions
- Navigation: Bottom tab bar replaces sidebar
- All dialogs/modal full-screen on mobile
- Bulk actions: Long-press or checkboxes

---

### 9. Figma File Organization

**Recommended Figma pages:**

1. `00-Branding`: Logo, color palette, typography, buttons, tags
2. `01-Onboarding`: Login, Google Auth, carousel
3. `02-Dashboard`: Today’s Highlights, cards, empty state
4. `03-Categories`: Tabs, lists, tables, bulk actions
5. `04-UnsubscribeBlock`: Sender clustering, actions, modals
6. `05-Settings`: Rules editor, whitelists, notifications
7. `06-Components`: Buttons, inputs, modals, toasts, avatars
8. `07-Mobile`: Key screens at 375px width
9. `99-StyleGuide`: All design tokens, icons, spacing, elevation

---

### 10. Extensibility / Future-Proofing

- Components and layouts built as variants and auto-layouts in Figma for easy scaling
- Ready to add tabs/pages for:  
    - Travel Aggregation  
    - Bill/Invoice Management  
    - Health Reports  
    - Third-party integrations (Slack, Notion, Calendar)
- Design tokens set up for future dark mode

---

### 11. Style Keywords for Figma Prompts
Minimalist, SaaS, AI, Card UI, Soft blue, White background, Rounded corners, Tag chips, Bulk action, Sidebar, Bottom tab, Microinteraction, Accessible, Modern, Calm, No clutter, Focused

---

### 12. Handoff & Collaboration Notes

- Use Figma auto-layouts & variants for scalable components
- Leverage design system libraries (Ant Design, Material UI) where possible
- Document all interaction states and error/success flows
- Keep Figma comments/annotations up to date for devs

---

**Last Updated:** 2024-07-26  
**Owner:** Taylor Yang 
