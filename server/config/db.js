const mongoose = require('mongoose');
// let localPath = 'mongodb://localhost:27017/ethereum'
let dbMame = 'mongodb+srv://ranausama48:etherumprice@cluster0-zqqr0.mongodb.net/test?retryWrites=true&w=majority'
 mongoose.connect( dbName, {
    useNewUrlParser: true,
    useCreateIndex: true
})
mongoose.connect(localPath, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(()=>{
    console.log('db connected');
    
})
// const mongoose = require('mongoose');

//  mongoose.connect('mmongodb://wajid:wajid1234@ds211168.mlab.com:11168/etheumprice', {
//     useNewUrlParser: true,
//     useCreateIndex: true
// })
