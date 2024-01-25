const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

const userReg = require('./routes/userRoutes');
const authReg = require('./routes/auth');
const donorReg = require('./routes/donorRoutes'); 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/api/users', userReg);
app.use('/api/auth', authReg);
app.use('/api/donors', donorReg); 

app.listen(8002, () => {
    console.log("Port 8002 is up and running");
});
