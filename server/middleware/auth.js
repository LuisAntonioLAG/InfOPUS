import jwt from 'jsonwebtoken';

const secret = 'test';

const authMid = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];

        let decodedData;

        decodedData = jwt.verify(token, secret);
        req.usuarioId = decodedData?.id;

        next();
    } catch (error) {
        console.log(error);
    }
}

export default authMid;
