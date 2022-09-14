import { Request, Response } from "express";
import { userLogin } from "../Services/loginService";
import { userSignUp } from "../Services/signupService";

export async function signup(req:Request, res: Response) {
    try{
        const {email, password} = req.body;
        const user = {email, password};
        await userSignUp(user);
        res.sendStatus(201);
    }
    catch(error){
        console.log(error);
    }
    
}

export async function login(req:Request, res: Response) {
    try{
        const user = req.body;
        const token = await userLogin(user);
        res.send(token).status(200);
    }
    catch(error){
        console.log(error);
    }
    
}