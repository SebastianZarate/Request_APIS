const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = 3500;

app.use(cors());
app.use(express.static('public'));

// Ruta para combinar los datos de las dos APIs
app.get('/combine-data', async (req, res) => {
  try {
    console.log('Petición recibida en /combine-data'); 

    // Peticiones a APIs externas
    const response1 = await axios.get('https://xeno-canto.org/api/2/recordings?query=cnt:brazil');
    const response2 = await axios.get('https://dogapi.dog/api/v2/breeds');
    
    const combinedData = {
      users: response1.data,
      posts: response2.data,
    };

    console.log('Datos combinados con éxito'); 
    res.json(combinedData); 
  } catch (error) {
    
    console.error('Error al obtener los datos de las APIs externas:', error.response ? error.response.data : error.message);
    res.status(500).json({ error: 'Error al obtener los datos de las APIs', details: error.response ? error.response.data : error.message });
  }
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
