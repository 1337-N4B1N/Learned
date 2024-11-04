import mongoose from "mongoose";
const { Schema, model } = mongoose;

const UserSchema = new Schema({
    email: { type: String, required: true },
    name: { type: String },
    username: { type: String, required: true },
    profilepic: { type: String },
    coverpic: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    paypalid:{type:String},
    paypalsecret:{type:String},
    done:{type:Boolean,default:false},
});

const User = mongoose.models.User || model("User", UserSchema)
export default User;