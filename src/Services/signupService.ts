import bcrypt from "bcrypt";
import { User } from "@prisma/client";
import { findUser, createUser } from "../Repositories/usersRepository";

export async function userSignUp(user: Omit<User, "id">) {
    const userData = await findUser(user.email);
    if (userData){
        throw{code: 'Unauthorized', message: 'Email already registered'};
    }
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(user.password, salt);
    const newUser = ({email:user.email, password:hashedPassword})
    await createUser(newUser);
}

