const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send({
    response: 'Hello, selamat datang di aplikasi saya!',
  });
});

app.get('/will', (req, res) => {
  // Misalkan Anda ingin menambahkan logika yang lebih kompleks di sini
  const response = {
    message: 'Kami membuat implementasi CI/CD yang membanggakan.',
    status: 'success',
    // Data lain yang ingin Anda tambahkan
  };
  res.send(response);
});

app.get('/ready', (req, res) => {
  // Di sini juga Anda bisa menambahkan logika lebih lanjut
  const response = {
    message: 'Proses sudah selesai!',
    status: 'completed',
    // Informasi tambahan jika diperlukan
  };
  res.send(response);
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Server is running on port 3000');
});

module.exports = app;
