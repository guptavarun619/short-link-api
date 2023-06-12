import { JWT_SECRET_KEY } from "../config/serverConfig";
import { User } from "../models";
import jwt from "jsonwebtoken";

export async function create(username: string, plainPassword: string) {
    try {
        const user = await User.create({
            username,
            password: plainPassword
        });
        console.log(user);
        return createToken({
            id: user._id,
            username: user.username,
            tier: user.tier,
            createdAt: user.createdAt
        });
    } catch (error) {
        console.error("Something went wrong in User Service", error);
        throw error;
    }
}

export async function findByUsername(username: string) {
    try {
        const user = await User.findOne({
            username: username
        });
        return user;
    } catch (error) {
        console.error("Something went wrong in User Service", error);
        throw error;
    }
}

function createToken(user: object) {
    const token = jwt.sign(user, JWT_SECRET_KEY as string , { expiresIn: '21 days'});
    return token;
}