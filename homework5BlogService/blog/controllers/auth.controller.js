import AuthModel from "../models/auth.model.js";
import { verifyAccessToken , createAccessToken, createRefreshToken, verifyRefreshToken} from "../services/jwt.service.js";

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

            const refreshToken =createRefreshToken(user.id);
            await AuthModel.saveRefereshToken(user.id, refreshToken);

            res.cookie('refresh-token', refreshToken, {
                httpOnly: true,
                secure: false,
                path: '/api/refresh-token',
                
            })
            res.status(200).send({ accessToken: accessToken, user: user, refreshToken: refreshToken });
        } catch (error) {
            console.error(error);
            res.status(400).send({ message: error.message });
        }
    }

    static async logoutUser(req, res) {
        try {
          const userId = req.params.id;
          const refreshToken = req.body.refreshToken;
    
          await AuthModel.deleteRefreshToken(userId, refreshToken);
    
          res.sendStatus(200);
        } catch (error) {
          res.status(400).send(error);
        }
      }

      static async refreshAccessToken(req, res) {
        try {
          const refreshToken = req.body.refreshToken;
          
          if (!refreshToken) {
            return res.sendStatus(403);
          }
          const { userId } = verifyRefreshToken(refreshToken);
    
          const foundUser = await AuthModel.getById(userId);
    
          if (!foundUser) {
            return res.sendStatus(403);
          }
    
          if (!foundUser.refreshTokens.some((token) => token === refreshToken)) {
            return res.sendStatus(403);
          }
          const accessToken = createAccessToken(foundUser.id);
    
          
          const newRefreshToken = createRefreshToken(foundUser.id);
    
         
          await AuthModel.deleteRefreshToken(foundUser.id, refreshToken);
    
         
          await AuthModel.saveRefereshToken(foundUser.id, newRefreshToken);
    
          //4. Send new refresh token to client
          res.status(200).send({ accessToken, refreshToken: newRefreshToken });
        } catch (error) {
          res.status(403).send(error);
        }
      }
    }
    



