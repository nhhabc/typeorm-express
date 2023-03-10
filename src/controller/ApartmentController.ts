import { ResponseMessage } from './../util/enum/respondMessageEnum';
import { NextFunction, Response } from "express";
import { getRepository } from "typeorm";
import { RentedApartment } from "../entity/RentedApartment.entity";
import { SellingApartment } from "../entity/SellingApartment.entity";
import { HttpCodeEnum } from "../util/enum/httpCodeEnum";
import { saveImageFiles } from "../util/saveImgFile";
import { convertGeneralPost } from '../util/convertGeneralPost';

export class ApartmentController {
  static createApartmentPost = async (
    req: any,
    res: Response,
    next: NextFunction
  ) => {
    try {
      console.log(req.user);

      const query = req.params.query;
      const fileBuf = req.files.detail[0].buffer;
      const listImg = req.files.files;
      const postDetail = JSON.parse(fileBuf.toString());
      const newPost = {
        title: postDetail.title,
        description: postDetail.description,
        preview: postDetail.preview,
        area: postDetail.area,
        bathrooms: postDetail.bathNum,
        bedrooms: postDetail.bedNum,
        floor: postDetail.floor,
        juridical: postDetail.juridical,
        requirement: postDetail.requirement,
        price: postDetail.price,
        type: postDetail.type,
        address: postDetail.location,
      };

      let post: any;
      let postResult: any;
      if (query === "rent") {
        post = getRepository(RentedApartment).create(newPost);
        postResult = await getRepository(RentedApartment).save(post);
      } else {
        post = getRepository(SellingApartment).create(newPost);
        postResult = await getRepository(SellingApartment).save(post);
      }

      if (listImg) {
        await saveImageFiles(listImg, postResult);
      }
      res.json(post);
    } catch (err) {
      console.log(err);
      res.status(HttpCodeEnum.BadRequest).json(ResponseMessage.DataCreateError)
    }
  };

  static getAllApartmentPost = async (req: any, res: Response, next: NextFunction) => {
    try {
      const query = req.params.query;

      const posts = []
      let allPost: any

      if (query === "sell") {
        allPost = await getRepository(SellingApartment).find()
        for (const post of allPost) {
          const convertedPost = await convertGeneralPost(post);
          posts.push(convertedPost)
        }
      } else {
        allPost = await getRepository(RentedApartment).find()
        for (const post of allPost) {
          const convertedPost = await convertGeneralPost(post);
          posts.push(convertedPost)
        }
      }

      res.json(posts)

    } catch (err) {
      console.log(err);
      res.status(HttpCodeEnum.BadRequest).json(ResponseMessage.DataFetchingError)
    }
  }
}
