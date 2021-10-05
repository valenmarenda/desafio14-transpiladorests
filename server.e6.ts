const express = require('express');
const port = 8000;
​
const app = express();
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));
app.listen("8000", () => {
  console.log("escuchando en el puerto 8000...");
});


app.set("views", "./views");
app.set("view engine", "hbs");
app.use("/", express.static("/public"));



const server = app.listen(port, ()=>{
    console.log(`servidor http escuchando en el puerto ${port} `)
})
