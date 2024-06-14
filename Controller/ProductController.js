import Product from '../Models/Product.js';

export const ProductRegistration = async (req, res) => {
    const userId = req.params.id
    try {
        if (!req.file) {
            return res.status(400).json({ message: "Please upload a product image" })
        }
        const { productName, price, replacement } = req.body
        const imagePath = req.file.filename;

        const product = new Product({
            productName,
            price,
            userId,
            replacement,
            image: imagePath,
        })
        await product.save()
        res.status(200).json({ isSuccess: true, data: product, message: "Product Registered Successfully" })

    } catch (error) {

    }
};

export const fetchProduction = async (req, res) => {
    try {
        const userId = req.query.userId;
        if (!userId) {
            return res.status(400).json({ error: "userId query parameter is required" });
        }
        const products = await Product.find({ userId: userId});
        res.status(200).json({ data: products, message: "Successfully fetched products" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const produtcById = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json({ data: products, message: "Successfully fetched products" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
