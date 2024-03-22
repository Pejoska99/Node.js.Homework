import AuthModel from "../models/auth.model.js";
import { verifyAccessToken , createAccessToken} from "../services/jwt.service.js";

export default class AuthController {
    static async  registerUser(req, res) {
        try{
            const userData = req.body;
            const registeredUser = await AuthModel.registerUser(userData);
            res.status(200).send(registeredUser);
        }catch(error){
            console.log(error);
            res.status(400).send(error);
        }
        
    }

    static async loginUser(req, res) {
        try {
            const credentials = req.body;
            const user = await AuthModel.loginUser(credentials);
            const accessToken = createAccessToken(user.id);
            res.setHeader('Authorization', accessToken);
            res.status(200).send({ accessToken: accessToken, user: user });
        } catch (error) {
            console.error(error);
            res.status(400).send({ message: error.message });
        }
    }
    }



