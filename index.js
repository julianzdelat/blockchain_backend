const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const swaggerUi = require('swagger-ui-express');

const swaggerDocument = require('./src/api-docs/swagger');
const Routes = require('./src/routes/Routes');
const Blockchain = require('./src/blockchain/blockchain');
const Block = require('./src/blockchain/block');

mongoose.connect('mongodb://localhost/blockchain2', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.Promise = global.Promise;
mongoose.set('useFindAndModify', false);

const db = mongoose.connection;
// eslint-disable-next-line no-console
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const blockchain = new Blockchain();
/*
for(let i=0; i<5; i++) {
    const newData = 'krunal'+i;
    blockchain.addBlock({data: newData});
}
*/
// To see the blockchain
console.log(blockchain);

const app = express();
const PORT = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, {
  swaggerOptions: {
    supportedSubmitMethods: [],
  },
}));
Routes(app);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on PORT: ${PORT}`);
});
