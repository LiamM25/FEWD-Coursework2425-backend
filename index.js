const express = require("express");
const cors = require('cors');
const path = require('path');

const app = express();

// Set CORS options based on the environment
const corsOptions = {
  origin: process.env.NODE_ENV === 'production' 
    ? 'https://fewd-cw.onrender.com' 
    : 'http://localhost:3000',  
  credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

const router = require('./routes/routes');
app.use('/', router);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log("Server started on port 3001. Ctrl^c to quit.");
});
