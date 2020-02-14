const mongoose = require('mongoose');
const Recipe = require('./models/Recipe.model'); // Import of the model Recipe from './models/Recipe.model.js'
const data = require('./data'); // Import of the data from './data.json'

const MONGODB_URI = 'mongodb://localhost/recipeApp';

// Connection to the database "recipeApp"
mongoose
  .connect(MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(self => {
    return self.connection.dropDatabase(); // APENAS PARA O  EXERCICIO - pelo unique do title
  })
  .then(() => {
    // Run your code here, after you have insured that the connection was made
    return Recipe.create({
      title: 'SOBRECOXA ASSADA COM ARROZ E LENTILHA',
      level: 'UltraPro Chef',
      ingredients: ['3 sobrecoxas de frango com pele e osso', '1 maçãs fuji', '1 cabeça de alho'],
      cuisine: 'Brazilian',
      dishType: 'Dish',
      image:
        'https://panelinha-sitenovo.s3.sa-east-1.amazonaws.com/receita/1579808151261-sobrecoxa-assada.jpg',
      duration: 120,
      creator: 'Rita Lobo',
      created: '2017-05-12'
    });
  })
  .then(recipeDocument => {
    console.log(recipeDocument.title);

    return Recipe.insertMany(data);
  })
  .then(() => {
    return Recipe.find({}, { title: 1, _id: 0 });
  })
  .then(title => {
    console.log(title);
  })
  .then(() => {
    return Recipe.updateOne({ title: 'Rigatoni alla Genovese' }, { duration: 100 });
  })
  .then(() =>{
    console.log('Rigatoni alla Genovese was updated');
  })
  .then(() => {
    return Recipe.deleteOne({ title: 'Carrot Cake' });
  })
  .then(() =>{
    console.log('Carrot Cake was deleted')
  })
  .then(() => {
    return mongoose.disconnect();
  })
  .then(() =>{
    console.log('Has disconnected');
  })
  .catch(error => {
    console.error('Error connecting to the database', error);
  });
