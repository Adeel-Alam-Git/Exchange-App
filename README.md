# 💱 Currency Exchange App

A modern and responsive currency converter built with **React, JavaScript, Tailwind CSS, and Vite**. The application fetches real-time exchange rates from **ExchangeRate-API** and allows users to quickly convert amounts between multiple international currencies.

To keep API credentials secure, the project uses **Cloudflare Pages Functions** as a serverless backend that proxies requests to ExchangeRate-API without exposing the API key to the client.

🔗 **Live Demo:** https://currency-exchange-app-30o.pages.dev/

---

# ✨ Features

- 🌍 Convert between 160+ international currencies
- 📈 Real-time exchange rates powered by ExchangeRate-API
- 🔄 One-click currency swap
- ⚡ Instant conversion as you type
- 📅 Displays the latest exchange rate update
- 🏳️ Searchable currency selector with country and currency names
- 📱 Fully responsive design for desktop, tablet, and mobile
- ⚠️ Graceful error handling for API and network failures
- 🔐 Secure API key management using Cloudflare Pages Functions
- ⚛️ Built with reusable React components
- 🧠 Global state management using React Context API
- 🚀 Fast development experience powered by Vite

---

# 🛠️ Tech Stack

## Frontend

- React
- JavaScript (ES6+)
- Tailwind CSS
- Vite
- Axios
- React Context API
- Font Awesome

## Backend / Serverless

- Cloudflare Pages Functions
- Environment Variables
- Serverless API Proxy Pattern

## API

- ExchangeRate-API

---

# 📸 Screenshots

## Desktop View

![Desktop View](/src/assets/Screenshot_01.png)

## Mobile View

![Mobile View](/src/assets/Screenshot_02.png)

---

# 🏗️ Project Architecture

```
User Interface (React)
        │
        │ Axios Request
        ▼
 /api/latest?base=USD
        │
        ▼
Cloudflare Pages Function
        │
        │ Uses
        │ context.env.EXCHANGE_API_KEY
        ▼
ExchangeRate-API
        │
        ▼
Returns exchange rate data
        │
        ▼
React Context updates UI
```

This architecture keeps API credentials secure while allowing the frontend to consume live exchange rate data efficiently.

---

# 📁 Project Structure

```text
.
├── functions/
│   └── api/
│       └── latest.js
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── context/
│   ├── App.jsx
│   └── main.jsx
├── .dev.vars
├── package.json
└── vite.config.js
```

---

# 🚀 Getting Started

## Prerequisites

- Node.js (v18 or newer)
- npm

---

## Installation

Clone the repository:

```bash
git clone https://github.com/Adeel-Alam-Git/Currency-Exchange-App.git

cd Currency-Exchange-App
```

Install dependencies:

```bash
npm install
```

---

# 🔐 Environment Variables

Create a `.dev.vars` file in the project root:

```env
EXCHANGE_API_KEY=your_api_key
```

The Cloudflare Function accesses the key using:

```javascript
context.env.EXCHANGE_API_KEY
```

For production deployment, add the variable in:

```
Cloudflare Dashboard
→ Pages
→ Your Project
→ Settings
→ Environment Variables
```

---

# 💻 Development

Since this project uses **Cloudflare Pages Functions** as a serverless backend, the standard Vite development server (`npm run dev`) does **not** run the `/api` functions.

To run the application locally with live exchange rates, start the Cloudflare Pages development server instead:

```bash
npm run pages:dev
```

This command serves both the React application and the Cloudflare Pages Functions, allowing API requests to work correctly.

> **Note:** Running only:
>
> ```bash
> npm run dev
> ```
>
> will start the Vite development server, but requests to `/api/latest` will fail because the Cloudflare Pages Functions are not running.

---

# 📦 Production Build

Build the application:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

# 🌐 API

The frontend communicates with a secure serverless endpoint instead of directly calling ExchangeRate-API.

Example request:

```text
/api/latest?base=USD
```

Cloudflare handles the request through:

```text
functions/
└── api/
    └── latest.js
```

The function appends the API key securely before forwarding the request to ExchangeRate-API.

---

# 📚 What I Learned

Building this project strengthened my understanding of:

- Building modern applications with React
- Creating reusable React components
- Managing shared state using React Context API
- Consuming REST APIs with Axios
- Handling asynchronous operations using async/await
- Error handling and user feedback
- Responsive UI development with Tailwind CSS
- Structuring scalable React projects
- Protecting API keys using serverless functions
- Working with Cloudflare Pages Functions
- Managing environment variables
- Deploying production-ready applications with Cloudflare Pages

---

# 🚀 Deployment

The project is deployed on **Cloudflare Pages**.

Deployment includes:

- Building the React application with Vite
- Deploying Cloudflare Pages Functions
- Configuring secure environment variables
- Serving the application through Cloudflare's global CDN

---

# 🔮 Future Improvements

- 📊 Historical exchange rate charts
- ⭐ Favorite currencies
- 🔍 Advanced currency search and filtering
- 🌐 Multi-language support
- ♿ Improved accessibility (WCAG)
- 🧪 Unit and integration testing
- 💾 Offline support using service workers
- 📱 Progressive Web App (PWA)

---

# 📄 License

This project is licensed under the MIT License.

Feel free to fork, modify, and use it for learning or personal projects.

---

## 👨‍💻 Author

**Adeel Alam**

- GitHub: https://github.com/Adeel-Alam-Git
- LinkedIn: https://www.linkedin.com/in/adeel-me

---

⭐ If you found this project useful, consider giving it a star on GitHub!