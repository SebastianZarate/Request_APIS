document.getElementById('fetchData').addEventListener('click', () => {
    document.getElementById('confirmation').style.display = 'none';
    document.getElementById('result').textContent = 'Cargando datos...'; 

    // Hacemos la petición al backend
    fetch('http://localhost:3500/combine-data')
      .then(response => response.json())
      .then(data => {
        // Mostrar los datos obtenidos
        document.getElementById('result').textContent = JSON.stringify(data, null, 2);
    
        document.getElementById('confirmation').style.display = 'block';
      })
      .catch(error => {
        document.getElementById('result').textContent = 'Error: ' + error;
      });
  });