const mongoose = require('mongoose');

const URI = 'mongodb://localhost:27017/mywebstore';
const db = mongoose.connection;


mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .catch(err=>(console.log(`Database connect error: ${err}`)));

db.once('open', _ => {
    console.log(`Database is connected to ${URI}`);
})

db.on('error', err => {
    console.log(`Database error: ${err}`);
})