# AI Chatbot for Developer Portfolio

A full-stack AI chatbot that answers visitor questions about the portfolio owner based on their resume/CV, powered by **Groq API** for fast LLM inference.

## Architecture

```
Frontend (React + Vite)          Backend (FastAPI)
┌──────────────────┐  POST /chat  ┌──────────────────┐        ┌──────────┐
│  ChatBot.jsx     │ ──────────►  │  main.py         │ ─────► │ Groq API │
│  (floating chat) │ ◄──────────  │  (RESUME_CONTEXT)│ ◄───── │ LLaMA 3  │
└──────────────────┘   JSON       └──────────────────┘        └──────────┘
```

---

## Backend Setup

```bash
cd Backend

# Create and activate a virtual environment (recommended)
python -m venv venv
venv\Scripts\activate        # Windows
# source venv/bin/activate   # macOS / Linux

# Install dependencies
pip install -r requirements.txt

# Configure your API key
copy .env.example .env       # Windows
# cp .env.example .env       # macOS / Linux
# Then edit .env and paste your Groq API key

# Run the server
uvicorn main:app --reload
```

The API will be available at **http://localhost:8000**. Hit `GET /` to verify it's running.

### Getting a Groq API Key
1. Go to [console.groq.com](https://console.groq.com)
2. Sign up / log in
3. Create a new API key
4. Paste it into `Backend/.env`

### Customising the Resume
Open `Backend/main.py` and replace the `RESUME_CONTEXT` string with your own resume content. Keep the section headers (`=== EDUCATION ===`, etc.) so the LLM can reference them clearly.

---

## Frontend Setup

The `ChatBot` component is already wired into `App.jsx`. To use it in any other React page:

```jsx
import ChatBot from "./components/ChatBot";

function AnyPage() {
  return (
    <div>
      {/* your page content */}
      <ChatBot />
    </div>
  );
}
```

The chatbot renders as a floating 💬 button in the bottom-right corner and works out of the box with Tailwind CSS (already configured in this project).

Make sure the backend is running on `http://localhost:8000` before using the chat.

---

## File Overview

| File | Purpose |
|------|---------|
| `Backend/main.py` | FastAPI server – `/chat` endpoint, Groq integration, resume context |
| `Backend/.env.example` | Template for the Groq API key |
| `Backend/requirements.txt` | Python dependencies |
| `Frontend/src/components/ChatBot.jsx` | Self-contained floating chat widget |
