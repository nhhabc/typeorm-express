import { NextFunction, Response } from "express";
import { getRepository } from "typeorm";
import { RentedApartment } from "../entity/RentedApartment.entity";
import { SellingApartment } from "../entity/SellingApartment.entity";
import { saveImageFiles } from "../util/saveImgFile";

export class ApartmentController {
  static createApartmentPost = async (
    req: any,
    res: Response,
    next: NextFunction
  ) => {
    try {
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
    }
  };
}
