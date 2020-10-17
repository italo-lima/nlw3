import multer from "multer";
import { join } from "path";

export default multer({
  storage: multer.diskStorage({
    destination: join(__dirname, "..", "..", "uploads"),
    filename: (request, file, cb) => {
      const filename = `${Date.now()}-${file.originalname}`;

      cb(null, filename);
    },
  }),
});
