import ConnectDB from "./db/db.js";
import app from "./app.js"



ConnectDB().then(()=>{
    app.listen(3000,()=>{
        console.log("App is listenign at 4000");
    })
}).catch(()=>{
    console.log("Failed to start the app [index.js]");
})