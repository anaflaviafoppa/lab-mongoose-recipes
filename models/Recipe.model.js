const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  // TODO: write the schema
  title: {
    type: String,
    require: true,
    unique:true
  },
  level:{
    type: String,
    enum:['Easy Peasy', 'Amateur Chef','UltraPro Chef']
  },
  ingredients:{
    type: Array
  },
  cuisine:{
    type: String
  },
  dishType:{
    type:String,
    enum:['Breakfast','Dish','Snack','Drink','Dessert','Other']
  },
  image:{
    type: String,
    default: "https://images.media-allrecipes.com/images/75131.jpg"
  },
  duration:{
    type: Number,
    min: 0
  },
  creator:{
    type: String
  },
  created:{
    type: Date,
    default: Date.now
  }

});


/*

const bookSchema = new mongoose.Schema({
  title: String, //typeof value, need to be with upperCase
  author: {
    type:String,
    required: true //caso o autor não for preenchido, não será aceito no DB
  },
  release: Number,
  pages: {
    type: Number,
    max: 500 //maximo valor de 500
  },
  genre: {
    type:String,
    enum:['romance','drama','mistery'] //apenas estes valores serão aceitos
  }, //typeof do valor de dentro da array
  available: Boolean
});*/



const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
