const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const cors = require('cors');

const db = require('./config');

const app = express();
app.use(router);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.use(cors);

router.get('/',(req,res)=>{
    res.status(200).send({'message':'Hello World'});
});

router.post("/create", async(req,res) => {
  
    try {
      console.log(req.body);
        const {name, email, password} = req.body;
        console.log(req);
        return "hello";

        const doc = await db.collection('users').doc().set({
            name,
            email,
            password
        },{merge:true});
        return res.status(201).send(doc);
    } catch (error) {
      // console.log(error);
        return res.status(500).send(error);
    }
});

app.listen(4000, () => console.log('Up and Running on *4000*'));