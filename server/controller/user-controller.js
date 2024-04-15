import userDetails from "../model/User.js";

export const addUser = async (request, response) => {

    try {
        let exist = await userDetails.findOne({ sub: request.body.sub });


        if (exist) {
            response.status(200).json({ msg: "User already exists" })
            return;
        }

        const newUser = new userDetails(request.body);
        await newUser.save();
        response.status(200).json(newUser);
    }
    catch (error) {
        response.status(500).json(error.message);
    }


}

export const getUsers = async (request, response) => {
    try {
        const users = await userDetails.find({});
        response.status(200).json(users);
    }
    catch (error) {
        response.status(500).json(error.message);
    }
}
