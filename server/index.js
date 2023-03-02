const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

require('dotenv').config();


const app = express();

const salt = bcrypt.genSaltSync(10);


app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(express.json());
app.use(cookieParser());


mongoose.connect(process.env.MONGO_URL)

const PORT = process.env.PORT || 5000;


// register......
app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    try {
        const userDoc = await User.create({
            username,
            password: bcrypt.hashSync(password, salt),
        })
        res.json(userDoc);
    } catch (e) {
        res.status(400).json(e);
    }

});


//login....
app.post('/login', async (req, res) => {


    const { username, password } = req.body;

    const userDoc = await User.findOne({ username });
    const passOk = bcrypt.compareSync(password, userDoc.password);

    if (passOk) {
        //logged in...
        jwt.sign({ username, id: userDoc._id }, process.env.SECRET, {}, (err, token) => {
            if (err) throw err;
            res.cookie('token', token).json('ok');
        })
    } else {
        res.status(400).json('Wrong credentials...')
    }

});

// logged in user
app.get('/profile', (req, res) => {

    res.json(req.cookies);

});



app.listen(PORT);

