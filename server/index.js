import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose  from 'mongoose';
import posts from './routers/posts.js'

const url = 'mongodb+srv://dat1:123@cluster0.ooo8q.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true,
    limit:'30mb'
}))

app.use(cors());

app.get('/', (req, res) => {
    res.send('SUCCESS');
})

app.use('/posts', posts);

mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true })
    .then(() =>{
        console.log('connected to db');
    })
    .catch((err)=>{
        console.log(err);
    })

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
});
