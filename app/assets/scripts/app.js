var $ = require('jquery');
var Person = require('./modules/person');

var john = new Person("John Doe","Blue"),
jane = new Person("Jane Smith","Pink"),
link = new Person("Link Link","Green");

john.greet();
jane.greet();
link.greet();
