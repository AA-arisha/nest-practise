import { Schema, Prop ,SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";


export type usersDocument = HydratedDocument<User>;
@Schema()
export class User{
    @Prop()
    name:string;

    @Prop()
    email:string;

    @Prop()
    password:string;

}

export const UserSchema = SchemaFactory.createForClass(User);