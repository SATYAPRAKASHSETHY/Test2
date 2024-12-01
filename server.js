/*const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const xlsx = require("xlsx");
const path = require("path");

const app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

// Save Results in Excel
app.post("/submit", (req, res) => {
  const { name, roll, email, batch, answers } = req.body;
  const fileName = `responses_${batch}.xlsx`;

  const data = [[name, roll, email, batch, JSON.stringify(answers)]];
  if (!fs.existsSync(fileName)) {
    const ws = xlsx.utils.aoa_to_sheet([["Name", "Roll", "Email", "Batch", "Answers"]]);
    const wb = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(wb, ws, "Responses");
    xlsx.writeFile(wb, fileName);
  }

  const wb = xlsx.readFile(fileName);
  const ws = wb.Sheets["Responses"];
  xlsx.utils.sheet_add_aoa(ws, data, { origin: -1 });
  xlsx.writeFile(wb, fileName);

  res.status(200).send({ message: "Responses Saved!" });
});

// Start Server
app.listen(3000, () => console.log("Server running on port 3000"));
*/

/*
const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const xlsx = require("xlsx");
const path = require("path");

const app = express();
app.use(bodyParser.json());  // Middleware to parse JSON data from requests
app.use(express.static(path.join(__dirname, "public")));  // Serve static files

// Save Results in Excel
app.post("/submit", (req, res) => {
  const { name, roll, email, batch, answers } = req.body;  // Extract user data and answers from the request
  const fileName = `responses_${batch}.xlsx`;  // Save responses in a batch-specific Excel file

  // Create an array of data to append to the Excel file
  const data = [[name, roll, email, batch, JSON.stringify(answers)]];

  // If the Excel file doesn't exist, create it and add headers
  if (!fs.existsSync(fileName)) {
    const ws = xlsx.utils.aoa_to_sheet([["Name", "Roll", "Email", "Batch", "Answers"]]);
    const wb = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(wb, ws, "Responses");
    xlsx.writeFile(wb, fileName);
  }

  // Read the existing Excel file
  const wb = xlsx.readFile(fileName);
  const ws = wb.Sheets["Responses"];

  // Append new data to the Excel file
  xlsx.utils.sheet_add_aoa(ws, data, { origin: -1 });

  // Write the updated Excel file
  xlsx.writeFile(wb, fileName);

  // Send a response back to the client
  res.status(200).send({ message: "Responses Saved!" });
});

// Start Server
app.listen(3000, () => console.log("Server running on port 3000"));
*/

const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const xlsx = require("xlsx");
const path = require("path");

const app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

// Retry logic for opening the file if it's locked
const writeFileWithRetry = (fileName, data, retries = 3, delay = 1000) => {
  return new Promise((resolve, reject) => {
    let attempt = 0;
    const tryWrite = () => {
      attempt++;
      try {
        const wb = xlsx.readFile(fileName);
        const ws = wb.Sheets["Responses"];
        xlsx.utils.sheet_add_aoa(ws, data, { origin: -1 });
        xlsx.writeFile(wb, fileName);
        resolve();
      } catch (err) {
        if (attempt < retries) {
          console.log(`Attempt ${attempt} failed, retrying...`);
          setTimeout(tryWrite, delay);
        } else {
          reject(err);
        }
      }
    };
    tryWrite();
  });
};

// Save Results in Excel
app.post("/submit", (req, res) => {
  const { name, roll, email, batch, answers, score } = req.body;

  const fileName = `responses_${batch}.xlsx`;

  // Prepare data to be saved (including the score out of 20)
  const data = [
    [name, roll, email, batch, JSON.stringify(answers), score],
  ];

  // Check if file exists, if not create it
  if (!fs.existsSync(fileName)) {
    const ws = xlsx.utils.aoa_to_sheet([
      ["Name", "Roll", "Email", "Batch", "Answers", "Score"]
    ]);
    const wb = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(wb, ws, "Responses");
    xlsx.writeFile(wb, fileName);
  }

  // Use the retry mechanism to save data
  writeFileWithRetry(fileName, data)
    .then(() => {
      res.status(200).send({ message: "Responses Saved!" });
    })
    .catch((error) => {
      console.error("Error saving file:", error);
      res.status(500).send({ message: "Error saving responses. Please try again." });
    });
});

// Start Server
app.listen(3000, () => console.log("Server running on port 3000"));
