const {
    StatusCodes
} = require("http-status-codes");
const userModel = require("../../../model/user.model");

const followingUsers = async (req, res) => {

    let {
        id
    } = req.params;
    let {
        userId
    } = req.body;
    try {

        const user = await userModel.findOne({
            _id: id
        });
        if (user) {

            const currentUser = await userModel.findOne({
                _id: userId
            });
            if (!user.followers.includes(userId)) {
                const newUser = await user.updateOne({
                    $push: {
                        followers: userId
                    }
                });
                const newCurrentUser = await currentUser.updateOne({
                    $push: {
                        following: id
                    }
                });

                res.status(StatusCodes.OK).json({
                    message: "success user has been followed"
                })
            } else {
                res.json({
                    message: "you already follow this user"
                })
            }
        } else {
            res.json({
                message: "user Not Found...!"
            });
        }

    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            error: "error",
            error
        });
    }
}
module.exports = followingUsers;