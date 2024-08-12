import mongoose from "mongoose";




const ConnectDB = async ()=>{
    try{
        await mongoose.connect("mongodb://localhost:27017/Notes")
    }catch(e){
        console.log("Failed to connect to db [db.js]");
    }
}

export default ConnectDB;