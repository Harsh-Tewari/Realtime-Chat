const express = require("express");
const { chats } = require("./data/data");
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/chat", (req, res) => {
  res.send(chats);
});

//to get single chat
app.get("/api/chat/:id", (req, res) => {
  let singleChat = chats.find((c) => c._id === req.params.id);
  res.send(singleChat);
  res.send(chats);
});
