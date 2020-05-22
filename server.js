const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const items =  require('./routes/api/Items');

const app = express();

//Body Parser Middleware 
app.use(bodyParser.json());

//Db config
const db = require('./config/keys').mongoURI;

//connect to mongoose
mongoose
    .connect(db, {useNewUrlParser: true, useUnifiedTopology: true} )
    .then(() => console.log('Mongodb is now connected'))
    .catch(error => console.log(error));

app.use('/api/items', items);

//Serve Static assets if in production

if(process.env.NODE_ENV === 'production'){
    //set static folder
    app.use(express.static('client/build'));
    //'*' stands for anything, which is not 'api/items/', so any request which is not 'api/items/'
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}


const port = process.env.PORT || 5000; //fetching port using heroku environment

app.listen(port, () => console.log(`server started on port no. ${port}`));
