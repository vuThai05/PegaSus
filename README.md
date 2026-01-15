# PegaSus – AI Learning Assistant for Students

## Overview
**PegaSus** is an AI-powered learning assistant designed specifically for university students. The system leverages Large Language Models (LLMs) to support **tutoring, research, and exam practice** through an interactive chat-based interface. PegaSus focuses on clarity, usability, and data ownership, providing a modern, minimal, and student-centered experience across light and dark modes.

The project emphasizes:
- Clear separation between **learning modes**
- Strong **UX consistency** and minimal visual noise
- Transparent **data management and privacy**
- Scalable front-end architecture aligned with AI-agent workflows

---

## Core Features

### 1. AI Chat with Learning Modes
PegaSus supports three conversation-level modes, each optimized for a different learning goal:

- **Tutor** (`#0B6E4F`)  
  Step-by-step explanations, guided learning, and concept clarification.

- **Research** (`#0063FF`)  
  In-depth analysis, structured reasoning, and academic-style responses.

- **Practise** (`#F26D3D`)  
  Exam preparation, practice questions, and knowledge testing.

Modes are visually distinct, compact, and evenly balanced to reduce cognitive load.

---

### 2. Chat Experience
- Smart input bar with:
  - Text input
  - File and image attachments
  - Clear visual hierarchy and subtle shadows for focus
- AI response pipeline:
  - Thinking
  - Retrieving sources
  - Answering (streaming)
  - Complete / Error handling
- Transparent disclaimer:
  > *“PegaSus can make mistakes, so double-check important details.”*

---

### 3. Search & History
- **Search History page** for browsing past conversations
- Keyword-based search
- Filters by:
  - Mode (All / Tutor / Research / Exam)
  - Time range
- Clean, card-based chat history with:
  - Title
  - Preview
  - Mode badge
  - Date

---

### 4. Sidebar Navigation
- Minimal global sidebar with:
  - Logo (top-left)
  - Hamburger menu (top-right)
  - Search & Library
  - New Chat
  - Recent Chats
  - Settings
- Smooth collapse / expand behavior:
  - Click anywhere on collapsed sidebar to expand
  - Logo acts as expand trigger
- Context menu on chats:
  - Rename
  - Share
  - Archive
  - Delete

---

### 5. Archive & Data Management
PegaSus treats **Archive ≠ Delete**.

- Archived chats:
  - Removed from Recent Chats
  - Accessible in **Settings → Data Management**
  - Can be viewed safely (read-only or restore-enabled)
- Export data:
  - Download all chat data (e.g., JSON)
- Delete data:
  - Clear warnings
  - Irreversible actions
  - Strong visual hierarchy for destructive actions

---

## Continue...
