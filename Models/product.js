import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    productName: String,
    price: String,
    image: String,
    userId: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'users'
    },
    replacement: String
})

const Product = mongoose.model("product", productSchema)
export default Product;