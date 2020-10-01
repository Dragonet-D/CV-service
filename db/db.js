const mongoose = require('mongoose')
const DB_URL = 'mongodb://118.24.129.209:27017/test'

mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

db.on('open', () => {
  console.log('链接成功')
})

 // 2. 创建模式对象
let Schema = mongoose.Schema;
let personSchema = new Schema({
   name: String,
     age: Number,
     chat: String,
     sex: {
     type: String,
           default: '男'
   }
 });

// 3. 创建Model集合对象
let personModel = mongoose.model('person', personSchema);

// personModel.create({
//    name: '小撩',
//    age: 25,
//    chat: 'itlike001',
//    sex: '男'
// }).then((data)=>{
//      console.log(data);
// }).catch((err)=>{
//   console.log(err);
// });

personModel.findOne({}, (err, docs)=>{
  if(!err){
    console.log(docs.get('sex'));
    console.log(docs.set('sex', '男'));
    console.log(docs.toJSON());
  }
});

export default personModel