const exress = require('express');
const app = exress();
const port = 3000;
const programmingLanguajeRouter = require('./routes/programminLanguajes');

app.use(exress.json);
app.use(
    exress.urlencoded({
        extended: true
    })
);

app.get("/", (req, res) => {
    res.json({messge: "OK"});
});

app.use("/lenguajes", programmingLanguajeRouter);

app.use((err, req, res, nect)=>{
    const statusCode = err.statusCode || 500;
})

app.listen(port, ()=> {
    console.log(`App escuchando en http://localhost:${port}`);
});