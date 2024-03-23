import jwt from 'jsonwebtoken';

export  const createAccessToken = (userId) => {
return jwt.sign({userId},process.env.JWTACCESS_TOKEN_SECRET, {
    expiresIn: '15m'
});
}

export const createRefreshToken = (userId) => {
    return jwt.sign({userId},process.env.JWTREFRESH_TOKEN_SECRET, {
        expiresIn: '7d'
    })

}

export const verifyAccessToken = (token) => {
    return jwt.verify(token,process.env.JWTACCESS_TOKEN_SECRET); 
}

export const  verifyRefreshToken = (token) => {
    return jwt.verify(token,process.env.JWTREFRESH_TOKEN_SECRET);
}