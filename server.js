const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3100;

app.use(express.static(path.join(__dirname, "public")));

app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    site: "ALG Net"
  });
});

app.use((req, res) => {
  const notFound = path.join(__dirname, "public", "404.html");

  if (require("fs").existsSync(notFound)) {
    return res.status(404).sendFile(notFound);
  }

  res.status(404).send("404 - Page not found");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`ALG Net running on port ${PORT}`);
});
