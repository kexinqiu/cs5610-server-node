import express from 'express';
import cors from 'cors';
import helloController from "./controller/hello-controller.js";
import userController from "./controller/user-controller.js";
import tuitsController from "./controller/tuits-controller.js";

const app = express();
app.use(express.json());
app.use(cors());

helloController(app);
userController(app);
tuitsController(app);

app.listen(process.env.PORT || 4000);