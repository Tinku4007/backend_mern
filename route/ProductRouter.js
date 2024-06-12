import express from 'express';
import { ProductRegistration } from '../Controller/ProductController.js';
import { upload } from '../middleware/UploadImage.js';

export const productRouter = express.Router();

productRouter.post('/addproduct', upload.single('imageFieldName'), ProductRegistration);
