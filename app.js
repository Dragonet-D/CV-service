const Koa = require('koa');
const db = require('./db')
const router = require('koa-router')()

const { personModel } = db

const app = new Koa();

// log request url
app.use(async (ctx, next) => {
  if (ctx.url !== "favicon.ico") {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
  }
  await next();
});

// add url-route
router.get('/hello/:name', async (ctx, next) => {
  const name = ctx.params.name;
  ctx.response.body = `<h1>Hello, ${name}</h1>`
});

router.get('/', async (ctx, next) => {
  ctx.response.body = '<h1>Index</h1>'
});

router.get('/user', async (ctx, next) => {
  await personModel.findOne({}, (err, docs)=>{
    if(!err){
      console.log(docs.toJSON())
      ctx.status = 200
      ctx.response.body = docs.toJSON()
    }
  })
})

// add router middleware
app.use(router.routes());

app.listen(3001);