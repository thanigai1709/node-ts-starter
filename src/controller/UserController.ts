import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { User } from "../entity/User";

export class UserController {
	private userRepository = getRepository(User);
	constructor() {}

	static async create(request: Request, response: Response, next: NextFunction) {
		console.log("created");
	}
	static async find(request: Request, response: Response, next: NextFunction) {
		response.send({
			message: "hello world",
		});
	}
}
