const express = require('express');
const app = express();
const {body, validationResult} = require('express-validator/check');
const bodyParser = require('body-parser');
const {userValidator,loginValidator} = require('./services/validator');
const userController = require('./controllers/users-controller');


app.use(express.json());

app.get('/hello', (req,res,next) =>{
    res.send('Hello u mafucker');
});

app.post('/api/signup', userValidator, userController.create);
app.post('/api/signup', userValidator, userController.login);
app.listen(3000, () =>{
    console.log('Server started on 4000 port');
})