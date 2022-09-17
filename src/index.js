import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
const app = express();
require('dotenv/config');


const bodyParser = require('bodyparser');

const postsRoute = require ('./routes/posts');

app.use(bodyParser.json());

//Middleware
app.use('/posts', postsRoute)
// app.use('/user', userRoute)

app.use(express.json({limit:'30mb', extended: true}))
app.use(express.urlencoded({limit:'30mb', extended: true}))
app.use(cors())


//Middleware
    // app.use('/posts', () => {
    //     console.log('This is middleware running');
    // });


//Routes
app.use('/', (request, response) => {
    console.log('default api')
    response.json(request.query)
})


app.get('/posts', (request, response) => {
    response.send('Posts')
})


const mongoDB = process.env.DB_CONNECTION
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('Database connected');
        app.listen(3000, () => {
            console.log('Server is running on port 3000...');
        });
    })
    .catch((error) => {console.log('Failed connecting db', error)})

