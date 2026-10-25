<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0f2027,50:203a43,100:2c5364&height=220&section=header&text=InterviewIQ&fontSize=72&fontColor=ffffff&animation=fadeIn&fontAlignY=38&desc=AI-powered%20interview%20preparation%20%E2%80%94%20from%20resume%20to%20report&descAlignY=60&descSize=18" alt="InterviewIQ banner" />

<a href="https://git.io/typing-svg">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=20&duration=3000&pause=900&color=36BCF7&center=true&vCenter=true&width=720&lines=Upload+your+resume.+Get+interviewed+by+AI.;Practice+real+questions.+Get+a+detailed+report.;Full-stack+MERN+SaaS+with+auth+and+payments." alt="Typing SVG" />
</a>

<br/>

![React](https://img.shields.io/badge/React-Vite-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Node](https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Redux](https://img.shields.io/badge/Redux-State-764ABC?style=for-the-badge&logo=redux&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Razorpay](https://img.shields.io/badge/Razorpay-Payments-0C2451?style=for-the-badge&logo=razorpay&logoColor=white)
![Render](https://img.shields.io/badge/Deployed%20on-Render-46E3B7?style=for-the-badge&logo=render&logoColor=black)

[🚀 Live Demo](#) · [🎥 Demo Video](#) · [🐛 Report Bug](https://github.com/u23ec179/InterviewIQ/issues) · [✨ Request Feature](https://github.com/u23ec179/InterviewIQ/issues)

</div>

---

## 📑 Table of Contents

- [About](#-about)
- [Features](#-features)
- [How It Works](#-how-it-works)
- [System Architecture](#-system-architecture)
- [Authentication Flow](#-authentication-flow)
- [Interview Flow](#-interview-flow)
- [Data Model](#-data-model)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [API Overview](#-api-overview)
- [Deployment](#-deployment)
- [Roadmap](#-roadmap)
- [Author](#-author)

---

## 🎯 About

**InterviewIQ** is a full-stack AI SaaS platform that helps candidates prepare for interviews the smart way. Instead of generic question banks, it reads **your resume**, builds an interview around **your background and target role**, runs a guided practice session, and then hands you a **detailed performance report** you can revisit any time.

> **The problem:** most candidates practice with random questions that don't match their own experience.
> **The solution:** a personalised, resume-aware AI interviewer, with history, reports and a pricing model, packaged as a real product.

---

## ✨ Features

| | Feature | Description |
|---|---|---|
| 🔐 | **Secure Authentication** | Google sign-in with protected routes and an `isAuth` middleware on the API |
| 📄 | **Resume Upload & Analysis** | Upload a resume (handled with Multer) and let the AI analyse it |
| 🧠 | **AI-Driven Interviews** | Questions generated through OpenRouter, tailored to the candidate |
| 🧭 | **Guided 2-Step Flow** | Step 1: interview setup, Step 2: live interview session |
| 📊 | **Interview Reports** | Detailed feedback report generated after every interview |
| 🕘 | **User History** | Browse all past interviews and reopen any report |
| 💳 | **Pricing & Payments** | Razorpay-powered plans and checkout |
| 🗂️ | **Global State** | Redux store for user and session state |
| 🎨 | **Modern UI** | Responsive React + Tailwind interface (Home, Navbar, Footer, Pricing, etc.) |

---

## 🧩 How It Works

```mermaid
journey
    title A candidate's journey on InterviewIQ
    section Get started
      Visit the landing page: 4: Candidate
      Sign in with Google: 5: Candidate
    section Prepare
      Upload resume: 5: Candidate
      AI analyses the resume: 5: AI
      Configure the interview: 4: Candidate
    section Practice
      Take the AI interview: 5: Candidate, AI
    section Improve
      Read the detailed report: 5: Candidate
      Review history and retry: 4: Candidate
      Upgrade a plan: 3: Candidate
```

```mermaid
flowchart LR
    A([🔑 Sign in]) --> B([📄 Upload resume])
    B --> C([🤖 AI resume analysis])
    C --> D([⚙️ Step 1: Setup])
    D --> E([🎤 Step 2: Interview])
    E --> F([📊 Report generated])
    F --> G([🕘 Saved to history])
    G -.->|practice again| D

    style A fill:#0f2027,stroke:#36BCF7,color:#fff
    style B fill:#0f2027,stroke:#36BCF7,color:#fff
    style C fill:#203a43,stroke:#8E75B2,color:#fff
    style D fill:#0f2027,stroke:#36BCF7,color:#fff
    style E fill:#203a43,stroke:#8E75B2,color:#fff
    style F fill:#0f2027,stroke:#46E3B7,color:#fff
    style G fill:#0f2027,stroke:#46E3B7,color:#fff
```

---

## 🏗️ System Architecture

```mermaid
flowchart TB
    subgraph Client["🖥️ Client (React + Vite)"]
        UI[Pages & Components<br/>Home · Auth · Interview · History · Pricing]
        RX[Redux Store]
        UI <--> RX
    end

    subgraph Server["⚙️ Server (Node.js + Express)"]
        MW[Middleware<br/>isAuth · Multer · CORS]
        RT[REST Routes & Controllers]
        MW --> RT
    end

    subgraph External["☁️ External Services"]
        GA[Google Authentication]
        OR[OpenRouter AI]
        RZ[Razorpay]
    end

    DB[(MongoDB<br/>Mongoose)]

    UI -- "HTTPS / REST (JSON)" --> MW
    UI -- "Sign in" --> GA
    RT -- "Persist & query" --> DB
    RT -- "Analyse resume / generate questions / evaluate" --> OR
    RT -- "Create & verify payments" --> RZ
    UI -- "Checkout" --> RZ
```

---

## 🔐 Authentication Flow

```mermaid
sequenceDiagram
    autonumber
    actor U as User
    participant C as React Client
    participant G as Google Auth
    participant S as Express API
    participant DB as MongoDB

    U->>C: Click "Continue with Google"
    C->>G: Open Google sign-in
    G-->>C: Verified profile (name, email)
    C->>S: POST /auth (profile)
    S->>DB: Find or create user
    DB-->>S: User document
    S-->>C: Session token / cookie
    C->>S: GET /user/current  (isAuth middleware)
    S-->>C: Current user
    C->>C: Store user in Redux
```

---

## 🎤 Interview Flow

```mermaid
sequenceDiagram
    autonumber
    actor U as Candidate
    participant C as Client
    participant S as Express API
    participant M as Multer
    participant AI as OpenRouter
    participant DB as MongoDB

    U->>C: Upload resume + choose role
    C->>S: POST resume (multipart)
    S->>M: Parse and validate file
    M-->>S: File content
    S->>AI: Analyse resume
    AI-->>S: Skills, projects, experience
    S-->>C: Analysis result

    U->>C: Start interview (Step 2)
    loop For each question
        C->>S: Request / submit answer
        S->>AI: Generate next question / evaluate answer
        AI-->>S: Question + feedback
        S-->>C: Next question
    end

    C->>S: Finish interview
    S->>AI: Build final evaluation
    AI-->>S: Scores & feedback
    S->>DB: Save interview + report
    S-->>C: Report
    C-->>U: Show Interview Report
```

---

## 🗃️ Data Model

> The diagram shows the conceptual model. Adjust field names to match your Mongoose schemas.

```mermaid
erDiagram
    USER ||--o{ INTERVIEW : takes
    USER ||--o{ PAYMENT : makes
    INTERVIEW ||--|| REPORT : produces

    USER {
        ObjectId _id
        string name
        string email
        number credits
    }
    INTERVIEW {
        ObjectId _id
        ObjectId user
        string role
        string resumeAnalysis
        array questions
        array answers
        date createdAt
    }
    REPORT {
        ObjectId _id
        number overallScore
        array strengths
        array improvements
    }
    PAYMENT {
        ObjectId _id
        ObjectId user
        string razorpayOrderId
        string status
        number amount
    }
```

---

## 🧰 Tech Stack

<div align="center">

| Layer | Technologies |
|---|---|
| **Frontend** | React.js · Vite · Redux · Tailwind CSS · Framer Motion |
| **Backend** | Node.js · Express.js · REST APIs |
| **Database** | MongoDB · Mongoose |
| **Auth** | Google Authentication · JWT-based `isAuth` middleware |
| **AI** | OpenRouter (LLM gateway) |
| **File Handling** | Multer |
| **Payments** | Razorpay |
| **Deployment** | Render (web service + static site) |

</div>

---

## 📁 Project Structure

```text
InterviewIQ/
├── client/                 # React + Vite frontend
│   ├── src/
│   │   ├── components/     # Navbar, Footer, Step components, etc.
│   │   ├── pages/          # Home, Auth, Interview, History, Report, Pricing
│   │   └── redux/          # Store and slices
│   └── package.json
├── server/                 # Express backend
│   ├── models/             # Mongoose models (User, Interview, ...)
│   ├── routes/             # API routes
│   ├── controllers/        # Business logic
│   ├── middlewares/        # isAuth, Multer upload
│   ├── config/             # DB connection
│   └── package.json
├── render.yaml             # Render deployment blueprint
├── .node-version
└── README.md
```

> Folder names inside `client/src` and `server` are indicative. Update the tree to match your repo.

---

## 🚀 Getting Started

### Prerequisites

- Node.js (see [`.node-version`](.node-version))
- A MongoDB database (local or Atlas)
- Accounts and keys for Google Auth, OpenRouter and Razorpay

### 1. Clone

```bash
git clone https://github.com/u23ec179/InterviewIQ.git
cd InterviewIQ
```

### 2. Run the backend

```bash
cd server
npm install
cp .env.example .env     # then fill in your values
npm run dev              # or: npm start
```

### 3. Run the frontend

```bash
cd client
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

---

## 🔑 Environment Variables

> Variable names below are examples. Match them to the ones used in your code.

**`server/.env`**

```env
PORT=8080
NODE_ENV=development
MONGODB_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
OPENROUTER_API_KEY=your_openrouter_key
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
CLIENT_URL=http://localhost:5173
```

**`client/.env`**

```env
VITE_API_URL=http://localhost:8080
VITE_RAZORPAY_KEY_ID=your_razorpay_key_id
# plus the Google auth config your client uses
```

🔒 Never commit real keys. Make sure `.env` is in `.gitignore`.

---

## 🔌 API Overview

> Illustrative route map, aligned with the app's features. Update paths to match your routers.

| Method | Endpoint | Auth | Purpose |
|---|---|---|---|
| `POST` | `/api/auth/google` | ❌ | Sign in / sign up with Google |
| `GET` | `/api/user/current` | ✅ | Get the logged-in user |
| `POST` | `/api/interview/analyze-resume` | ✅ | Upload and analyse a resume |
| `POST` | `/api/interview/start` | ✅ | Create an interview session |
| `POST` | `/api/interview/answer` | ✅ | Submit an answer, get the next question |
| `POST` | `/api/interview/finish` | ✅ | Finalise and generate the report |
| `GET` | `/api/interview/history` | ✅ | List past interviews |
| `GET` | `/api/interview/:id` | ✅ | Fetch one interview report |
| `POST` | `/api/payment/order` | ✅ | Create a Razorpay order |
| `POST` | `/api/payment/verify` | ✅ | Verify a payment |

---

## ☁️ Deployment

The repo ships with a [`render.yaml`](render.yaml) blueprint that deploys two services on **Render**:

```mermaid
flowchart LR
    GH[(GitHub repo)] -->|render.yaml blueprint| R{{Render}}
    R --> W["🟢 interviewiq-server<br/>Node web service<br/>cd server && npm start<br/>PORT 8080"]
    R --> ST["🔵 interviewiq-client<br/>Static site<br/>cd client && npm run build<br/>publish client/dist"]
    ST -- "/api requests" --> W
    W --> DB[(MongoDB Atlas)]
```

1. Push the repo to GitHub.
2. In Render, choose **New → Blueprint** and select this repository.
3. Add the environment variables from above on the server service.
4. Deploy. The static client is served from `client/dist` and `/api` routes go to the server.

---

## 🗺️ Roadmap

- [x] Google authentication and protected API routes
- [x] Resume upload and AI analysis
- [x] Two-step interview flow
- [x] Interview history and reports
- [x] Pricing page with Razorpay
- [ ] Voice-based interviews
- [ ] Role-specific question tracks
- [ ] Progress analytics dashboard
- [ ] Shareable report links

---

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the project
2. Create your branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m "Add amazing feature"`
4. Push: `git push origin feature/amazing-feature`
5. Open a Pull Request

---

## 👨‍💻 Author

<div align="center">

**Deepak Sharma**
B.E. Electronics & Communication, SVNIT Surat (2023–2027)
Full-Stack Developer · AI Application Builder

[![LinkedIn](https://img.shields.io/badge/-LinkedIn-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/deepaksharma-0b74b631b)
[![GitHub](https://img.shields.io/badge/-GitHub-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/u23ec179)
[![Gmail](https://img.shields.io/badge/-Gmail-EA4335?style=flat-square&logo=gmail&logoColor=white)](mailto:deepakbagdadj@gmail.com)

⭐ If you found this project useful, please give it a star!

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:2c5364,50:203a43,100:0f2027&height=100&section=footer" alt="footer" />

</div>
