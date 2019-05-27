const app = require('express')();
const PORT = process.env.PORT || 8000;

app.use((req, res, next) => {
    console.log(req.url);
    next();
})

app.get('/', (req, res) => {
    res.send("hiii");
});


app.get('/clock', (req, res) => {
    const date = new Date();
    console.log(date);
    res.send({date});
});


app.listen(PORT, () => {
    console.log("server listening on " + PORT);
})