import mongoose from "mongoose";

let isConnected = false

export const connectToDB = async () => {
    mongoose.set('strictQuery', true)

    if (isConnected) {
        console.log('MongoDB is Connected');
        return
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: 'share_prompt',
            useNewUriParser: true,
            useUnifiedToplogy: true
        })
        isConnected = true;

        console.log('MongoDB connected');
    } catch (error) {

    }
}