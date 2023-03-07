const mongoose = require('mongoose');


let connectionString = 'mongodb+srv://PerScholasUser:Benjiprice10@cluster0.naxgcuo.mongodb.net/MOD3?retryWrites=true&w=majority'

mongoose.set('strictQuery', false);
// connect to our MongoDB database (our Models specify which collections)
mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
// function will activate once to let us know we are connected
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});