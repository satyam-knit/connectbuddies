import grid from 'gridfs-stream';
import mongoose from 'mongoose';

const url = "http://localhost:8000";


export const uploadFile = async (request, response) => {
    try {
        if (!request.file) {
            return response.status(404).json('File not found');
        }

        const imageUrl = `${url}/file/${request.file.filename}`;
        return response.status(200).json(imageUrl);
    } catch (error) {
        console.error("Error uploading file:", error);
        return response.status(500).json(error.message);
    }
}

let gfs, gridFsBucket;
const conn = mongoose.connection;

conn.once('open', async () => {
    try {
        gridFsBucket = new mongoose.mongo.GridFSBucket(conn.db, {
            bucketName: "fs"
        });
        gfs = grid(conn.db, mongoose.mongo);
        gfs.collection('fs');
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
});
export const getImage = async (request, response) => {
    try {
        const file = await gfs.files.findOne({ filename: request.params.filename });

        if (!file || !file.filename) {
            return response.status(404).json('File not found');
        }

        const readStream = gridFsBucket.openDownloadStream(file._id);
        readStream.pipe(response);
    } catch (error) {
        console.error("Error getting image:", error);
        return response.status(500).json(error.message);
    }
}
