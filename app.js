const db = require('./project/src/core/db.js');
const express = require('express');
const app = express();
const router = require('./project/src/router/rout.js');
const authMiddleware = require('./project/src/core/authMiddleware');

db();

app.use(express.json());
app.use(express.static("./project"));
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", router);
app.use(authMiddleware);


app.listen(4000, () => {
    console.log("Server is running on http://localhost:4000");
});
