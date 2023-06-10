import { Schema, Types, model } from "mongoose";
import { LinkInterface } from "./link";

enum TIER {
    PRO = 'pro',
    FREE = 'free'
}

interface UserInterface {
    username: string;
    password: string;
    tier: TIER;
    validity: Date;
}

const userSchema = new Schema<UserInterface>({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    tier: {
        type: String,
        enum: Object.values(TIER),
        default: TIER.FREE
    },
    validity: {
        type: Date
    }
},{ timestamps: true });

export const User = model<UserInterface>('User', userSchema);