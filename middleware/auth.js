const { getIdByToken } = require("../mysql/queries");

//middleware
const checkToken = async (req, res, next) => {
    const results = await asyncMySQL(getIdByToken(req.headers.token));

    if (results.length > 0) {
        next();
        return;
    }
    res.send({ status: 0, reason: "Bad token" });
};

module.exports = checkToken;