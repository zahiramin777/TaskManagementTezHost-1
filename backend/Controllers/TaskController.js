import mongoose from "mongoose";
import Task from "../Models/TaskModel.js";

const AddTask=async(req,res)=>{
try {
    const {username,description,tasktitle}=req.body;
    const newTask=new Task({
        username,
        description,
        tasktitle,
    })
    await newTask.save();
    if(newTask){
        res.status(201).json({
            name:newTask.username,
            description:newTask.description,
            tasktitle:newTask.tasktitle,
        });
    }
    else{
        res.status(400).json({error:"unable to save task"})
    }

} catch (error) {
    res.status(500).json({error:error.message})
    console.log("Error in saving task: ", error.message)
}
}
const RemoveTask = async (req, res) => {
    try {
        // Extract task ID from request parameters
        const taskId = req.params.id;

        // Check if the task ID is valid
        if (!mongoose.Types.ObjectId.isValid(taskId)) {
            return res.status(400).json({ error: "Invalid task ID" });
        }

        // Find the task by ID and delete it
        const deletedTask = await Task.findByIdAndDelete(taskId);

        // Check if the task exists
        if (!deletedTask) {
            return res.status(404).json({ error: "Task not found" });
        }

        // If task is deleted successfully, send a success response
        res.status(200).json({ message: "Task deleted successfully" });
    } catch (error) {
        // Handle errors
        console.error("Error in removing task:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};
const getalltask=async(req,res)=>{
    try {
        // Retrieve all tasks from the database
        const tasks = await Task.find();
        console.log(tasks)
        // Send the tasks as a response
        res.status(200).json(tasks);
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({ error: 'Internal server error' });
    }
}
export {AddTask,RemoveTask,getalltask}
