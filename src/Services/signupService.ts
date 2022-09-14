import bcrypt from "bcrypt";
import { User } from "@prisma/client";
import { findUser, createUser } from "../Repositories/usersRepository";

export async function userSignUp(user: Omit<User, "id">) {
    try{
        const userData = await findUser(user.email);
        if (userData){
            console.log('deu ruim, email já cadastrado');
        }
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(user.password, salt);
        const newUser = ({email:user.email, password:hashedPassword})
        await createUser(newUser);
    }
    catch(error){
        console.log(error);
    }
}

