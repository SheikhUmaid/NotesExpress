import mongoose from "mongoose";




const ConnectDB = async ()=>{
    try{
        await mongoose.connect("mongodb://localhost:27017/Notes")
        console.log('conneted to db successfully');
        
    }catch(e){
        console.log("Failed to connect to db [db.js]", e);
    }
}


// test
export default ConnectDB;