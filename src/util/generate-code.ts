import * as jwt from "jsonwebtoken";

require("dotenv").config();

export class JwtUtil {
    static createToken = (id: any) => jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    })

    static verify = (token: string) => jwt.verify(token, process.env.JWT_SECRET)
}