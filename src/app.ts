import express from "express";
import { router as userApi } from "./routes/user.route";

const app = express ();
const PORT= 3000;

app.get ("/",(req,res) => {
    res.json({message: "Sever is online"})
});

app.use("/users", userApi);

app.listen(PORT,() => {
    console.log ("Server is online on port 3000");
});
