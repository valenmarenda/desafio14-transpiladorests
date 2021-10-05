var express = require('express');
var port = 8000;
var app = express();
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));
app.listen("8000", function () {
    console.log("escuchando en el puerto 8000...");
});
app.set("views", "./views");
app.set("view engine", "hbs");
app.use("/", express.static("/public"));
var server = app.listen(port, function () {
    console.log("servidor http escuchando en el puerto " + port + " ");
});
