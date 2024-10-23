const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const ruleRoutes = require('./routes/ruleRoutes');
const path = require('path');  

const app = express();
app.use(bodyParser.json());  


connectDB();


app.use(express.static(path.join(__dirname, 'public')));  


app.use('/api/rules', ruleRoutes);


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

const PORT = process.env.PORT || 5003;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
