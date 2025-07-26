# Backend RFC / Technical PRD
## SaneBox-AI

---

### 1. Overview

**Purpose:**  
Define the backend architecture, API endpoints, service contracts, data flows, security, and scalability considerations for SaneBox-AI's MVP (v1.0). This document aligns engineering efforts and enables a robust, scalable, and privacy-focused backend to support all core product features.

**Audience:**  
- Backend engineers  
- API developers  
- Product managers  
- QA & DevOps

---

### 2. Core Goals & Responsibilities

- Securely connect to Gmail (OAuth 2.0), fetch and process emails for each user.
- Run AI-powered classification and unsubscribe/block suggestion pipelines.
- Aggregate and return results for frontend dashboards and user actions.
- Respect privacy: never store email content unless explicitly allowed by the user.
- Modular, stateless, scalable API design.
- Prepare for extensibility: future multi-provider, team, and analytics features.

---

### 3. Technology Stack

- **Language:** Python (preferred, FastAPI) or Node.js (Express)
- **AI Integration:** OpenAI GPT API (for classification, summarization)
- **Database:** MongoDB (user profiles, tokens, rules, no email bodies)
- **Cache:** Redis (for rate limiting, session, temp caching)
- **Infra:** AWS/Azure/GCP or Dockerized container for cloud deploy
- **Auth:** Google OAuth 2.0
- **Testing:** Pytest/Jest, Swagger/OpenAPI for docs

---

### 4. System Architecture

```
Client (Web) → API Gateway → Auth Service → Gmail Service
                                    ↓
                            AI Processing Pipeline
                                    ↓
                            Aggregation/Results Service
                                    ↓
                            DB (User, Rules, etc)
```

**Key Flows:**
- User login triggers OAuth handshake; token stored encrypted
- Email fetch triggered by user or on demand; emails processed via AI pipeline
- Aggregated results (categories, highlights, suggestions) returned to client
- User rules/settings stored in DB, never email bodies/content

---

### 5. API Endpoints

| Endpoint                       | Method | Auth  | Description                                   |
|--------------------------------|--------|-------|-----------------------------------------------|
| `/api/auth/google`             | GET    | No    | OAuth login initiation                        |
| `/api/auth/callback`           | GET    | No    | OAuth callback/redirect handler               |
| `/api/user/profile`            | GET    | Yes   | Get user profile/settings                     |
| `/api/emails/fetch`            | POST   | Yes   | Fetch recent emails from Gmail (token needed) |
| `/api/emails/classify`         | POST   | Yes   | AI classification of emails                   |
| `/api/emails/unsubscribe_suggest` | POST | Yes   | Suggest unsubscribe/block per sender          |
| `/api/emails/summary`          | POST   | Yes   | Aggregate "Today's Highlights"                |
| `/api/settings`                | GET/PUT| Yes   | Get/update user rules, whitelist, prefs       |
| `/api/logout`                  | POST   | Yes   | Revoke token and end session                  |

**All endpoints must be JWT/OAuth protected except login/callback.**

---

### 6. Data Model & Storage

**Entities:**

- **User**
    - id (internal UUID)
    - gmail_id
    - oauth_token (encrypted)
    - created_at / updated_at

- **UserSettings**
    - user_id (ref)
    - custom_rules (array)
    - whitelist (array)
    - blacklist (array)
    - notification_prefs (object)

- **Session/Cache (Redis)**
    - temp tokens, API rate limits, temp AI results (short-lived)

**Note:**  
- **No raw email content stored in DB unless feature explicitly requires.**
- **All data at rest encrypted (AES-256 recommended).**

---

### 7. AI Integration

- **OpenAI GPT API** for email categorization, summary, unsubscribe suggestion
    - Prompt templates stored centrally
    - Rate limits & API error handling
    - (Optional) Fallback: rule-based/regex if GPT API fails

- **Pipeline:**  
    - Input: [subject, from, snippet, time, body excerpt]  
    - Output: [category label, unsubscribe suggestion, summary text, confidence score]

---

### 8. Core Workflows

#### 8.1. User Auth Flow

1. Frontend hits `/api/auth/google`  
2. Redirects to Google OAuth  
3. Callback to `/api/auth/callback`, backend exchanges code for token  
4. Store token encrypted, start session

#### 8.2. Email Fetch & Classification

1. `/api/emails/fetch`: Backend uses stored token, pulls last 30 days emails (metadata + snippet)
2. `/api/emails/classify`: Batch call to OpenAI API, categorize and tag
3. Results cached for X minutes (optional), sent to frontend

#### 8.3. Batch Unsubscribe Suggestion

1. Aggregate emails by sender
2. Use AI (and rules) to recommend unsubscribe/block actions
3. Extract unsubscribe links where available
4. Output: [sender, count, open rate, unsubscribe link, action suggestion]

#### 8.4. Today's Highlights

1. Apply user custom rules (keywords, senders, topics) on recent emails
2. Use AI to summarize key emails
3. Return daily highlights list to frontend

---

### 9. Security & Privacy

- **OAuth 2.0** for Gmail, tokens encrypted at rest
- **No email body or PII stored** unless user opts in (for future features)
- **API Rate Limiting** (IP, user) to prevent abuse
- **All API traffic over HTTPS**
- **CORS Policy:** Restrict to approved domains
- **GDPR-ready:** User can delete account/data at any time

---

### 10. Performance & Scalability

- Async API processing (FastAPI/Node async) for email/AI tasks
- Batched email/AI calls to minimize latency
- Horizontal scalability via stateless API + managed DB/cache
- Backend should support 1000+ concurrent users in MVP, scale to 10,000+ with infra changes

---

### 11. Logging, Monitoring, Error Handling

- Structured logging (JSON logs) for all API calls, errors, user actions (PII-free)
- Integration with Sentry, Datadog, or similar for error alerting
- Graceful error responses (HTTP 4xx/5xx), never leak sensitive info
- Retry logic for transient errors (network, OpenAI API, Gmail API)

---

### 12. Testing & Documentation

- **Unit/Integration tests:** API endpoints, AI pipeline, Gmail connection
- **API docs:** Swagger/OpenAPI auto-generated at `/api/docs`
- **Dev environment:** Docker compose file for local testing

---

### 13. Extensibility (Future-Proofing)

- Abstract provider interface for future Outlook, Yahoo, etc.
- Plug-in pattern for AI models (swap OpenAI with local LLM)
- Webhook/event endpoints for future integrations (Slack, Notion, etc.)
- User-level feature toggles (for phased rollout)

---

### 14. Deployment & DevOps

- **CI/CD:** Github Actions or similar for lint/test/deploy
- **Env variables:** For all secrets (never hard-coded)
- **Dockerized:** Containerized services for cloud deploy
- **Configurable logging levels** (debug/info/warn/error)

---

### 15. Open Questions / TODOs

- How to handle Gmail API quota/rate limits on scale?
- What's the best fallback if OpenAI API is down?
- When/how to allow users to fully delete all data?
- Monitoring for abusive users (spamming requests, etc.)

---

### 16. Change Log

- 2024-07-26: Initial backend RFC created
- [Add new entries as doc is updated]

---

**Status:** Draft  
**Last Updated:** 2024-07-26  
**Owner:** [Your Name] 