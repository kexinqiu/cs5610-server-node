import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import helloController from "./controller/hello-controller.js";
import userController from "./controller/user-controller.js";
import tuitsController from "./controller/tuits-controller.js";

 // const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
const CONNECTION_STRING ='mongodb+srv://kexinqiu:qkx123456789@cluster0.3evfp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
    || 'mongodb://localhost:27017/webdev'

mongoose.connect(CONNECTION_STRING);


const app = express();
app.use(express.json());
app.use(cors());

helloController(app);
userController(app);
tuitsController(app);

app.listen(process.env.PORT || 4000);