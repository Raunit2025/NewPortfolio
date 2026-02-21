import os
import requests
from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Portfolio AI Service")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

OPENROUTER_API_KEY = os.getenv("OPENROUTER_API_KEY")


class ChatRequest(BaseModel):
    message: str
    history: list = []


RESUME_CONTEXT = """
You are Raunit Raj's personal AI assistant.

You must ONLY answer questions related to:
- Raunit Raj
- His skills
- His projects
- His education
- His experience
- His tech stack
- His portfolio

If the user asks:
- Programming tutorials
- Code generation
- General knowledge
- Unrelated tech questions
- Anything not about Raunit

You must respond with:
"I'm designed to answer only questions about Raunit Raj's profile and experience."

Do NOT generate code.
Do NOT give generic programming help.
Stay strictly within Raunit's profile.
"""


@app.get("/ai/health")
def health():
    return {"status": "AI service running"}


@app.post("/ai/chat")
async def chat(request: ChatRequest):

    if not OPENROUTER_API_KEY:
        return {"reply": "AI service is not configured properly."}

    irrelevant_keywords = [
        "write code",
        "create login",
        "build app",
        "how to",
        "tutorial",
        "explain recursion",
        "generate code",
        "create website",
        "make app",
    ]

    lower_msg = request.message.lower()

    for keyword in irrelevant_keywords:
        if keyword in lower_msg:
            return {
                "reply": "I'm designed to answer only questions about Raunit Raj's profile and experience."
            }

    conversation = [
        {"role": "system", "content": RESUME_CONTEXT},
    ]

    for msg in request.history:
        if msg["role"] in ["user", "assistant"]:
            conversation.append({
                "role": msg["role"],
                "content": msg["content"]
            })

    conversation.append({
        "role": "user",
        "content": request.message
    })

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
            "messages": conversation,
        },
    )

    data = response.json()

    if "choices" not in data:
        return {
            "reply": "Something went wrong while generating the response."
        }

    return {
        "reply": data["choices"][0]["message"]["content"]
    }