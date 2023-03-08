import { NextFunction, Request, RequestHandler, Response } from "express"
import { User } from "../entity/User.entity"

export class UserController {

    getAllUsers: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
      try {
			} catch (err) {
				console.log(err);
				res.status(400).json(err)
			}
    }

    async all(request: Request, response: Response, next: NextFunction) {

    }

    async one(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id)
     
    }

    async save(request: Request, response: Response, next: NextFunction) {
        const { firstName, lastName, age } = request.body;

        const user = Object.assign(new User(), {
            firstName,
            lastName,
            age
        })

    }

    async remove(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id)


        return "user has been removed"
    }

}