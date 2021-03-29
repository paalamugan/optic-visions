const jwt = require("jsonwebtoken");
const config = require("../config");

const saltRounds = 10;
const adminvalue = "admin";

exports.getToken  = (data) => {

    if (!data) return;

    const token = jwt.sign(data, config.jwtSecretKey, { expiresIn: "1d" });
    return token;
}

exports.verifyToken  = async (token) => {

    if (!token)  {
        throw new Error("JWK token Not Found");
    }

    const decodeToken = await jwt.verify(token, config.jwtSecretKey);
    return decodeToken;
}