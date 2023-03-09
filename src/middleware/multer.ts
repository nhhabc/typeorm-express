import * as multer from "multer";
import * as path from "path";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    let extArray = file.mimetype.split("/");
    let extension = extArray[extArray.length - 1];
    if(extension !== "json") {
      cb(null, file.fieldname + '-' + Date.now()+ '.' + extension)
    }
  }
})

export const upload = multer({
  storage: storage,
  fileFilter: function (req, file, callback) {
    const ext = path.extname(file.originalname);
    if (ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg' && ext !== '.webp' && file.originalname !== 'blob') {
      return callback(new Error('Only images are allowed'))
    }
    callback(null, true)
  }
})