const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Stock', {
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology:true
    
})

const db = mongoose.connection;
db.once("open", () =>
{
    console.log('connected');
}).catch((err) => {
    console.log('not connected',err);
})

module.exports = db;