import { ResponseMessage } from './../util/enum/respondMessageEnum';
import { NextFunction, Request, RequestHandler, Response } from "express"
import { getRepository } from "typeorm";
import { Admin } from "../entity/Admin.entity"
import { HttpCodeEnum } from "../util/enum/httpCodeEnum";
import { JwtUtil } from '../util/generate-code';

export class AuthController {

    static login: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
      try {
        const { username, password } = req.body

        if (!username || !password) {
          res.status(HttpCodeEnum.BadRequest).json(ResponseMessage.MissingUsernameAndPassword)
          return
        }
        const admin = await getRepository(Admin).findOne({where: {username: username}})

        const correct = admin.password === password
        if(correct) {
          const token = JwtUtil.createToken(admin.id)
          res.json(token)
        } else {
          res.status(HttpCodeEnum.UnAuthorized).json(ResponseMessage.IncorrectUsernameOrPass)
          return
        }
			} catch (err) {
				console.log(err);
				res.status(400).json(err)
			}
    }
}