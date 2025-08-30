import express from "express";

const app = express();

app.use(express.json());

app.get("/",()=>{
    res.send("Welcome to CI/CD Pipeline!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.warn(`Server is listening on port ${PORT}`);
});
