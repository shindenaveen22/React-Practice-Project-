# React practice app

## Run locally

Open a terminal in this directory, install dependencies, and start Vite:

```sh
npm install
npm run dev
```

Open the local URL printed by Vite (by default, `http://localhost:5173`).

## Product API

The product list, delete, and Formik save screens use a backend with the
`/ProductApi/getall`, `/ProductApi/add`, and `/ProductApi/delete/:id` endpoints.
Set `VITE_API_BASE_URL` in a `.env.local` file to the backend origin before
starting Vite. For example, set it to `http://localhost:5000` if that is the
origin used by your backend. Configure the actual backend origin for your
environment; without it, these API-backed screens display a configuration
error. Restart Vite after changing the environment file.

## Checks

```sh
npm run lint
npm run build
```
