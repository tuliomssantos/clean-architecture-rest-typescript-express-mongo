import { Document } from "mongoose";

export interface IBudgetDocument extends Document {
    date: Date;
    value: number;
    createdAt: Date;
    updatedAt: Date
}