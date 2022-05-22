var mongoose = require('mongoose'); 

//mongoose.set('useFindAndModify', false);//evita depreciações

//conexão local
var mongoDB_URI = 'mongodb://127.0.0.1:27017/crud';
mongoose.connect(mongoDB_URI,{useNewUrlParser:true});

//armazena a conexão em uma variável
var db = mongoose.connection;

//escutar o banco de dados
db.on('connected',()=>{
    console.log('Mongoose Connected to '+mongoDB_URI);
});
db.on('disconnected',()=>{
    console.log('Mongoose Disconnected to'+mongoDB_URI);
});
db.on('error',(err)=>{
    console.log('Mongoose Error: '+err)
})