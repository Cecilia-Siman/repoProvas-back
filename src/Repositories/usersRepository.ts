import { prisma } from "../Config/database";
import { User } from "@prisma/client";

export async function findUser(email: string) {
    const userInfo = await prisma.user.findUnique({
        where: {email}
    })
    return userInfo;
}

export async function createUser(userInfo: Omit<User, "id">) {
    await prisma.user.create({
        data: userInfo
    })    
}
