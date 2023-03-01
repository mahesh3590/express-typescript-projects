import express, { Express } from 'express';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import "reflect-metadata";
import container from "./inversify.config";
import { InversifyExpressServer } from "inversify-express-utils";
import * as bodyParser from 'body-parser';

import "./application/rest_api/post_controller";


dotenv.config();

const app: Express = express();
const port = process.env.PORT;

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Blog',
      version: '1.0.0',
    },
  },
  apis: ['./src/application/rest_api/**/*.ts'],
};

const specs = swaggerJsdoc(options);

let server =  new InversifyExpressServer(container);

server.setConfig((app) => {
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());
  app.use(
    `/swagger`,
     swaggerUi.serve,
     swaggerUi.setup(specs) 
  )
  app.use(`/swagger-spec`,(req,res,next)=>{
    res.send(specs);
    next();
  });
});

let serverInstance = server.build();
serverInstance.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});