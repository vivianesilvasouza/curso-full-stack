const express = require('express');
const checkilistsRouter = require('./src/routes/checklist')
require('./config/database')

const app = express();
app.use(express.json());

app.use('/checkilists', checkilistsRouter);

app.listen(3002, () => {
    console.log('servidor foi iniciado');
})