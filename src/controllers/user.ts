import { Request, Response } from "express";
import { create } from "../services/user";

export async function registerUser(req: Request, res: Response) {
    try {
        const username = req.body.username;
        const plainPassword = req.body.password;
    
        const response = await create(username, plainPassword);
        res.status(201).json({
            success: true,
            message: "User signed up successfully",
            data: {
                jwt: response
            },
            error: {}
        });
    } catch (error: any | unknown) {
        if(error.code === 11000) {
            res.status(400).json({
                success: false,
                message: "Username already exists, please try another username",
                data: {},
                error: error
            });
        } else {
            res.status(500).json({
                success: false,
                message: "Something went wrong while signup process",
                data: {},
                error: error
            });
        }
    }
}

