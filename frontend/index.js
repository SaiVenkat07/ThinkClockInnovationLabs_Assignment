document.getElementById('batteryForm').addEventListener('submit', async function(event) {
  event.preventDefault();
  
  const formData = new FormData();
  formData.append('image', document.getElementById('imageUpload').files[0]);

  const response = await fetch('/upload', {
    method: 'POST',
    body: formData
  });
  const data = await response.json();

  // Update the UI with data received from the backend
  document.getElementById('plot').innerHTML = JSON.stringify(data.bode_plot);
  document.getElementById('circuitModel').innerHTML = JSON.stringify(data.circuit_model);
  document.getElementById('soh').innerHTML = JSON.stringify(data.soh);
});