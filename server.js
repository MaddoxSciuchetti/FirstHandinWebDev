const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Home</title>
      </head>
      <body>
        <h1>Minimal Express Server</h1>
        <p>This is the home page.</p>
        <p><a href="/about">Go to About</a></p>
        <p>Click here for a personal greeting:</p>
        <form onsubmit="event.preventDefault(); const name = document.getElementById('name').value.trim(); if (name) { window.location.href = '/hello/' + encodeURIComponent(name); }">
          <input id="name" type="text" placeholder="Type your name" />
          <button type="submit">Open Greeting</button>
        </form>
      </body>
    </html>
  `);
});

app.get("/about", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>About</title>
      </head>
      <body>
        <h1>About</h1>
        <p>This backend has three routes, including one dynamic route.</p>
        <p><a href="/">Back to Home</a></p>
      </body>
    </html>
  `);
});

app.get("/hello/:name", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Greeting</title>
      </head>
      <body>
        <h1>Hi ${req.params.name}</h1>
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
