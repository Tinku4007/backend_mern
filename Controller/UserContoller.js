import User from '../Models/UserModel.js';
import bcrypt from 'bcrypt'
import Jwt from 'jsonwebtoken'
const JwtKey = "e-com"

const saltRounds = 10;

export const UserRegistration = async (req, res) => {
    try {
        const response = await req.body;
        const hash = bcrypt.hashSync(req.body.password, saltRounds);
        console.log(response);
        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            password: hash,
            // role: response.role
        });

        const token = Jwt.sign({ id: newUser._id }, JwtKey);
        newUser.token = token;
        await newUser.save();
        newUser.password = undefined
        res.status(201).send({ user: newUser, token, message: 'Signup successful' });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const LoginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'User not found' });
        }

        const matchPassword = bcrypt.compareSync(password, user.password);
        if (!matchPassword) {
            return res.status(401).json({ message: 'Invalid password' });
        }
        user.password = undefined
        user.__v = undefined
        res.status(200).json({ status:true , message: 'Login successful', data: user});
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

