import os
import requests
from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Portfolio AI Service")

# Allow frontend access
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # later restrict to domain
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

OPENROUTER_API_KEY = os.getenv("OPENROUTER_API_KEY")

class ChatRequest(BaseModel):
    message: str

# Resume knowledge base
RESUME_CONTEXT = """
Raunit Raj is a Full Stack Developer skilled in:
React, TypeScript, Node.js, Express, MongoDB, Laravel,
PHP, Swift, Tailwind CSS.

He is a B.Tech CSE student at Lovely Professional University (2022–2026).

He built:
- UI Forge AI
- Affiliate++
- SmartQA
- Inventory Management App

Answer strictly based on this information.
If something is not in the resume, say you don't know.
"""

@app.get("/ai/health")
def health():
    return {"status": "AI service running"}

@app.post("/ai/chat")
async def chat(request: ChatRequest):
    if not OPENROUTER_API_KEY:
        return {"error": "OpenRouter API key not configured"}

    response = requests.post(
    "https://openrouter.ai/api/v1/chat/completions",
    headers={
        "Authorization": f"Bearer {OPENROUTER_API_KEY}",
        "Content-Type": "application/json",
        "HTTP-Referer": "https://portfolio.raunit.dpdns.org",
        "X-Title": "Raunit Portfolio AI",
    },
    json={
        "model": "arcee-ai/trinity-large-preview:free",
        "messages": [
            {
                "role": "system",
                "content": RESUME_CONTEXT
            },
            {
                "role": "user",
                "content": request.message
            }
        ],
    },
)

    data = response.json()

    return {
        "reply": data["choices"][0]["message"]["content"]
    }