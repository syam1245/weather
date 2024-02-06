const express = require('express');
const path = require('path'); 
const app = express();
const port = 4000;
const cors = require('cors');
const User = require('./db');
const signupRoute = require('./routes/signup');
const signinRoute = require('./routes/signin');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const buildPath = path.join(__dirname, "../Client/build"); 

app.use(express.static(buildPath));

app.get("/", async (req, res) => {
  try {
    await res.sendFile(path.join(__dirname, "../Client/build/index.html"));
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

// Use the separated routes
app.use('/signup', signupRoute);
app.use('/signin', signinRoute);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
