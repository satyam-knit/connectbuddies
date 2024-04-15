import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const connection = async () => {

    const URL = `mongodb://${USERNAME}:${PASSWORD}@ac-we1i04r-shard-00-00.rfvdqlu.mongodb.net:27017,ac-we1i04r-shard-00-01.rfvdqlu.mongodb.net:27017,ac-we1i04r-shard-00-02.rfvdqlu.mongodb.net:27017/?ssl=true&replicaSet=atlas-82kvm4-shard-0&authSource=admin&retryWrites=true&w=majority&appName=connect-buddies`
    try {

        await mongoose.connect(URL)

        console.log("Database connected successfully");

    }

    catch (error) {
        console.log("Error while connecting to the database", error.message);
    }
}

export default connection;
