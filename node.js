var express = require('express');
var app = express();
const path = require('path');
app.use(express.json());
app.use(express.urlencoded());
const spawn = require('child_process').spawn;



app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/html/index.html'));

});

app.post('/envioNombre', function (req, res) {
    let respuestaPython = "";
    const procesoPython = spawn("python", ["registroAlumno.py"]);
    procesoPython.stdout.on("data", function (data) {
        respuestaPython += data;
    });  
    procesoPython.stdout.on("end", function () {
        console.log(respuestaPython);
    });
    procesoPython.stdin.write(req.body.nombre);
    procesoPython.stdin.end();
    res.sendFile(path.join(__dirname + '/html/registroEnviado.html'));
});

app.post('/consulta', function (req, res) {
    let respuestaPython = "";
    const procesoPython = spawn("python", ["consultaDatos.py"]);
    procesoPython.stdout.on("data", function (data) {
        respuestaPython += data;
    });  
    procesoPython.stdout.on("end", function () {
        console.log(respuestaPython);
    });
    procesoPython.stdin.write(req.body.nombre);
    procesoPython.stdin.end();
    res.send(respuestaPython);
});


app.listen(8000, function () {
    console.log('Servidor corriendo en el puerto 8000');
});










procesoPython.stdout.on("data", function (data) {
    respuestaPython += data;
});

procesoPython.stdout.on("end", function () {
    console.log(respuestaPython);
});

