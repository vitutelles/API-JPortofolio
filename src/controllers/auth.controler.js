import bcrypt from "bcryptjs";
import { loginService, generateToken } from "../services/auth.service.js";
import jwt from "jsonwebtoken"



const login = async (req, res) => {
    const { email, password } = req.body;


    try {
        const user = await loginService(email);


        if (!user) {
            return res.status(404).send({ message: "User or Password not found" });
        }

        const passwordIsValid = bcrypt.compareSync(password, user.password);


        if (!passwordIsValid || !user) {
            return res.status(404).send({ message: "User or Password not found" });

        }


        const token = generateToken(user.id)


        const decoded = jwt.verify(token, process.env.JWT_SECRET, { algorithms: ['HS256'] });

        res.send({ token });
    } catch (err) {
        res.status(500).send(err.message);
    }
};

export { login };