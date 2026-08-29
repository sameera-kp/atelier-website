# 🏡 Atelier Website (Full-Stack Interior Design Platform)

A modern full-stack web application designed for interior design studios, showcasing stunning portfolios, before-and-after room makeovers, and interactive client experiences.

---

## 🛠️ Tech Stack

### **Frontend (Client-Side)**
* **Framework:** [Next.js 15](https://next.js/) (React)
* **Styling:** Tailwind CSS / Custom styling
* **Animations:** Framer Motion
* **Icons & UI:** Lucide React / Modern UI components

### **Backend (Server-Side)**
* **Framework:** Python, [Django](https://www.djangoproject.com/) & Django REST Framework (DRF)
* **Database:** SQLite (Development)
* **Media Management:** Django Media storage for project and makeover images
* **CORS:** `django-cors-headers` for secure API communication

---

## 📁 Project Structure

```text
interior-website/
├── backend/            # Django REST API Backend
│   ├── api/            # Django app for models, serializers, views
│   ├── backend/        # Core Django settings and URLs
│   ├── media/          # Uploaded project & makeover images
│   └── venv/           # Python Virtual Environment
├── interior-studio/    # Next.js Frontend Application
│   ├── app/            # App router pages (Home, Projects, About, Contact)
│   ├── components/     # Reusable UI components (Sliders, Navbar, Footer)
│   ├── data/           # Static data & project listings
│   └── public/         # Static assets and images
└── .gitignore          # Git ignore configuration