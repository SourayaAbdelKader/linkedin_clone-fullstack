const express = require('express');
const app = express();
app.use(express.json());
require('dotenv').config();
require('./config/db.config');

const authRoutes = require('./routes/auth.routes');
app.use('/auth', authRoutes);

const userRoutes = require('./routes/users.routes');
app.use('/users', userRoutes);

app.listen(process.env.PORT, (err)=>{
    if(err) throw err;
    console.log(`server running on port ${process.env.PORT}`);
})