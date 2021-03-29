const jwt = require("jsonwebtoken");
const config = require("../config");

const saltRounds = 10;

exports.getToken = (data) => {

    if (!data) return;

    const encodeData = jwt.sign(data, config.jwtSecretKey, { expiresIn: "1d" });
    return encodeData;
}

exports.verifyToken = async (token) => {

    if (!token)  {
        throw new Error("JWK token Not Found");
    }

    const decodeData = await jwt.verify(token, config.jwtSecretKey);
    return decodeData;
}