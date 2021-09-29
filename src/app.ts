import "reflect-metadata";
import express, { Application } from "express";
import { createConnection } from "typeorm";
import * as bodyParser from "body-parser";
import { Request, Response } from "express";
import routes from "./routes";
import { User } from "./entity/User";

const app: Application = express();
const connection = createConnection()
	.then((c: any) => {
		console.log(`${c.options.database} db connected !`);
		app.use(bodyParser.urlencoded({ extended: false }));
		app.use(bodyParser.json());
		app.use("/api/v1", routes);
		app.listen(5000, () => console.log(`server running on port 5000`));
	})
	.catch((err) => console.error(err));
