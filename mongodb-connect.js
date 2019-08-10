const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/node-blog', {
    useNewUrlParser: true
}, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB');
    }
    console.log('Connected to MongoDB');

    client.close();
});
MongoClient