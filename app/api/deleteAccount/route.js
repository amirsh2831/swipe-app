import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();
export async function POST(request) {
    const body = await request.json();
    const {email, password} = body;
    console.log(body);
    const user = await prisma.user.findUnique({
        where: {
            email: email
        }
    });

    if(!email || !password){
        return new NextResponse({status: 400});
    }

    if (!user){
        return new NextResponse({status: 400});
    }
    
    const passwordMath = await bcrypt.compare(password, user.password);
    
    if(!passwordMath){
        console.log("wrong pass");
        return new NextResponse("password is wrong",{statusText: "password is wrong", status: 200})
    }

    const userDeleted = await prisma.user.delete({
        where: {
            id: user.id
        }
    });
    console.log("User: ")
    console.log(userDeleted);
    console.log('Deleted.')
    return new NextResponse("Account Deleted", {statusText: "Account Deleted", status: 200})
    
}