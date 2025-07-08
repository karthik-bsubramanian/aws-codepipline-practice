const express = require('express');
const path = require('path'); // Required for path manipulation

const app = express();
const port = process.env.PORT || 8000;

// Define the directory where your static HTML files are located
// app.use(express.static(path.join(__dirname, 'public'))); 

// Route to serve a specific HTML file
app.get('/yaqub', (req, res) => {
  app.use(express.static(path.join(__dirname, 'public'))); 
  res.sendFile(path.join(__dirname, 'public','index.html')); 
});

app.get('/', (req, res) => {
  res.write("Application is deployed using codePipeline and this is the second version cheers! hello");
  res.end();
});
app.listen(port)
// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });


