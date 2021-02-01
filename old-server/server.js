// this is only used for local testing

const port = 3001;

const express = require("express");

const app = express();

app.use(express.static("js/public/"));

app.listen(port);
console.log(`Listening on port ${port}`);
