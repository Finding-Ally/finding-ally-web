import { Schema, models, model } from "mongoose";

const projectSchema = new Schema({
    id: String,
    name: String,
    adminUser: Object,
    logo: String,
    description: String,
    status: String,
    members: Array,
    tags: Array,
    topic: String,
    createdAt: String,
    views: Number,
    files: Array,
    links: Array,
    tasks: Array,
    milestones: Array,
    notes: Array,
    chats: Array,
    events: Array,
    visibility: String,
   
});

const Projects = models.project || model('project', projectSchema)

export default Projects;