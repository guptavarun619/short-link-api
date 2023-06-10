import { Schema, Types, model } from "mongoose";

export interface LinkInterface {
    originalUrl: string;
    shortUrlSlug: string;
    title: string;
    public: boolean;
    timesClicked: number;
    expiryDate: Date;
    userId: Schema.Types.ObjectId
}

const today = new Date();
const linkSchema = new Schema<LinkInterface>({
    originalUrl: {
        type: String,
        required: true
    },
    shortUrlSlug: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        default: "Untitled"
    },
    public: {
        type: Boolean,
        required: true,
        default: false,
    },
    timesClicked: {
        type: Number,
        default: 0
    },
    expiryDate: {
        type: Date,
        default: new Date(today.getTime() + (365*24*60*60*1000))
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true });

export const Link = model<LinkInterface>('Link', linkSchema);