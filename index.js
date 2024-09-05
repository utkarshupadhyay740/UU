import express from 'express';
import { fetchUsers } from "./test2.js"

const app = express();

app.get("/", (req,res,next) => {
    res.status(200).json({
        userData: fetchUsers()
    });
})

app.listen(3010, () => {
    console.log("App started on port : ",3010);
});