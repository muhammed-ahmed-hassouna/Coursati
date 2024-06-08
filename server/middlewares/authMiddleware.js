require('dotenv').config();
const jwt = require('jsonwebtoken');

function authorize(allowedRoles) {
  return (req, res, next) => {
    let token = req.header('authorization');

    if (!token) {
      return res
        .status(401)
        .json({ message: 'Access is forbidden. You must authenticate first' });
    }

    if (token) {
      token = token.replace('Bearer ', '');
    }
    
    try {
      const secretKey = process.env.JWT_SECRET;
      const decodedToken = jwt.verify(token, secretKey);
      const role = decodedToken.role;
      // Inside your authorize middleware
      // console.log('Headers:', req.headers);
      // console.log('Decoded Token:', decodedToken);

      req.user = decodedToken;
      if (allowedRoles.includes(role)) {
        next();
      } else {
        res.status(403).json({
          message: 'Access is prohibited. You do not have permission.',
        });
      }
    } catch (error) {
      console.error('Error verifying token:', error);
      res.status(401).json({ message: 'Access is forbidden. Invalid token.' });
    }
  };
}

module.exports = {
  authorize,
};
