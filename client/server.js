
const Item = require('./models/items')
const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');

// cross origin access 
const cors = require('cors');

require('./config/database.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))


// access
app.use(cors({
    origin: "*"
}));

// logs the different requests to our server
app.use(logger('dev'))

//parse stringified objects (JSON)
app.use(express.json())

// server build folder
app.use(express.static(path.join(__dirname, 'build')));

app.get('/test_route', (req, res) => {
    res.send("good route!")
})

app.post('/create_item', async (req, res) => {
    const {item:name} = req.body;
    console.log(req.body);
    let returnedValue = await Item.create({
        name
    })
    console.log(returnedValue);
    if(returnedValue){
        console.log("Upload complete!");
    } 
    res.send(returnedValue);
    
});

app.put('/update/:productId', async (req, res) => {
    let response = await Item.findByIdAndUpdate(req.params.productId, req.body, {new: true});
    console.log("response", response);
    res.send(response)
})

app.get('/get_items', async (req, res) => {
    let response = await Item.find();
    console.log(response);
    res.send(response);
})

app.delete('/delete/:productId', async (req, res) => {
    console.log(req.body);
    let response = await Item.findByIdAndDelete(req.params.productId)
    res.send(response);
})


app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(5000, () => {
    console.log(`Server is Listening on 5000`)
});