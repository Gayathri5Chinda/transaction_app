import { getServerSession } from "next-auth"
import { NextResponse } from "next/server";
import { authOptions } from "../../lib/auth";


//api route that shows wether the user is logged in or not
export const GET = async () => {
    try{
        //get the current session from next-auth
        const session = await getServerSession(authOptions);
        //if session exists, return the user details to frontend
        if (session.user) {
            return NextResponse.json({
                user: session.user
            })
        }
    }catch(e){
        return NextResponse.json({
            message: "You are not logged in"
        }, {
            status: 403
        })
    }
    
}