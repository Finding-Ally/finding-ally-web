import { Schema, models, model } from "mongoose";

const userSchema = new Schema({
    id: String,
    name: String,
    login: String,
    avatar_url: String,
    bio: String,
    techStack: Array,
    email: String,
    trophies: Number,
    isOnline: Boolean,
    notifications: Array,
    friends: Array,
    projects: Array,
    onlineHours: Number,
    date: String,
    teams: Array,
    subsciption: String,
});

const Users = models.user || model('user', userSchema)

export default Users;