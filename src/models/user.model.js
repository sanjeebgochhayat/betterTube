import mongoose, {Schema} from "mongoose";

const userSchema = new Schema(
    {
        userName: {
            type: String,
             required: true,
             unique: true,
             lowercase: true,
             trim: true,
             index: true    //optimize db search
        },
        userName: {
            type: String,
             required: true,
             unique: true,
             lowercase: true,
             trim: true,
        },
        fullName: {
            type: String,
             required: true,
             lowercase: true,
             trim: true,
             index: true
        },
        avatar: {
            type: String, //cloudinary
            required: true,
        }, 
        coverImage: {
            type: String, //cloudinary
        },
        watchHistory: [
            {
                type: Schema.Types.ObjectId,
                ref: "Video"
            }
        ],
        password: {
            type: String,
            required: [true, 'Password is required']
        },
        referenceToken: {
            type: String
        }
    },
    {timestamps: true}
    );

export const User = mongoose.model("User", userSchema);