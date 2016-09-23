var Person = function(nationality, name) {
  this.name = name;
  this.nationality = nationality;
  this.child = null;
  this.nurse = null;
}

Person.prototype.giveBirth = function(name) {
  console.log(this.nationality + ' has given birth');
  return new Person(this.nationality, name);
}

Person.prototype.killMaleBabies = function() {
  return true;
}

Person.prototype.isHardToKeep = function() {
  console.log(`${this.name} is hard to keep`);
  return true;
}

Person.prototype.found = function(object) {
  console.log(`${object.content} has now been found`);
  return true;
}

Person.prototype.daughter = new Person(Person.prototype.nationality, 'daughter');

Person.prototype.setAsChild = function(person) {
  this.child = person;
}

Person.prototype.presentNurse = function(person) {
  this.nurse = person;
}

var Basket = function() {
  this.content = '';
  this.location = '';
}

Basket.prototype.put = function(person) {
  console.log(`The basket now contains ${person.name}`);
  this.content = person.name;
  return this;
}

Basket.prototype.putInto = function(location) {
  console.log('The basket is now in the '+location);
  this.location = location;
  return this;
}
