import mongoose from "mongoose";
const TaskSchema=mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true,
    },
    tasktitle: {
        type: String,
        required:true
    },
},{
    timestamps: true,
}
)
const Task= mongoose.model("Task",TaskSchema);
export default Task;