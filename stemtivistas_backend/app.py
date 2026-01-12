"""
Flask Backend Application
Provides REST API endpoints for the Stemtivistas frontend
CORS is enabled to allow requests from the Next.js frontend
"""

from flask import Flask, jsonify
from flask_cors import CORS

# Initialize Flask app
app = Flask(__name__)

# Enable CORS for all routes
# In production, you should specify the exact origin: origins=["http://localhost:3000"]
CORS(app)

@app.route('/api/hello', methods=['GET'])
def hello():
    """
    Test endpoint to verify backend connectivity
    Returns a JSON message
    """
    return jsonify({
        "message": "Hello from Flask Backend!",
        "status": "success",
        "data": {
            "organization": "Stemtivistas",
            "description": "Empowering STEM education"
        }
    })

@app.route('/api/contact', methods=['GET'])
def contact():
    """
    Contact information endpoint
    Returns contact details for the organization
    """
    return jsonify({
        "email": "info@stemtivistas.org",
        "phone": "+1 (555) 123-4567",
        "address": "123 Innovation Street, Tech City, TC 12345"
    })

# Health check endpoint
@app.route('/health', methods=['GET'])
def health():
    """Health check endpoint"""
    return jsonify({"status": "healthy"})

if __name__ == '__main__':
    # Run the Flask app in debug mode
    # Default port is 5000
    app.run(debug=True, host='0.0.0.0', port=5000)
