import Note from "../models/notes.model.js";
import ApiError from "../utils/apiError.util.js";
import ApiResponse from "../utils/apiResponse.util.js";
import asyncHandler from "../utils/asyncHandler.js";



const CreateNote =asyncHandler( async (req, res) => {
    const { title, note } = req.body;

    if (!title) {
        throw new ApiError(400, "title is Required");
    }
    
    const createdNote = await Note.create({
        title,
        note,
    });
    
    if(!createdNote){
        throw new ApiError(500, "Something went worng");
    }

    res.status(200).json(
        new ApiResponse(200, createdNote, "Created Successfully")
    )

});


const DeleteNote = asyncHandler( async (req,res)=>{
    const {id} = req.params;
    if(!id) throw new ApiError(400, "id is required in params")
    await Note.findOneAndDelete({_id: id});
    res.status(200).json(
        new ApiResponse(200, {}, "Deleted successfully")
    )
    
})


const UpdateNote = asyncHandler(async (req,res)=>{
    const {id} = req.params;
    const {title, note} = req.body;
    if(!id) throw new ApiError(400, "Id is required in params")

    if(!title && !body) throw new ApiError(400,"title and Note is required in body")
    const updatedNote = await Note.findOneAndUpdate({
        _id: id
    },{
        title,
        note
    },{
        new:true
    });

    res.status(200).json(
        new ApiResponse(200, updatedNote, "updated successfully")
    )

})
export {CreateNote,DeleteNote, UpdateNote}