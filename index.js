const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Endpoint que HubSpot llamará para renderizar la tarjeta
app.post('/api/card-data', (req, res) => {
  const { objectId } = req.body; // ID del contacto (u otro objeto CRM)

  // Enviar tarjeta con un iframe que carga tu frontend
  res.json({
    results: [
      {
        type: 'iframe',
        width: 600,
        height: 400,
        url: `https://mi-front.netlify.app/?objectId=${objectId}` // tu app React
      }
    ]
  });
});

// Puerto local
app.listen(3001, () => {
  console.log('Backend corriendo en http://localhost:3001');
});
