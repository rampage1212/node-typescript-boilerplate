import * as express from 'express';
const port = 3000;
const app:express.Application =  require('./app/app');

app.listen(port, () => {
    console.log("Node app is running at localhost:" + port);
});