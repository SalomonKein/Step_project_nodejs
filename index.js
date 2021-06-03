const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const mongoose = require('mongoose');
const Note = require('./models/Note');
// const ObjectId = mongoose.Types.ObjectId;
const bodyParser = require('body-parser')

let cardID;

app.use(express.json({ type: 'application/*+json' }));

app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.get('/api/url', (req, res) => {
res.status(200).json('/cardList')
})

app.use(express.static(path.resolve(__dirname, 'front_end')));
// app.use(express.json({
//     type: ['application/json', 'text/plain']
//   }));

app.get('/card', async (req, res) => {
    // const curentNote = await Note.findById({cardID});
    res.render('card.ejs',{
        isCard: false,
        isForm: false,
        // curentNote        
    })
});

app.get('/cardList', async (req, res) => {
    const notes = await Note.find({});
    res.render('cardList.ejs', {
        isCard: true,
        isForm: false,
        notes
    })
});

app.get('/createForm', (req, res) => {
    res.render('createForm.ejs', {
        isForm: true,
        isCard: false
    })
});

app.post('/createForm', async (req, res) => {
const note = new Note({
    title: req.body.title,
    content: req.body.content
}) 
await note.save();
res.redirect('/cardList')
})

app.post('/cardList', (req, res) => {
    cardID = req.body;
    console.log(req.body);
    res.json(cardID);
    });

async function start() {
    try{
        await mongoose.connect('mongodb+srv://salomonkein:1q2w3e4r5t6y@cluster0.5hfcv.mongodb.net/notes', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        })
        app.listen(port, () => console.log(`Server has been started on port ${port}...` ));
    }catch(er){
        console.log(er);
    }
}


start();