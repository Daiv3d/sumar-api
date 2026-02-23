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
    const{num1, num2} = req.body; 
    
         if (!num1 || !num2 ){
            return res.status(400).send({error: 'Faltan números por sumar'})
         }
         const resultado Suma= num1 + num2;
         res.send({resultado});
});
app.post('/resta',(req, res) =>{
    const{num1, num2} = req.body; 
    
         if (!num1 || !num2 ){
            return res.status(400).send({error: 'Faltan números por sumar'})
         }
         const resultado_resta = num1 - num2;
         res.send({resultado_resta});
});

app.post('/multi',(req, res) =>{
    const{num1, num2} = req.body; 
    
         if (!num1 || !num2 ){
            return res.status(400).send({error: 'Faltan números por multiplicar '})
         }
         const resultado_multi = num1 * num2;
         res.send({resultado_multi});
});
app.post('/division',(req, res) =>{
    const{num1, num2} = req.body; 
    
         if (!num1 || !num2 ){
            return res.status(400).send({error: 'Faltan números por dividir'})
         }
         const resultado_division = num1 / num2;
         res.send({resultado_division});
});
app.post('/area-triangulo', (req, res) => {
    const { base, altura } = req.body;

    if (!base || !altura) {
        return res.status(400).send({ error: 'Faltan números para calcular el área' });
    }

    const resultado_area = (base * altura) / 2;
    res.send({ resultado_area });
});





app.listen(app.get('port'), () => {
    console.log("Servidor en puerto 3000")
});



// app.use(express.urlencoded({extended:false}));
