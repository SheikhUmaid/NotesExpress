import ConnectDB from "./db/db.js";
import serverless from "serverless-http";
import app from "./app.js";

ConnectDB()
    .then(() => {
        app.listen(3000,()=>{
            console.log("App is listenign at 4000");
        })
        
    })
    .catch(() => {
        console.log("Failed to start the app [index.js]");
    });
    
    
// export const handler = serverless(app);