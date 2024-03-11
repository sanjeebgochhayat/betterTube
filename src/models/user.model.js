import mongoose, {Schema} from "mongoose";
import  jwt  from "jsonwebtoken";
import bcrypt from 'bcrypt'

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

    //because of arrow fn don't have access to value of 'this', have to write normal fn
    userSchema.pre("save", async function (next) {
        if(this.isModified("password")){
            this.password = bcrypt.hash(this.password, 10)
            next()
        }
    })

    //here we are creating a method called isPasswordCorrect
    userSchema.methods.isPasswordCorrect = async function(password){
        return await bcrypt.compare(password, this.password)
    }

    userSchema.methods.generateAccessToken = function(){
        return jwt.sign({
            _id:this._id,
            email:this.email,
            username: this.userName,
            fullName: this.fullName
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
        )
    }
    userSchema.methods.generateRefreshToken = function(){
        return jwt.sign({
            _id:this._id,
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
        )
    }


export const User = mongoose.model("User", userSchema);