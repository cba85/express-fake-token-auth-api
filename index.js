const express = require("express");
const app = express();
var cors = require("cors");
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  const html = `<html><body><h2>Available routes</h2><ul><li><pre><code>GET /</code> <mark>[current HTML route]</mark></pre></li><li><pre><code>POST /register</code></pre></li><li><pre><code>POST /login</code></pre></li><li><pre><code>GET /me</code></pre></li></ul><p>See README file for more information.</p></body></html>`;
  res.send(html);
});

app.post("/login", (req, res) => {
  if (
    !req.body.email ||
    !req.body.password ||
    req.body.password.length < 8 ||
    !req.body.email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
  ) {
    return res.status(422).json({ error: "Unprocessable Entity" });
  }

  res.json({
    id: 1,
    username: "user",
    email: req.body.email,
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsInVzZXJuYW1lIjoia21pbmNoZWxsZSIsImVtYWlsIjoia21pbmNoZWxsZUBxcS5jb20iLCJmaXJzdE5hbWUiOiJKZWFubmUiLCJsYXN0TmFtZSI6IkhhbHZvcnNvbiIsImdlbmRlciI6ImZlbWFsZSIsImltYWdlIjoiaHR0cHM6Ly9yb2JvaGFzaC5vcmcvYXV0cXVpYXV0LnBuZz9zaXplPTUweDUwJnNldD1zZXQxIiwiaWF0IjoxNjM1NzczOTYyLCJleHAiOjE2MzU3Nzc1NjJ9.n9PQX8w8ocKo0dMCw3g8bKhjB8Wo7f7IONFBDqfxKhs",
  });
});

app.post("/register", (req, res) => {
  if (
    !req.body.username ||
    !req.body.email ||
    !req.body.password ||
    req.body.password.length < 8 ||
    !req.body.email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
  ) {
    return res.status(422).json({ error: "Unprocessable Entity" });
  }

  res.status(201).json({
    id: 1,
    username: "user",
    email: req.body.email,
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsInVzZXJuYW1lIjoia21pbmNoZWxsZSIsImVtYWlsIjoia21pbmNoZWxsZUBxcS5jb20iLCJmaXJzdE5hbWUiOiJKZWFubmUiLCJsYXN0TmFtZSI6IkhhbHZvcnNvbiIsImdlbmRlciI6ImZlbWFsZSIsImltYWdlIjoiaHR0cHM6Ly9yb2JvaGFzaC5vcmcvYXV0cXVpYXV0LnBuZz9zaXplPTUweDUwJnNldD1zZXQxIiwiaWF0IjoxNjM1NzczOTYyLCJleHAiOjE2MzU3Nzc1NjJ9.n9PQX8w8ocKo0dMCw3g8bKhjB8Wo7f7IONFBDqfxKhs",
  });
});

app.get("/me", (req, res) => {
  if (!req.headers.authorization) {
    return res.status(422).json({ error: "Unprocessable Entity" });
  }

  const authorization = req.headers.authorization;
  const token = authorization.split(" ");

  if (token.length !== 2 || token[0] !== "Bearer") {
    return res.status(401).json({ error: "Unauthorized" });
  }

  res.json({
    id: 1,
    username: "user",
    email: "user@email.com",
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsInVzZXJuYW1lIjoia21pbmNoZWxsZSIsImVtYWlsIjoia21pbmNoZWxsZUBxcS5jb20iLCJmaXJzdE5hbWUiOiJKZWFubmUiLCJsYXN0TmFtZSI6IkhhbHZvcnNvbiIsImdlbmRlciI6ImZlbWFsZSIsImltYWdlIjoiaHR0cHM6Ly9yb2JvaGFzaC5vcmcvYXV0cXVpYXV0LnBuZz9zaXplPTUweDUwJnNldD1zZXQxIiwiaWF0IjoxNjM1NzczOTYyLCJleHAiOjE2MzU3Nzc1NjJ9.n9PQX8w8ocKo0dMCw3g8bKhjB8Wo7f7IONFBDqfxKhs",
  });
});

app.post("/logout", (req, res) => {
  if (!req.headers.authorization) {
    return res.status(422).json({ error: "Unprocessable Entity" });
  }

  const authorization = req.headers.authorization;
  const token = authorization.split(" ");

  if (token.length !== 2 || token[0] !== "Bearer") {
    return res.status(401).json({ error: "Unauthorized" });
  }

  res.status(204).json(null);
});

app.listen(port, () => {
  console.log(`CORS-enabled web server listening on port ${port}`);
});
