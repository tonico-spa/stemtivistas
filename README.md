# Stemtivistas Web Application

A full-stack web application with a decoupled architecture featuring Next.js (App Router) frontend and Python Flask backend.

## 📁 Project Structure

```
stemtivistas/
├── stemtivistas_frontend/          # Next.js Frontend
│   ├── app/
│   │   ├── components/
│   │   │   ├── Navbar.js           # Sticky navbar with smooth scroll
│   │   │   └── Navbar.module.css   # Navbar styles
│   │   ├── mission/
│   │   │   ├── page.js             # Mission dedicated page
│   │   │   └── mission.module.css  # Mission page styles
│   │   ├── globals.css             # Global styles
│   │   ├── Home.module.css         # Home page styles
│   │   ├── layout.js               # Root layout with Navbar
│   │   └── page.js                 # Home page (landing)
│   └── package.json
│
└── stemtivistas_backend/           # Flask Backend
    ├── app.py                      # Flask application with CORS
    └── pyproject.toml              # Python dependencies & config
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **Python** (v3.8 or higher)
- **npm** or **yarn**

---

## Backend Setup (Flask)

### 1. Navigate to the backend folder

```powershell
cd stemtivistas_backend
```

### 2. Create a virtual environment (recommended)

```powershell
python -m venv venv
```

### 3. Activate the virtual environment

```powershell
.\venv\Scripts\Activate
```

### 4. Install dependencies

```powershell
pip install -e .
```

### 5. Run the Flask server

```powershell
python app.py
```

The backend will start at **http://localhost:5000**

**API Endpoints:**
- `GET /api/hello` - Test endpoint returning JSON message
- `GET /api/contact` - Contact information
- `GET /health` - Health check

---

## Frontend Setup (Next.js)

### 1. Open a new terminal and navigate to the frontend folder

```powershell
cd stemtivistas_frontend
```

### 2. Install dependencies

```powershell
npm install
```

### 3. Run the development server

```powershell
npm run dev
```

The frontend will start at **http://localhost:3000**

---

## ✨ Features

### Frontend Features

- **One-Page Landing:** 4 scrollable sections (Mission, Activities, Participate, Contact)
- **Smooth Scroll Navigation:** Clicking navbar links smoothly scrolls to sections on the home page
- **Dedicated Pages:** "See More" buttons navigate to detailed pages (`/mission`, `/activities`, etc.)
- **API Integration:** Contact section fetches data from Flask backend
- **Responsive Design:** Mobile-friendly with CSS Grid and Flexbox
- **Pure CSS Modules:** No Tailwind or UI libraries

### Backend Features

- **REST API:** Simple Flask endpoints
- **CORS Enabled:** Cross-origin requests allowed
- **JSON Responses:** Structured API responses

---

## 🎨 Styling

All styling is done with **pure CSS Modules**:
- `Navbar.module.css` - Sticky navigation styles
- `Home.module.css` - Landing page with gradient backgrounds
- `mission.module.css` - Dedicated page styling

Each section has distinct gradient backgrounds for visual clarity.

---

## 🔄 How It Works

### Navigation Logic

1. **On Home Page:** Navbar links trigger smooth scroll to section IDs (`#mission`, `#activities`, etc.)
2. **On Other Pages:** Navbar links navigate back to Home with the hash
3. **See More Buttons:** Use Next.js `<Link>` to navigate to dedicated pages (`/mission`, etc.)

### API Integration

The Contact section in [page.js](stemtivistas_frontend/app/page.js) demonstrates fetching data:

```javascript
const response = await fetch('http://localhost:5000/api/hello')
const data = await response.json()
```

---

## 📝 Creating Additional Pages

To create more dedicated pages (Activities, Participate, Contact):

1. Create a new folder: `app/activities/`
2. Add `page.js` and `activities.module.css`
3. Follow the same pattern as `mission/page.js`

Example structure:
```
app/activities/
  ├── page.js
  └── activities.module.css
```

---

## 🛠️ Tech Stack

- **Frontend:** Next.js 14 (App Router), React 18, JavaScript (ES6+)
- **Styling:** CSS Modules (Pure CSS)
- **Backend:** Python 3, Flask 3.0, Flask-CORS 4.0
- **Communication:** REST API

---

## 📦 Build for Production

### Frontend

```powershell
cd stemtivistas_frontend
npm run build
npm run start
```

### Backend

For production, use a WSGI server like Gunicorn:

```powershell
pip install gunicorn
gunicorn app:app
```

---

## 🐛 Troubleshooting

**CORS Errors:** Ensure Flask backend is running on port 5000 and CORS is enabled in `app.py`

**API Not Connecting:** Verify the backend URL in `page.js` matches your Flask server address

**Smooth Scroll Not Working:** Ensure `scroll-behavior: smooth` is set in `globals.css`

---

## 📄 License

This project is for educational purposes.

---

**Happy Coding! 🎉**