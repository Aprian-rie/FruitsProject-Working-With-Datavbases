const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB");

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Check your data entry no name specified"]
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
  name: "Apples",
  rating: 7,
  review: "Apples are Good"
});
//fruit.save();

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favouriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

const pineapple = new Fruit({
  name: "Pineapple",
  rating: 9,
  review: "Good Fruit"
});
//pineapple.save();

const mango = new Fruit({
  name: "Mango",
  rating: 8,
  review: 'Classic fruit'
});
mango.save();

const person = new Person({
  name: "Kelvin",
  age: 22,
  favouriteFruit: pineapple
});

//person.save();

// const kiwi = new Fruit({
//   name: "kiwi",
//   rating: 7.5,
//   review: "Yummy Fruit"
// });
//
// const orange = new Fruit({
//   name: "orange",
//   rating: 6,
//   review: "it's Sour"
// });
//
// const banana = new Fruit({
//   name: "banana",
//   rating: 8,
//   review: "Decent Fruit"
// });
//
// Fruit.insertMany([kiwi, orange, banana], function(err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("Successfully saved all the fruits to fruitsDB");
//   }
// })
//



// Fruit.find(function(err, fruits){
//   if(err){
//     console.log(err);
//   }else{
//
//     mongoose.connection.close();
//
//     fruits.forEach(function(fruit){
//       console.log(fruit.name);
//     });
//   }
// })
//
// Fruit.updateOne({_id: "6344174baaac59574262918f"}, {name: "Peach"}, function(err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("Successfully updated the document");
//   }
// });

// Fruit.deleteOne({name: "Peach"}, function(err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("Deleted very well");
//   }
// })

//
// Person.deleteMany({name: "John"}, function(err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("Deleted Successfully");
//   }
// })

Person.updateOne({_id: "63469ad39bcfe92530702955"}, {favouriteFruit: mango}, function(err){
  if(err){
    console.log(err);
  }else{
    console.log("Added Favourite fruit Successfully");
  }
});
