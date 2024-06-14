import express from 'express';
import { upload } from '../middleware/UploadImage.js';
import { ProductRegistration, fetchProduction } from '../Controller/ProductController.js';
import { verifyToken } from '../middleware/Middleware.js';

export const productRouter = express.Router();
productRouter.post('/upload', verifyToken , upload, ProductRegistration);
productRouter.get('/products', verifyToken, fetchProduction);
// productRouter.get('/products/:id', produtcById);