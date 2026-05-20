import multer from "multer";
const storage = multer.memoryStorage();
const fileFilter = (req, file, cb) => {
  const allowedMimeTypes = [
    "image/jpeg",
    "image/png",
    "image/webp",
    "image/gif",
  ];
  const allowedExt = ["jpg", "jpeg", "png", "webp", "gif"];
  const ext = file.originalname.split(".").pop()?.toLowerCase();
  const isMimeOk = allowedMimeTypes.includes(file.mimetype);
  const isExtOk = allowedExt.includes(ext);
  console.log("FILE CHECK:", {
    name: file.originalname,
    mimetype: file.mimetype,
    ext,
    isMimeOk,
    isExtOk,
  });
  if (isMimeOk && isExtOk) {
    return cb(null, true);
  }
  console.log(req)
  cb(new Error("Only image files are allowed!"));
};
export const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 10 * 1024 * 1024,
  },
});
