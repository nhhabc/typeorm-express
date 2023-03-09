import * as imgbbUploader from "imgbb-uploader";

const bufferToBase64 = (buffer: string) =>
  new Promise((resolve) => {
    const buff = Buffer.from(buffer);
    const base64string = buff.toString("base64");
    resolve(base64string);
  });

export const getDisplayUrl = async (buffer, name = "Default-filename") => {
  return await imgbbUploader({
    apiKey: process.env.IMAGE_API,
    base64string: await bufferToBase64(buffer),
    name,
  })
    .then((res) => {
      console.log(`Handle success: ${res.url}`);
      return res.url;
    })
    .catch((e) => {
      console.error(`Handle error: ${e}`);
      return e;
    });
};
