const express = require('express');
const app  = express();
const morgan = require('morgan'); // Muestra las solicitudes
const cors = require('cors'); // Permite conexiones externas al servidor

// Configuración del sevidor en el puerto 3000
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2); // Habilitamos JSON

app.use(morgan('dev')); // Cargar morgan maneja errores

app.use(express.urlencoded({extended:false}));

app.use(express.json());
app.use(cors());

app.get('/', (req,res)=> {
    res.json(
        {
            "Title":"Kiubo brother"
        }
    )
});

app.post('/sumar',(req, res) =>{
    const { num1, num2 } = req.body;

    if (num1 === undefined || num2 === undefined){
        return res.status(400).send({error: 'Faltan números por sumar'});
    }

    const resultado = num1 + num2;
    res.send({ resultado });
});

app.post('/resta',(req, res) =>{
    const { num1, num2 } = req.body;

    if (num1 === undefined || num2 === undefined){
        return res.status(400).send({error: 'Faltan números por restar'});
    }

    const resultado = num1 - num2;
    res.send({ resultado });
});

app.post('/multi',(req, res) =>{
    const { num1, num2 } = req.body;

    if (num1 === undefined || num2 === undefined){
        return res.status(400).send({error: 'Faltan números por multiplicar'});
    }

    const resultado = num1 * num2;
    res.send({ resultado });
});

app.post('/division',(req, res) =>{
    const { num1, num2 } = req.body;

    if (num1 === undefined || num2 === undefined){
        return res.status(400).send({error: 'Faltan números por dividir'});
    }

    if (num2 === 0){
        return res.status(400).send({error: 'No se puede dividir entre 0'});
    }

    const resultado = num1 / num2;
    res.send({ resultado });
});

app.post('/area-triangulo', (req, res) => {
    const { base, altura } = req.body;

    if (base === undefined || altura === undefined) {
        return res.status(400).send({ error: 'Faltan números para calcular el área' });
    }

    const resultado = (base * altura) / 2;
    res.send({ resultado });
});


app.listen(app.get('port'), () => {
    console.log("Servidor en puerto 3000")
});



// app.use(express.urlencoded({extended:false}));
