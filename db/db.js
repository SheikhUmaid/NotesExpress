import mongoose from "mongoose";




const ConnectDB = async ()=>{
    try{
        await mongoose.connect("mongodb+srv://sheikhumaid03:8jP5QAQBIaEpspTm@forumexpress.rhvn0.mongodb.net/Notes")
        console.log('conneted to db successfully');
        
    }catch(e){
        console.log("Failed to connect to db [db.js]", e);
    }
}

export default ConnectDB;