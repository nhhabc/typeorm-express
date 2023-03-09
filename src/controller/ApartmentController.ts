import { NextFunction, Response } from "express";

export class ApartmentController {
  static createApartmentPost = async (req: any, res: Response, next: NextFunction) => {
    try {
      const query = req.params.query
      const fileBuf = req.files.detail[0].buffer;
      const listImg = req.files.files;
      const postDetail = JSON.parse(fileBuf.toString());
      console.log(query);
      console.log(listImg);
      console.log(postDetail);
      res.json("test")
    } catch (err) {
      console.log(err);
    }
  }

}