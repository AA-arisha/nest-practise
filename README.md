# NestUserRecipes (NestJS & Mongo Demo) 🔧

A small **NestJS demo app** demonstrating:

- A simple **Users API** backed by MongoDB (Mongoose) — create and list users.  
- A **Recipes endpoint** that fetches recipe data from an external API (uses axios).  
- Built with **TypeScript** and tested with **Jest**.  

---

## 🚀 Features
- `POST /users` — create a user (name, email, password)  
- `GET /users` — list all users  
- `GET /recipes` — fetch recipes from an external API  
- **Mongoose integration** for persistence  
- Development scripts, linting, and tests (Jest)  

---

## ⚙️ Requirements
- Node.js (LTS)  
- npm or yarn  
- MongoDB (Atlas or local) — set connection string in environment variables  

---

## 📦 Setup & Run
1. **Install dependencies:**  
```bash
npm install
````

2. **Environment variables:**
   Create a `.env` file in the project root and add your MongoDB connection string:

```
MONGODB_URL=mongodb+srv://<username>:<password>@cluster0.mongodb.net/dbname
```

> ⚠️ Note: The repository currently uses a hardcoded Mongo connection in `app.module.ts`. It’s recommended to replace it with `process.env.MONGODB_URL`.

3. **Run the app:**

```bash
npm run start:dev
```

---

## 🌐 API Endpoints

* `POST http://localhost:3000/users` — body:

```json
{ "name": "...", "email": "...", "password": "..." }
```

* `GET http://localhost:3000/users`
* `GET http://localhost:3000/recipes`

---

## 🔨 Available Scripts

* `npm run start` — start production server
* `npm run start:dev` — start in watch mode
* `npm run build` — build the project
* `npm run test` — run unit tests
* `npm run test:e2e` — run e2e tests

---

## 🗂 Project Structure (High Level)

* `src/controllers` — HTTP controllers (users, recipes)
* `src/services` — service logic (users service, recipe fetcher)
* `src/schemas` — Mongoose schemas (User)
* `src/dto` — DTOs (CreateUserDto)
* `src/modules` — feature modules (UsersModule, RecipeModule)

---

## 🔒 Improvements & Security Notes

* Remove hardcoded MongoDB URI from `app.module.ts` and use `process.env.MONGODB_URL` (dotenv).
* Validate inputs (use `class-validator` decorators on DTOs) before saving users.
* Hash user passwords (e.g., bcrypt) instead of storing plaintext.
* Add request/response validation and proper error handling.
* Add authentication/authorization if exposing user data in production.
* Consider adding **Docker** for easy local dev and CI/CD pipeline.

