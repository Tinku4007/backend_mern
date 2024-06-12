import Product from '../Models/Product.js';

export const ProductRegistration = async (req, res) => {
    try {
        console.log('File:', req.file); // Debug statement
        console.log('Body:', req.body); // Debug statement

        if (!req.file) {
            return res.status(400).json({ error: 'Image file is required' });
        }

        const { productName, price, replacement } = req.body;
        const imagePath = req.file.path;

        const product = new Product({
            productName,
            price,
            image: imagePath,
            replacement
        });

        await product.save();
        res.status(200).json({ message: "Product Registered Successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
