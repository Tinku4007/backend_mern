import Jwt from 'jsonwebtoken';

const JwtKey = "e-com";

export function verifyToken(req, res, next) {
    let token = req.headers['authorization']; // Correct way to access headers

    if (token) {
        token = token.split(' ')[1];

        Jwt.verify(token, JwtKey, (err, valid) => {
            if (err) {
                console.error("Token verification error:", err); // Debug: Print the error
                return res.status(401).send({ result: "Please provide a valid token" });
            } else {
                next();
            }
        });
    } else {
        console.warn("No token found in request headers"); // Debug: Warn if no token found
        res.status(403).send({ result: "Please add a token in the header" });
    }
}
