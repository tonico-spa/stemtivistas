"""
FastAPI Backend Application
Provides REST API endpoints for the Stemtivistas frontend
CORS is enabled to allow requests from the Next.js frontend
"""
import os
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
import utils
from dotenv import load_dotenv

load_dotenv()

# Initialize FastAPI app
app = FastAPI()

origins = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "http://192.168.1.7:3000",
    "https://www.stemtivista.cl",
    "https://develop.d17k1lr65yqfqv.amplifyapp.com",
    "https://main.d1piqc5khvpkwq.amplifyapp.com",
    "https://www.drim.cl"
]

# Optional env flags to allow permissive CORS and enable debug logging for preflight
CORS_ALLOW_ALL = os.getenv("CORS_ALLOW_ALL", "0") == "1"
CORS_DEBUG = os.getenv("CORS_DEBUG", "0") == "1"

if CORS_ALLOW_ALL:
    # temporary/testing mode: allow all origins and credentials
    app.add_middleware(
        CORSMiddleware,
        allow_origins=["*"],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )
else:
    app.add_middleware(
        CORSMiddleware,
        allow_origins=origins,
        allow_credentials=False,
        allow_methods=["*"],
        allow_headers=["*"],
    )


# Pydantic models
class ContactForm(BaseModel):
    name: str
    email: EmailStr
    message: str


@app.get('/api/hello')
async def hello():
    """
    Test endpoint to verify backend connectivity
    Returns a JSON message
    """
    return {
        "message": "Hello from FastAPI Backend!",
        "status": "success",
        "data": {
            "organization": "Stemtivistas",
            "description": "Empowering STEM education"
        }
    }


@app.get('/api/contact')
async def contact():
    """
    Contact information endpoint
    Returns contact details for the organization
    """
    return {
        "email": "info@stemtivistas.org",
        "phone": "+1 (555) 123-4567",
        "address": "123 Innovation Street, Tech City, TC 12345"
    }


@app.get('/health')
async def health():
    """Health check endpoint"""
    return {"status": "healthy"}


@app.post("/api/send_form")
async def send_form(form_data: ContactForm):
    """
    Contact form submission endpoint
    Receives name, email, and message from the frontend
    """
    try:
        data_dd = {
            "name": form_data.name,
            "email": form_data.email,
            "message": form_data.message
        }
        
        utils.handle_contact_form(data_dd)

        return {
            "message": "Contact form submitted successfully", 
            "status": "success"
        }
    except Exception as exc:
        raise HTTPException(status_code=500, detail=str(exc))
