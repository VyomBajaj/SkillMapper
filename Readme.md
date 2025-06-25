# 🚀 SkillMap – Personalized Learning Roadmap Generator

SkillMap is a full-stack web application that generates **customized learning roadmaps** based on a user’s current skills, target role, and time availability. Designed for aspiring developers and learners, SkillMap uses AI (LangChain + Gemini API) to build structured paths and help users track their learning journey effectively.

🔗 **Live Demo**: [https://skillmapper.vercel.app](https://skillmapper.vercel.app)

---

## 🧠 Features

- 🔐 **Authentication** using JWT with secure login and protected routes
- 📊 **Personalized roadmap generation** using LangChain + Gemini API
- ✅ **Progress tracking** for each roadmap step and capstone project
- 👤 **Profile management** with editable skill sets and GitHub linking
- 📌 **Trending role suggestions** and skill demand analysis
- 💡 Clean and responsive UI built with Tailwind CSS

---

## 🛠️ Tech Stack

### Frontend
- React.js
- React Router DOM
- Axios
- Tailwind CSS

### Backend
- Node.js
- Express.js
- MongoDB (MongoDB Atlas)
- Mongoose
- JWT (Authentication)
- Multer (for avatar uploads)

### AI Integration
- LangChain
- Gemini API (Google’s LLM)

### Deployment
- Frontend: **Vercel**
- Backend: **Render**

---

## 📂 Folder Structure

SkillMapper/
├── client/ # React frontend
│ ├── src/
│ └── public/
├── server/ # Node.js backend
│ ├── routes/
│ ├── models/
│ └── controllers/
└── README.md

---

## ⚙️ Setup Instructions

### Prerequisites
- Node.js (v18+)
- MongoDB Atlas account
- Gemini API key

### 1. Clone the repository
```bash
git clone https://github.com/VyomBajaj/SkillMapper.git
cd SkillMapper
2. Setup Backend

cd backend
npm install
Create a .env file in the server/ directory with the following variables:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret
GEMINI_API_KEY=your_gemini_api_key
Then start the backend:

npm run dev

3. Setup Frontend

cd frontend
npm install
npm run dev
4. Access the App
Visit http://localhost:5173 or use the live link above.

📷 Screenshots
Add screenshots here in future using:


![Home Page](./client/public/screenshots/home.png)
![Roadmap View](./client/public/screenshots/roadmap.png)
📌 Future Improvements
Export roadmaps as PDF

Roadmap suggestions based on trending tech

Advanced analytics dashboard

More LLM support (OpenAI, Claude)

🤝 Contributing
Contributions, issues, and feature requests are welcome!
Feel free to open an issue or submit a pull request.

📄 License
This project is licensed under the MIT License.

🙋‍♂️ Author
Vyom Bajaj
