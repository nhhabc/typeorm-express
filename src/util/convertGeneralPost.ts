import { Image } from './../entity/Image.entity';
import { getRepository } from "typeorm"

export const convertGeneralPost = async (post: any) => {
  const postImages = await getRepository(Image).find({
    where: { appartmentId: post.id }
  })

  const generalProduct: any = { ...post }
  generalProduct.images = postImages;

  return generalProduct
}