import { getRepository } from "typeorm";
import { Image } from "../entity/Image.entity";
import { getDisplayUrl } from "./convertImgFile";

export const saveImageFiles = async (files, post) => {
  try {
    for (let i = 0; i < files.length; i++) {
      const imageBuffer = files[i].buffer;
      const url = await getDisplayUrl(imageBuffer, "imagePost");
      const newImage = {
        src: url,
        appartmentId: post.id,
      };
      const imgDetail = await getRepository(Image).create(newImage);
      await getRepository(Image).save(imgDetail);
    }
  } catch (err) {
    console.log(err);
  }
};
