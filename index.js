const express = require('express');
const app = express();
const db = require('./db');
const router = require('./router');
const authController = require('./controllers/authController');


const PORT = 5000;

app.use(express.json());


app.use(router);

app.get('/health', (req, res) => {
    return res.send('healthy');
    
});

app.post('/register', authController.register);

db.then(() =>
    {
        app.listen(PORT, () => {
            console.log('Server is running on port: ' + PORT);
        })
    }
).catch((error) => {
    console.error('Error starting server', error.message);
})
