import multer from 'multer';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {  // `file` parameter instead of `res`
        cb(null, 'public/uploads');
    },
    filename: function (req, file, cb) {  // `file` parameter instead of `res`
        cb(null, file.fieldname + "-" + Date.now() + ".jpg");
    }
});

export const upload = multer({ storage }).single("user_file");