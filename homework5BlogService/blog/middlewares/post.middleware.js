const  canDeleteOrUpdatePost= (req, res, next) => {
    const userRole = req.user && req.user.role;
    if (userRole === 'admin') {
        next();
    } else {
        res.status(403).send({ message: 'Unauthorized. Only admin users can delete or update products.' });
    }
    
};

export default canDeleteOrUpdatePost