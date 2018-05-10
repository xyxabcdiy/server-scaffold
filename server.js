const Koa = require('koa');
const KoaStatic = require('koa-static');
const app = new Koa();
const port = 3000;

app.use(KoaStatic('./src'));

app.listen(port, () => {
    console.log(`Server Listening in ${port}...`);
});