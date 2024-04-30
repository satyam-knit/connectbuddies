import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';
import dotenv from 'dotenv';



dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;


const storage = new GridFsStorage({
    url: `mongodb://${USERNAME}:${PASSWORD}@ac-we1i04r-shard-00-00.rfvdqlu.mongodb.net:27017,ac-we1i04r-shard-00-01.rfvdqlu.mongodb.net:27017,ac-we1i04r-shard-00-02.rfvdqlu.mongodb.net:27017/?ssl=true&replicaSet=atlas-82kvm4-shard-0&authSource=admin&retryWrites=true&w=majority&appName=connect-buddies`,
    options: { useNewUrlParser: true },
    file: (request, file) => {
        const match = ["image/png", "image/jpg"];
        if (match.indexOf(file.mimeType) === -1)
            return `${Date.now()}-blog-${file.originalname}`;

        return {
            bucketName: "photos",
            filename: `${Date.now()}-blog-${file.originalname}`
        };
    }
});


export default multer({ storage });