# TaskVera

TaskVera is a real-time task management application for short-lived room-based collaboration between admins and users. Admins create rooms and tasks; users join with a room ID and respond with statuses such as "Done" or "Issue." Updates are propagated instantly via WebSockets.

---

## Quickstart

Prerequisites:

- Install a recent Node.js (v18+ recommended).
- Install `pnpm` (optional but recommended):

```bash
npm install -g pnpm
```

Run the app locally (two terminals):

1. Start the backend server:

```bash
cd server
pnpm install
pnpm dev
```

The server listens on `http://localhost:5500` by default (override with `PORT`).

2. Start the frontend:

```bash
cd client
pnpm install
pnpm dev
```

Open the frontend at `http://localhost:5173`.

---

## Environment

The server reads environment variables from `.env.local` (or system env). Common variables:

- `PORT` — backend port (default: `5500`)
- `CLIENT_URL` — origin allowed by CORS (e.g. `http://localhost:5173`)

Create a `.env.local` file in `server/` when you need to override defaults.

---

## Features

- Real-time task updates using Socket.IO
- Room-based collaboration with 6-digit room IDs
- Admin dashboard to monitor responses
- Minimal React + Tailwind frontend

---

## Tech Stack

- Frontend: React + Vite + Socket.IO Client
- Backend: Node.js + Express + Socket.IO
- Styling: Tailwind CSS

---

## Roadmap

- User authentication
- Task history / persistence
- Notifications and multi-admin support

---

## License

This repository is proprietary. You may view the code for educational purposes only. Do not copy, modify, or redistribute without permission.
