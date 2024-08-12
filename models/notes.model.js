import mongoose from "mongoose";



const NoteSchema = mongoose.Schema({
    title:{
        type:String,
        required: true,
    },
    note:{
        type:String,
        default:"",
    }
},{
    timestamps: true
})



const Note = mongoose.model("Todo", NoteSchema);
export  default Note    