import express from "express";

const app = express()

app.get("/", (req,res) => {
    res.send("Coucou je vais bien");
})

app.listen(3000, ()=>{
    console.log("Serveur running...")
})