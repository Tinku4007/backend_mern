import User from '../Models/UserModel.js';

export const UserRegistration = async (req, res) => {
    try {
        const response = await req.body;
        console.log(response);
        const newUser = new User(response);
        await newUser.save();
        res.status(200).json({ message: 'Signup successful', data: response });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
