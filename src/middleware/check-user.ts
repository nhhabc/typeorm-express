import { Admin } from './../entity/Admin.entity';
import { getRepository } from 'typeorm';
import { JwtUtil } from "../util/generate-code";
import { Request } from 'express';

interface JwtPayload {
  id: string
}

export interface GetUserAuthInfoRequest extends Request {
  user: any
}

export const checkUser = async (req, res, next) => {
  try {
      // 1) Getting token and check of it's there
      let token;
      if (
          req.headers.authorization &&
          req.headers.authorization.startsWith('Bearer')
      ) {
          token = req.headers.authorization.split(' ')[1];
      }

      if (!token) {
          res.status(404).json('You are not logged in! Please log in to get access.')
          return
      }
      // 2) Verification token
      const { id } = await JwtUtil.verify(token) as JwtPayload;

      // 3) Check if user still exists
      const currentUser = await getRepository(Admin).findOne({ where: { id } });
      if (!currentUser) {
          res.status(404).json('The user belonging to this token does no longer exist.')
          return
      }
      // GRANT ACCESS TO PROTECTED ROUTE
      req.user = currentUser;
      next()
  } catch (err) {
      res.status(404).json('Login failed')
  }
}