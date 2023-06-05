import { Schema, models, model } from "mongoose";

const userSchema = new Schema({
    id: String,
    name: String,
    login: String,
    image: String,
    about: String,
    languages: Array,
    email: String,
    age: Number,
    gender: Number,
    notifications: Array,
    goals: String,
    studyHabits: String,
    major: String,
    interests: Array,
    availibility: Array,
    onlineHours: Number,
    subsciption: String,
});

const Users = models.user || model('user', userSchema)

export default Users;