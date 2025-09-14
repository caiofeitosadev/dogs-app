# 🐶 Dog Social App - Next.js & TypeScript

### A social photo-sharing app for dogs built with **Next.js**, **React**, and **TypeScript**. This project integrates with the [Origamid Dogs API](https://dogsapi.origamid.dev/) to provide user authentication, photo uploads, comments, and a responsive feed.

---

<p align="center">
  <img src="https://github.com/caiofeitosadev/dog-social-app/blob/main/src/Assets/dog-social-app.gif" alt="Project Screenshot" />
</p>

---

## 🚀 Features

- 🔑 User authentication (login & register)
- 📷 Photo upload with title, weight, and age
- 📰 Infinite scroll feed
- 💬 Comment system
- 👤 User profiles
- 🖼️ Modal photo view with parallel routes
- 📱 Responsive design with CSS Modules
- ⚡ Server & Client Components

## 🛠️ Tech Stack

- [Next.js 15](https://nextjs.org/) (App Router)
- [React 18](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Origamid Dogs API](https://dogsapi.origamid.dev/)
- CSS Modules
- Context API

## 📂 Project Structure

app/
├── foto/[id]/ # Photo page
├── perfil/[user]/ # User profile
├── api/ # API actions (server functions)
└── components/ # Reusable UI components

### 🚀 How to Run the Project

1.  **Clone the repository:**

    ```bash
    git clone [https://github.com/caiofeitosadev/dogs-app.git](https://github.com/caiofeitosadev/dogs-app.git)
    cd dogs-app
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Start the development server:**

    ```bash
    npm run dev
    ```

    The application will be available at `http://localhost:5173/` (or another port indicated by Vite).

---

### 📄 License

This project is under the MIT license.
