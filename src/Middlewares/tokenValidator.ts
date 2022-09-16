import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { findUserById } from "../Repositories/usersRepository";

import dotenv from 'dotenv';
dotenv.config();

export async function validateToken(req:Request,res:Response,next:NextFunction) {
    const { authorization } = req.headers;
    const token = authorization?.replace('Bearer ', '')

    const secretkey = process.env.JWT_SECRET;

    if (!token) {
        return res.sendStatus(401);
    }

    try {
        const dados = jwt.verify(token, secretkey);
        
        const userInfo = await findUserById(dados.id)
    
        if (!userInfo) {
            return res.sendStatus(404);
        }
        res.locals.userId = userInfo.id;

        next();
    }   catch (error) {

        console.log(error);
        res.sendStatus(401);
        
    }
}