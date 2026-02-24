# Portfolio Chatbot API

A FastAPI-based chatbot backend that answers questions about a developer's portfolio, skills, and experience using the Groq LLM API.

## Overview

This API serves as an intelligent chatbot embedded in a portfolio website. It uses your resume/CV as the knowledge base and leverages the Groq API with the `llama-3.1-8b-instant` model to provide contextual, accurate responses about your professional background.

## Features

- ✅ Resume-based Q&A system
- ✅ CORS-enabled for frontend integration
- ✅ Groq LLM integration for intelligent responses
- ✅ Health check endpoint
- ✅ Error handling and validation
- ✅ Hot reload support for development

## Prerequisites

- Python 3.8+
- Groq API key (get one at https://console.groq.com)
- pip or uv package manager

## Installation

1. **Navigate to the Backend2 directory:**
   ```bash
   cd Backend2
   ```

2. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```
   Or with `uv`:
   ```bash
   uv sync
   ```

## Configuration

### Setting Up Environment Variables

1. Create a `.env` file in the Backend2 directory:
   ```bash
   touch .env
   ```

2. Add your Groq API key:
   ```
   GROQ_API_KEY=your_actual_groq_api_key_here
   ```

3. Update the `RESUME_CONTEXT` in `main.py` with your actual resume/CV information:
   - Replace the placeholder text in the `RESUME_CONTEXT` variable
   - Keep the section headers (`=== SECTION ===`) for better LLM reference
   - Include your actual name, email, experience, skills, projects, etc.

## Running the Server

### Development Mode (with hot reload):
```bash
uv run uvicorn main:app --reload
```

Or without uv:
```bash
uvicorn main:app --reload
```

### Production Mode:
```bash
uv run uvicorn main:app --host 0.0.0.0 --port 8000
```

The API will be available at `http://localhost:8000`

## API Endpoints

### 1. Health Check
**GET** `/`
- Returns the API status
- Response: `{"status": "ok", "message": "Portfolio Chatbot API is running."}`

### 2. Chat
**POST** `/chat`
- Sends a message to the chatbot
- Request body:
  ```json
  {
    "message": "What are your main skills?"
  }
  ```
- Response:
  ```json
  {
    "response": "Based on your resume, your main skills include..."
  }
  ```

## CORS Configuration

The API is configured to accept requests from:
- `http://localhost:3000` (React dev server)
- `http://localhost:5173` (Vite dev server)

For production, update the `allow_origins` list in the `CORSMiddleware` configuration:
```python
allow_origins=[
    "https://yourdomain.com",
    "https://www.yourdomain.com"
]
```

## Testing the API

### Using curl:
```bash
curl -X POST http://localhost:8000/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "Tell me about your experience"}'
```

### Using Python:
```python
import requests

response = requests.post(
    "http://localhost:8000/chat",
    json={"message": "What projects have you built?"}
)
print(response.json())
```

## Troubleshooting

### ⚠️ WARNING: GROQ_API_KEY not found
- Ensure your `.env` file exists in the Backend2 directory
- Verify the `GROQ_API_KEY` is correctly set
- The environment variable must be defined before starting the server

### Model Decommissioned Error
- The API uses `llama-3.1-8b-instant` (current active model)
- If you encounter model errors, check Groq's deprecations page: https://console.groq.com/docs/deprecations

### Connection Issues
- Verify the frontend's allowed CORS origins match the main.py configuration
- Check that both frontend and backend are running on the correct ports

## Dependencies

- **fastapi** - Web framework
- **uvicorn** - ASGI server
- **pydantic** - Data validation
- **groq** - Groq LLM API client
- **python-dotenv** - Environment variable management
- **fastapi-cors** - CORS middleware

See `requirements.txt` for specific versions.

## Customization

### Adjust LLM Behavior
Modify the `SYSTEM_PROMPT` or `RESUME_CONTEXT` to change:
- Chatbot personality and tone
- Response length constraints
- Information provided to the LLM

### Change LLM Model
Update the model in the `@app.post("/chat")` endpoint:
```python
model="llama-3.1-8b-instant"  # Change this line
```

Available Groq models: https://console.groq.com/docs/speech-text

## Future Enhancements

- [ ] Add conversation history/memory
- [ ] Implement rate limiting
- [ ] Add authentication
- [ ] Database integration for storing conversations
- [ ] Support for multiple resume sections
- [ ] Voice input support

## Support

For issues with the Groq API, visit: https://console.groq.com/docs

## License

This project is part of the Portfolio website. See the main repository for license details.
