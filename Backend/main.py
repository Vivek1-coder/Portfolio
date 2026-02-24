import os
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from dotenv import load_dotenv
from groq import Groq

load_dotenv()

app = FastAPI(title="Portfolio Chatbot API")

# CORS — allow your React dev server
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:8000", "http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ---------------------------------------------------------------------------
# RESUME CONTEXT — Replace the placeholder text below with your real resume.
# Keep the section headers so the LLM can reference them easily.
# ---------------------------------------------------------------------------
RESUME_CONTEXT = """
=== PERSONAL INFO ===
Name: Vivek Yadav
Title: Full-Stack Developer | AI & Software Engineer
Location: India
Email: vivek_ug23@nsut.ac.in
Phone: +91 9650560310
Portfolio: https://vivek1-coder.vercel.app/
GitHub: https://github.com/Vivek1-coder
LinkedIn: https://www.linkedin.com/in/vivek1-coder/
LeetCode: https://leetcode.com/u/vivek1coder/

=== EDUCATION ===
- B.Tech in Computer Science & Engineering
  Netaji Subhas University of Technology (NSUT), 2023 – 2027
  CGPA: 7.91 / 10

- CBSE Class XII, 2023
  Sarvodaya Bal Vidyalaya
  Percentage: 94.6%

- CBSE Class X, 2021
  Sarvodaya Bal Vidyalaya
  Percentage: 93.2%

=== EXPERIENCE ===
- Full Stack Developer Intern — StepSTEM (May 2025 – July 2025)
  • Built a scalable EdTech platform using Next.js, TypeScript, MongoDB, and Auth.js
  • Implemented Google OAuth, RBAC, JWT authentication, and Razorpay integration
  • Designed responsive UI using Tailwind CSS and Shadcn
  • Engineered scalable data models for complex educational workflows

- Web Developer Intern — Vayumandal Innovations (August 2025)
  • Developed full-stack web application using Next.js, JavaScript, Node.js, and MongoDB
  • Worked directly with founder in Agile sprints to deliver MVP
  • Improved UI/UX and optimized application performance

=== PROJECTS ===
1. ColedgeMandal — Real-Time College Networking Platform
   • Secure Google OAuth + JWT authentication
   • Real-time chat using Socket.IO
   • AI-based lecture planning & skill-based peer discovery
   • Tech: Next.js, Node.js, Express.js, TypeScript, MongoDB, Auth.js, JWT, Bcryptjs,
     Socket.IO, Tailwind CSS, Shadcn, Nodemailer, Zod, Google APIs, Groq SDK, jsPDF

2. HuntXHunt — RFID-Based Treasure Hunt Platform
   • Supported 35+ teams during 3-hour live event
   • Achieved 2.8% downtime and <7s average tag recognition latency
   • Tech: React.js, Node.js, Express.js, MongoDB, Socket.IO, JWT, ESP32, RC522 RFID

3. Fake News Detector
   • Achieved 99.26% accuracy using Bi-LSTM model
   • Applied advanced NLP techniques on labeled datasets
   • Tech: Python, TensorFlow, Keras, Pandas, NumPy, Streamlit

=== ACHIEVEMENTS ===
- LeetCode: Solved 550+ DSA problems; Rating 1836 (Top ~6.5% globally)
- Coding Ninjas College Topper; Rating 1871 (Specialist)
- Finalist — Adobe Express Add-on Hackathon
- Ranked Top 3% in JEE
- PM Yashasvi Scholar (National Scholarship Portal)

=== POSITIONS OF RESPONSIBILITY ===
- Electronics Team Lead — ARES Robotics Club
  • Conducted Arduino & programming workshops
  • Built competition bots and organized technical fest events

=== SKILLS ===
Languages: C++, Python, JavaScript, TypeScript
Frontend: React.js, Next.js, Tailwind CSS, HTML5, CSS3, Shadcn
Backend: Node.js, Express.js, FastAPI, Flask
Databases: MongoDB, MySQL
AI/ML: TensorFlow, Keras, Scikit-learn, NLP, Transformers
Tools: Git, GitHub, REST APIs, Socket.IO, Google APIs
Hardware: ESP32, RFID (RC522), Arduino

=== CONTACT ===
Email: vivek_ug23@nsut.ac.in
Phone: +91 9650560310
Portfolio: https://vivek1-coder.vercel.app/
LinkedIn: https://www.linkedin.com/in/vivek1-coder/
GitHub: https://github.com/Vivek1-coder
"""
# ---------------------------------------------------------------------------
# System prompt for the LLM
# ---------------------------------------------------------------------------
SYSTEM_PROMPT = f"""You are a friendly and professional AI assistant embedded in Vivek's developer portfolio website.
Your ONLY knowledge base is the resume / CV provided below. Answer visitors' questions using ONLY that information.

Rules:
1. If the answer is found in the resume, respond concisely and in a friendly tone.
2. If the question is unrelated to Vivek or not answerable from the resume, politely say:
   "I can only answer questions about Vivek's background, skills, and projects. Feel free to ask about those!"
3. Never fabricate information that is not in the resume.
4. Keep answers short (2-4 sentences) unless the visitor asks for detail.
5. You may format lists with bullet points when appropriate.

--- BEGIN RESUME ---
{RESUME_CONTEXT}
--- END RESUME ---"""


# ---------------------------------------------------------------------------
# Request / Response models
# ---------------------------------------------------------------------------
class ChatRequest(BaseModel):
    message: str


class ChatResponse(BaseModel):
    response: str


# ---------------------------------------------------------------------------
# Groq client
# ---------------------------------------------------------------------------
groq_api_key = os.getenv("GROQ_API_KEY")
if not groq_api_key:
    print("⚠️  WARNING: GROQ_API_KEY not found in environment. Set it in .env")

client = Groq(api_key=groq_api_key) if groq_api_key else None


# ---------------------------------------------------------------------------
# POST /chat
# ---------------------------------------------------------------------------
@app.post("/chat", response_model=ChatResponse)
async def chat(request: ChatRequest):
    if not client:
        raise HTTPException(
            status_code=500,
            detail="Groq API key is not configured. Please set GROQ_API_KEY in the .env file.",
        )

    try:
        completion = client.chat.completions.create(
            model="llama3-8b-8192",  # or "mixtral-8x7b-32768"
            messages=[
                {"role": "system", "content": SYSTEM_PROMPT},
                {"role": "user", "content": request.message},
            ],
            temperature=0.6,
            max_tokens=512,
        )
        reply = completion.choices[0].message.content
        return ChatResponse(response=reply)

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Error communicating with Groq API: {str(e)}",
        )


# ---------------------------------------------------------------------------
# Health check
# ---------------------------------------------------------------------------
@app.get("/")
async def root():
    return {"status": "ok", "message": "Portfolio Chatbot API is running."}
