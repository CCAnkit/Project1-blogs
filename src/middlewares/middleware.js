const jwt = require('jsonwebtoken');

let authentication = async function(req, res, next){
    try{
        let token = req.headers['x-api-key']
        if (!token){
            return res.status(400).send({ msg: "token must be present" });
        }
        next()
    }
    catch(errorFound){res.status(500).send({error : errorFound.message})}
}

let authorization = async function(req, res, next){
    try {
        let token = req.headers['x-api-key']
        let decodedToken = jwt.verify(token, "project for blogs");
        let usedLoggedIn = decodedToken.authorId
        let param_Id = req.params.authorId
        if (usedLoggedIn !== param_Id) return res.status(401).send("You are not autherised to access") 
        next()
    }
    catch (errorFound) {res.status(500).send({error : errorFound.message})}
}


module.exports.authenticate = authentication
module.exports.authorize = authorization