'use strict';

// LAB: SORTING AND CAMPY SCI-FI

// Be sure to read all the comments!
// That's where the instructions are!

// All of the instructions are inline with the assignment below.
// Look for the word TODO in comments.  Each TODO will have a
// description of what is required.

//*********************************************************
// SETUP
//*********************************************************

// We're going to use this special assert method to
// test our code
function assert(expression, failureMessage) {
  if (!expression) {
    console.log('assertion failure: ', failureMessage);
  }
}

//*********************************************************
// PROBLEM 1: The Blob
//*********************************************************

/* Dowington, PA had 1000 citizens on the night the blob escaped
 its meteorite. At first, the blob could only find and consume
 Pennsylvanians at a rate of 1/hour. However, each time it digested
 someone, it became faster and stronger: adding to its consumption
 rate by 1 person/hour.

    for the...      | starting rate of | persons consumed |
                    |  consumption     |    that hour     |
--------------------|------------------|------------------|
    first hour      |    1/hour        |        1         |
    second hour     |    2/hour        |        2         |
    third hour      |    3/hour        |        3         |
    fourth hour     |    4/hour        |        4         |

 TODO: First, make a constructor function, called Blob, that makes blobs.
 TODO: Next, create an instance of Blob named blob.
 TODO: Then, use a loop to calculate how long it took the blob to finish
 with Dowington.
*/

var hours = 0;
var personsAlive = 1000;

function Blob() {
};

var blob = new Blob();

while (personsAlive > 0) {
  hours++;
  personsAlive -= hours;
}
var hoursSpentInDowington = hours;

 // TODO: assign me the value of the
                           // above calculation (how long it took
                           // the blob to eat Dowington)

// Now, write a method that takes a population for an arbitrary
// town, and the starting consumption rate, and returns the number
// of hours the blob needs to ooze its way through that town.

Blob.prototype.hoursToOoze = function(population, peoplePerHour) {
  var hours2 = 0;
  while (population > 0) {
    hours2++;
    population = population - peoplePerHour;
    peoplePerHour++;
  }
  return hours2;
  // TODO: implement me based on the instructions above.
  // Be sure to then assign me to the Blob's prototype.
};

assert(blob.hoursToOoze(0, 1) === 0, 'no people means no time needed.');
assert(blob.hoursToOoze(1000, 1) === hoursSpentInDowington,
  'hoursSpentInDowington should match hoursToOoze\'s result for 1000');

  // TODO: write three more assertions like the two above, testing out
// the hoursToOoze method.

assert(blob.hoursToOoze(200, 6) === 16, 'this should be ok');
assert(blob.hoursToOoze(200, 6) !== 17, 'this should be wrong');
assert(blob.hoursToOoze(500, 3) !== 0, 'should be ok');

//*********************************************************
// PROBLEM 2: Universal Translator
//*********************************************************

var hello = {
  klingon: 'nuqneH',  // home planet is Qo'noS
  romulan: 'Jolan\'tru', // home planet is Romulus
  'federation standard': 'hello' // home planet is Earth
};

// TODO: define a constructor that creates objects to represent
// sentient beings. They have a home planet, a language that they
// speak, and method (that you'll place on the prototype) called
// sayHello.

function SentientBeing () {

  // TODO: specify a home planet and a language
  // you'll need to add parameters to this constructor
}

// sb is a SentientBeing object
function sayHello (sb) {
    // TODO: say hello prints out (console.log's) hello in the
    // language of the speaker, but returns it in the language
    // of the listener (the sb parameter above).
    // use the 'hello' object at the beginning of this exercise
    // to do the translating

    //TODO: put this on the SentientBeing prototype
}

// TODO: create three subclasses of SentientBeing, one for each
// species above (Klingon, Human, Romulan).

// assert((new Human()).sayHello(new Klingon()) === 'nuqneH',
//   'the klingon should hear nuqneH');

// TODO: write five more assertions, to complete all the possible
// greetings between the three types of sentient beings you created above.

//*********************************************************
// PROBLEM 3: Sorting
//
// Implement the following functions. Write at least 2
// assertions for each one (the assertions are how you
// will test your code)
//*********************************************************

function lastLetterSort(stringArray) {
  function byLastLetter(a, b) {
    var lastA = a[a.length - 1];
    var lastB = b[b.length - 1];
    if (lastA < lastB) {
      return -1;
    } else if (lastA > lastB) {
      return 1;
    } else {
      return 0;
    }
    assert(byLastLetter('cat','dog') === 1, 'should be ok');
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

    // this byLastLetter function is a "compare function"
    // And check out the "comparing strings" section  here:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
  }
  stringArray.sort(byLastLetter);
}
var pets = ['cat','dog','mouse','bird'];
lastLetterSort(pets);
assert(pets[0] === 'bird', 'bird should be first');
assert(pets[3] === 'cat', 'cat should be last');

function sumArray(numberArray) {
  var sum = 0;
  function partialSum(element, index, array) {
    sum += element;
  }
  numberArray.forEach(partialSum);
  return sum;
}
var numberArray = [1,2,3,4];
assert(sumArray(numberArray) === 10, 'sum should be 10');

function sumSort(arrayOfArrays) {
  arrayOfArrays.sort(function(a,b) {
    return sumArray(a) - sumArray(b);
  });
}
var arrayLots = [
  [5,6,7,8],
  [1,2,3,4],
];
sumSort(arrayLots);
assert(sumArray(arrayLots[0]) === 10, 'sum of 1st should be 10');

    // TODO: implement me using sumArray
    //  order the arrays based on the sum of the numbers
    //  inside each arra
