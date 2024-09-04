import ConnectDB from "./db/db.js";
import serverless from "serverless-http";
import app from "./app.js";

ConnectDB()
    .then(() => {
        app.listen(4000,()=>{
            console.log("App is listenign at 4000");
        })
        
    })
    .catch(() => {
        console.log("Failed to start the app [index.js]");
    });
    
    
// export const handler = serverless(app);



// AKIARZ2SLSDFMY5QPXL6ABC
// no progress
// CQ9w+Wno3/ItYBU54HsgBeNEvCAY/hyCoctaN/2vabc
