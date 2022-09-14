import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { User } from "@prisma/client";
import { findUser } from "../Repositories/usersRepository";

export async function userLogin(user:Omit<User,"id">) {
    const userData = await findUser(user.email);
    if (!userData){
        console.log('deu ruim, usuário não registrado');
    }
    if (!bcrypt.compareSync(user.password,userData.password)){
        console.log('senha errada');
    }
    const token = createToken(userData.id);
    return token;    
}

export function createToken(id:number):string{
    const dados = { id };
    const chaveSecreta = process.env.JWT_SECRET;
    const token = jwt.sign(dados, chaveSecreta);
    console.log(token);
    return token;
}