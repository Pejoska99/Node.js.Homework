import AuthModel from "../models/auth.model.js";
import {verifyAccessToken} from "../services/jwt.service.js";


const tokenValidator = async (req, res, next) => {
    try{
        const autorizationHeader = req.headers.authorization;

        if(!autorizationHeader){
            return res.sendStatus(403);

    }

    const token = autorizationHeader.split(' ')[1];
    const {userId}= verifyAccessToken(token);

    const user = await AuthModel.getById(userId);

    if(!user){
        return res.sendStatus(403);
    
    }


    delete user.password;
    req.user = user;

    next();
}catch(error){
    res.sendStatus(403).send({message: error.message});
}
{

}}

export default tokenValidator

