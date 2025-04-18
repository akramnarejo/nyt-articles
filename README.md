# NYT Most Popular Articles App

A simple React + Vite application that displays the most popular articles from the New York Times using their public API.

## 📦 Setup

```bash
npm install
```

## 🚀 Run the App

```bash
npm run dev
```
Visit [http://localhost:5173](http://localhost:5173) in your browser.

## 🧪 Run Cypress UI Tests

1. Start the Vite dev server:

```bash
npm run dev
```

2. Open Cypress in interactive mode:

```bash
npx cypress open
```

3. Or run Cypress headlessly:

```bash
npx cypress run
```

Make sure your test files are located in `cypress/e2e/`.

## 🧰 Scripts

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "cypress": "cypress open",
  "cypress:run": "cypress run"
}
```

