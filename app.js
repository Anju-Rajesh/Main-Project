const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

const userReg = require('./routes/userRoutes');
const authReg = require('./routes/auth');
const donorReg = require('./routes/donorRoutes');
const donorAuth = require('./routes/donorAuth');
const donorFetch = require('./routes/donorFetch'); 
const donorEdit = require('./routes/donorEdit');
const donorDelete = require('./routes/donorDelete');
const adminReg=require('./routes/adminRoutes');
const adminAuth=require('./routes/adminAuth');
const userviewdelete = require('./routes/userviewdelete');




app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/api/users', userReg);
app.use('/api/auth', authReg);
app.use('/api/donors', donorReg);
app.use('/api/donorauth', donorAuth);
app.use('/api/donorfetch', donorFetch); 
app.use('/api/donorEdit', donorEdit);
app.use('/api/donorDelete', donorDelete);
app.use("/api/admins", adminReg);
app.use("/api/adminauth", adminAuth);
app.use("/api/userviewdelete", userviewdelete);


app.listen(8080, () => {
    console.log("Port 8080 is up and running");
});





