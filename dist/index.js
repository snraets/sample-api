"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const randomstring_1 = __importDefault(require("randomstring"));
const holder = [];
const identifier = randomstring_1.default.generate(30);
const app = express_1.default();
const port = 3000;
app.get('/', (req, res) => {
    console.log(`${identifier}  handled request`);
    const newString = randomstring_1.default.generate(1000);
    setTimeout(() => res.send(`Hello World ${identifier}`), 5000);
    // holder.push(newString);
    // res.send(`Hello World ${identifier}`);
});
app.listen(port, () => console.log(`${identifier} app listening on port ${port}!`));
