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

app.post('/', (req, res) => {
    const { operacion, num1, num2, base, altura } = req.body;

    if (!operacion) {
        return res.status(400).json({ error: "Debes indicar la operación" });
    }

    switch (operacion) {

        case "suma":
            if (num1 === undefined || num2 === undefined)
                return res.status(400).json({ error: "Faltan números" });
            return res.json({ resultado: num1 + num2 });

        case "resta":
            if (num1 === undefined || num2 === undefined)
                return res.status(400).json({ error: "Faltan números" });
            return res.json({ resultado: num1 - num2 });

        case "multiplicacion":
            if (num1 === undefined || num2 === undefined)
                return res.status(400).json({ error: "Faltan números" });
            return res.json({ resultado: num1 * num2 });

        case "division":
            if (num1 === undefined || num2 === undefined)
                return res.status(400).json({ error: "Faltan números" });
            if (num2 === 0)
                return res.status(400).json({ error: "No se puede dividir entre 0" });
            return res.json({ resultado: num1 / num2 });

        case "area-triangulo":
            if (base === undefined || altura === undefined)
                return res.status(400).json({ error: "Faltan base o altura" });
            return res.json({ resultado: (base * altura) / 2 });

        default:
            return res.status(400).json({ error: "Operación no válida" });
    }
});

app.listen(app.get('port'), () => {
    console.log("Servidor en puerto 3000")
});



// app.use(express.urlencoded({extended:false}));
