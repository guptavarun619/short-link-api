import { Schema, Types, model } from "mongoose";
import bcrypt from "bcrypt";
import { SALT_ROUND } from "../config/serverConfig";

enum TIER {
    PRO = 'pro',
    FREE = 'free'
}

interface UserInterface {
    username: string;
    password: string;
    tier: TIER;
    validity: Date;
    createdAt: Date;
    updatedAt: Date;
}

const today = new Date();
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
        type: Date,
        default: new Date(today.getTime() + (365*24*60*60*1000))
    }
},{ timestamps: true });

userSchema.pre('save', async function(next) {
    if (this.isModified('password')) {
        const hash = await bcrypt.hashSync(this.password, parseInt(SALT_ROUND as string));
        this.password = hash;
        next();
    } else {
        next();
    }
})

export const User = model<UserInterface>('User', userSchema);