require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const personSchema = new mongoose.Schema({
  "name": {type: String, required: true},
  "age": Number,
  "favoriteFoods": [String]
});

const Person = mongoose.model("Person", personSchema);

const createAndSavePerson = (done) => {
  const mark = new Person({
    "name": "mark",
    "age": 18,
    "favoriteFoods": ["pizza", "burgers", "candy"]
  });
  
  mark.save((err, data) => {
    if(err){
      return console.error(err);
    } 
    done(null, data);
  });
};

const arrayOfPeople = [
  {
    "name": "harry",
    "age": 11,
    "favoriteFoods": ["apples", "bananas"]
  },
  {
    "name": "ron",
    "age": 12,
    "favoriteFoods": ["fish", "chicken"]
  },
  {
    "name": "hermoine",
    "age": 11,
    "favoriteFoods": ["almonds", "cashews"]
  }
];

const createManyPeople = ((arrayOfPeople, done ) => {
  
  Person.create(arrayOfPeople, (err, data) => {
    if(err){
      return console.error(err);
    };
    done(null, data);
  });
});

const findPeopleByName = (personName, done) => {

  Person.find({"name": personName}, (err, personFound) => {
    if(err){
      return console.log(err);
    };
    done(null, personFound);
  });
};

const findOneByFood = (food, done) => {

  Person.findOne({"favoriteFoods": food}, (err, data) => {
    if(err){
      return console.log(err);
    };
    done(null, data);
  });
}; 

const findPersonById = (personId, done) => {

  Person.findById(personId, (err, personFound) => {
    if(err){
      return console.log(err);
    };
    done(null, personFound);
  });
};

const findEditThenSave = (personId, done) => {
  
  const foodToAdd = "hamburger";

  Person.findById(personId, (err, person) => {
    if(err){
      return console.log(err);
    };

    person.favoriteFoods.push(foodToAdd);

    person.save((err, updatedPerson) => {
      if(err){
        console.log(err);
      };
      done(null, updatedPerson);
    });
  });
};

const findAndUpdate = (personName, done) => {

  const ageToSet = 20;

  Person.findOneAndUpdate({"name": personName}, {"age": ageToSet}, {new: true}, (err, updatedPerson) => {
    if(err){
      return console.log(err);
    };
    done(null, updatedPerson);
  });
};
























const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
