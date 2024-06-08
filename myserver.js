const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

// MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root123",
  database: "todo",
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("MySQL Connected...");
});

// Add task
app.post("/addtask", (req, res) => {
  const task = req.body.task;
  const query = `INSERT INTO tasks (task, status) VALUES ('${task}', 'pending')`;
  db.query(query, (err, result) => {
    if (err) throw err;
    res.send("Task added");
  });
});

// Get all tasks
app.get("/tasks", (req, res) => {
  const query = "SELECT * FROM tasks";
  db.query(query, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Update task status
app.put("/updatetask/:id", (req, res) => {
  const taskId = req.params.id;
  const { status, task } = req.body;
  const query = status
    ? `UPDATE tasks SET status = '${status}' WHERE id = ${taskId}`
    : `UPDATE tasks SET task = '${task}' WHERE id = ${taskId}`;
  db.query(query, (err, result) => {
    if (err) throw err;
    res.send("Task updated");
  });
});

// Delete task
app.delete("/deletetask/:id", (req, res) => {
  const taskId = req.params.id;
  const query = `DELETE FROM tasks WHERE id = ${taskId}`;
  db.query(query, (err, result) => {
    if (err) throw err;
    res.send("Task deleted");
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
