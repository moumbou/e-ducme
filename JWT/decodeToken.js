const jsonwebtoken = require("jsonwebtoken")

module.exports.decodedToken = (token) => {
    const decoded = jsonwebtoken.verify(token, process.env.JWT_SECRET)
    if(decoded && decoded.id) return decoded.id
    return null
}