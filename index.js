const dotenv = require('dotenv');
dotenv.config()
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const express = require('express');
const app = express();
const port = process.env.PORT || 3001;


const auth = require('./routes/auth');
const blogs = require('./routes/blogs');
// const users = require('./routes/users');

// ---------------------------------------------------------------


mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Connected to MongoDB..."))
    .catch((exc) => console.log(exc.message))
// 


app.use(cors())
app.use(helmet())
app.use(express.json())

app.use("/api/auth", auth);
app.use("/api/blogs", blogs);



app.listen(port, () => {
    console.log(`Server listening at ${port}`)
})
