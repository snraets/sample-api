import express from 'express';
import randomString from 'randomstring';

const holder:string [] = [];
const identifier = randomString.generate(30);

const app = express();

const port = 3000;

app.get('/', (req, res) => {


    console.log(`${identifier}  handled request`)
    const newString = randomString.generate(1000);

    setTimeout(() => res.send(`Hello World ${identifier}`), 5000);

    // holder.push(newString);
    // res.send(`Hello World ${identifier}`);
})

app.listen(port, () => console.log(`${identifier} app listening on port ${port}!`))