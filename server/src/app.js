import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("Hello from Docker!");
});

app.get("/health", (req, res) => {
    res.status(200).json({
        status: "OK",
        message: "Server is running",
        timestamp: new Date().toISOString(),
    });
});

app.get("/users",(req,res)=>{
    
    res.status(200).json({
        message: "users",
        timestamp: new Date().toISOString(),
    });
})

export default app;
