# 👨‍💻 Harish's Developer Portfolio

![Portfolio Preview](https://img.shields.io/badge/Status-Live-success?style=for-the-badge)
![Tech Stack](https://img.shields.io/badge/Built%20With-HTML%20%7C%20Tailwind%20%7C%20Netlify%20Functions-blue?style=for-the-badge)

> A high-performance personal portfolio website featuring real-time GitHub/LeetCode data fetching and an integrated AI chatbot assistant.

**🔗 Live Demo:** [https://portfolio-2025-hari.netlify.app/]

## ✨ Key Features

* **🤖 Integrated AI Assistant:** A custom-trained chatbot (powered by Google Gemini) that answers questions about my skills, education, and projects.
* **🔒 Secure Backend:** Uses **Netlify Serverless Functions** to hide API keys and handle requests securely, preventing frontend exposure.
* **📊 Real-Time Stats:** dynamically fetches and displays my live **LeetCode** problem counts and **GitHub** repository stats using public APIs.
* **🎨 Glassmorphism Design:** A modern, responsive UI built with **Tailwind CSS** and vanilla JavaScript.

## 🛠️ Tech Stack

* **Frontend:** HTML5, Tailwind CSS, JavaScript (ES6+), Lucide Icons.
* **Backend:** Node.js (Netlify Functions).
* **AI Model:** Google Gemini 1.5 Flash.
* **APIs Used:** GitHub REST API, LeetCode Stats API, Gemini Generative AI.

## 🚀 How It Works (Security Architecture)

Unlike standard static portfolios, this site uses a "Serverless Proxy" pattern to secure the AI integration:

1.  **User** asks a question in the chat UI.
2.  **Frontend** sends the message to the local endpoint `/.netlify/functions/chat`.
3.  **Serverless Function** (running on Node.js) injects the private `GEMINI_API_KEY` from environment variables.
4.  **Backend** forwards the request to Google's Gemini API and returns the sanitized response to the frontend.

## 📂 Project Structure

```bash
/
├── index.html            # Main entry point (Frontend)
├── netlify/
│   └── functions/
│       └── chat.js       # Serverless backend (Secure API handling)
└── README.md             # Documentation