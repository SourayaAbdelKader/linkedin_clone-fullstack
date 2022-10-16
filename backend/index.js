const express = require('express');
const app = express();
app.use(express.json());
require('dotenv').config();
require('./config/db.config');
const authMiddleware = require("./middlewares/auth.middleware");

const authRoutes = require('./routes/auth.routes');
app.use('/auth', authRoutes);

const authcompanyRoutes = require('./routes/authcompany.routes');
app.use('/authcompany', authcompanyRoutes);

const userRoutes = require('./routes/user.routes');
app.use('/users', authMiddleware, userRoutes);

app.listen(process.env.PORT, (err)=>{
    if(err) throw err;
    console.log(`server running on port ${process.env.PORT}`);
})