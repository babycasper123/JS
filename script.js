/**
 ** Data Types -----------------------------------------------------------------------------------------------------------
 */

//? In JS, there are six primitive data types:

?Boolean
?Number
?String
?Null
?Undefined
?Symbol

//?----------Boolean
/**   
 * ?Boolean
 * ?A boolean represents only one of two values: true, or false. Think of a boolean as an on/off or a yes/no switch.
 */
var boo1 = true;
var boo2 = false;

//?----------Number
/**
 * ?There is only one type of Number in JavaScript. Numbers can be written with or without a decimal point. A number can also be +Infinity, -Infinity, and NaN (not a number).
 */

var num1 = 32;
var num2 = +Infinity;


//?----------String
/**
 * ?Strings are used for storing text. Strings must be inside of either double or single quotes. In JS, Strings are immutable (they cannot be changed).
 */
var str1 = 'hello, it is me';
var str2 = "hello, it's me";


//?----------Null
/**
 * ?Null has one value: null. It is explicitly nothing.
 */

var nothing = null;

//?----------Undefined
/**
 * ?A variable that has no value is undefined.
 */

var testVar;
console.log(testVar); //undefined

//?----------Symbol
/**
 * ?Symbols are new in ES6. A Symbol is an immutable primitive value that is unique. For the sake of brevity, 
 * ?that is the extent that this article will cover Symbols.
 */

const mySymbol = Symbol('mySymbol');


/**
 ** Objects -----------------------------------------------------------------------------------------------------------
 */

 
/**
 * ?An object is an unordered list of primitive data types (and sometimes reference data types) that is stored as a series of name-value pairs.
 * ?Each item in the list is called a property (functions are called methods).
 */

    var myFirstObject = {firstName: "Richard", favoriteAuthor: "Conrad"};

/**
 * ?Think of an object as a list that contains items, and each item (a property or a method) in the list is stored by a name-value pair. 
 * ?The property names in the example above are firstName and favoriteAuthor. And the values are “Richard” and “Conrad.”
 * ?Property names can be a string or a number, but if the property name is a number, it has to be accessed with the bracket notation.0 
 * ?More on bracket notation later. Here is another example of objects with numbers as the property name:*/

    var ageGroup = {30: "Children", 100:"Very Old"};
    console.log(ageGroup.30) //This will throw an error
    //This is how you will access the value of the property 30, to get value "Children"
    console.log(ageGroup["30"]); //Children

    //It is best to avoid using numbers as property names.


 //?As a JavaScript developer you will most often use the object data type, mostly for storing data and for creating your own custom methods and functions.


 /**
 ** Reference Data Type and Primitive Data Types -----------------------------------------------------------------------------------------------------------
 */

 /**
  * ?One of the main differences between reference data type and primitive data types is reference data type’s value is stored as a reference, 
  * ?it is not stored directly on the variable, as a value, as the primitive data types are. For example:
  */
  
 //  The primitive data type String is stored as a value

 var person = "Kobe";  
 var anotherPerson = person; //anotherPerson = the value of person
 person = "Bryant"; //value of person changed

 console.log(anotherPerson); //Kobe
 console.log(person); //Bryant

/**
* ?It is worth noting that even though we changed person to “Bryant,” the anotherPerson variable still retains the value that person had.
* ?Compare the primitive data saved-as-value demonstrated above with the save-as-reference for objects:
*/

   var person = {name: "Kobe"};
   var anotherPerson = person;
   person.name = "Bryant";

   console.log(anotherPerson.name); //Bryant
   console.log(person.name); //Bryant

 /**
  * ?In this example, we copied the person object to anotherPerson, but because the value in person was stored as a reference and not an actual value, when we changed the 
  * ?person.name property to “Bryant” the anotherPerson reflected the change because it never stored an actual copy of it’s own value of the person’s properties, it only had a reference to it.
  */

/**
** Object Creation -----------------------------------------------------------------------------------------------------------
*/

//? Object Literal
//? Object Constructor

/**
* ?--------Object Literals
*/

/**
 * ?The most common and, indeed, the easiest way to create objects is with the object literal described here:
 */

  //  This is an empty object initialized using the object literal notation

   var myBooks = {};

  //  This is an object with 4 items, again using object literal
   var mango = {
      color: "yellow",
      shape: "round",
      sweetness: 8,

      howSweetAmI: function () {
      console.log("Hmm Hmm Good");
      }
   }
 

  /**
* ?----Object Constructor
*/
 
/**
 * ?The second most common way to create objects is with Object constructor. 
 * ?A constructor is a function used for initializing new objects, and you use the new keyword to call the constructor.
 */

   var mango = new Object();
   mango.color = "yellow";
   mango.shape = "round";
   mango.sweetness = 8;

   mango.howSweetAmI = function () {
      console.log("Hmm Hmm Good");
   }

 /**
  * ?While you can use some reserved word such as “for” as property names in your objects, it is wise to avoid this altogether.
  * ?Objects can contain any other data type, including Numbers, Arrays, and even other Objects.Practical Patterns for Creating Objects
  */

/**
** Plugin structure -----------------------------------------------------------------------------------------------------------
*/

/**
* ?Self executing
*/

(function shouter() {
  var role = "Developer"; //Private Declarations
  this.publicrole = "Someeeee"; //Public access Variables
  this.shout = function () { //Public methods
    alert("Hello !!!" + role);
  }
  return this;
})();

/**
* ?Constructor initialised , initialise via var new shouter = shouter() , then access 
*/


function shouter() {
  var role = "Developer"; //Private Declarations
  this.publicrole = "Someeeee"; //Public access Variables
  this.shout = function () { //Public methods
     alert("Hello !!!" + role);
  }
  return this;
  }
  var shouter1 = new  shouter() ;
/**
* *Scopes examples -----------------------------------------------------------------------------------------------------------
*/

var global = "Global scope";
(function () {
   this.public = "vishnu";
   function shout() {
      var private = "secret";
      console.log("Private is : " + private + " and Public is : " + this.public + " and global is" + global);
   }
   shout();
})();


/**
* *Closures -----------------------------------------------------------------------------------------------------------
*/

//?A closure in JavaScript is like keeping a copy of all the local variables, just as they were when a function exited
//??Closure is when a function is able to remember and access its lexical scope even when that function is executing outside its lexical scope.

function sayHello2(name) {

var text = 'Hello ' + name; //Local variable

var say = function () {
 console.log(text);
}
return say;

}

var say2 = sayHello2('Bob');


say2(); //logs "Hello Bob"

/**
* ?Here say2 is assigned a referance of  the anonymos function of console.log . So saHello2('bob') passes the name , makes of it some use in text. But only return the anonomous 
* ?function to sa2.
* ?So technically after function return name , text everything should have been destroyed. Since it only has access to the anynumous function it just returned , 
* ?not the global variables of the parent 
* ?function even though it makes use of it. But because of closure the values are not destroyed and the function holds onto it.
*/

/**
* *----------------------------
*/

/**
* ?Here we define a person function that takes a single parameter name. It returns an object which has a greet function as one of it’s properties. 
* ?As we now know, this exposed greet function will still have access to its parent’s arguments even when we call it like this. 
* ?So even that the name variable is not explicitly defined in it’s scope greet will fetch it from its parent’s because it is a closure.
*/



function person(name) {
    return {
        greet: function () {
            console.log('hello from ' + name)
        }
    }
}

let alex = person('alex');
alex.greet(); //hello from alex
console.log(alex.name); //undefined
console.log(name); / will throw ReferenceError





/**
*?Often we don’t want to expose all the contents of a function to the global scope, we want most of it to remain private and untouchable.
*?This is where closures are really handy. We can utilise their power to access the parent scope even when they are called outside of it to achieve proper encapsulation.
*?We can have many functions and variables inside our parent function and by using a closure we can expose to the world only the functionality that we desire.
*?With closures we can define a public API for our function and keep everything else private.
*?Now that we have encapsulation covered, we just need to put it in practice. The implementation of this concept in JavaScript is done using the module pattern below.
*/


/**
* ?This is a fairly simple example to demonstrate how we can keep some of the function’s data private. 
* ?We can have other nested functions and even use them in the exported ones but not expose them.
* 
*/

function Person(firstName, lastName, age) {

 var privateDef = 'this is a private member';

 return {
   getName: function() {
     console.log('My name is ' + firstName + ' ' + lastName);
   },
   getAge: function() {
     console.log('I am ' + age + ' years old')
   }
 }
}

let person = new Person('Alex', 'Kondov', 22);
person.getName();
person.getAge();


console.log(person.privateDef); //Undefined can't access


/**
* ?In this slightly more realistic example we have a function which returns an order object. The only exposed function is calculateTotal. 
* ?It has a closure over the Order function which allows it to use its variables and passed arguments. 
* ?It also hides what is actually happening when you are calculating the order total, 
* ?allowing you to add a shipping cost or something else in the future.
* 
*/


function Order(items) {

    const total = items => {
        return items.reduce((acc, curr) => {
            return acc + curr.price
        }, 0)
    }

// reduce itterates through the object , acc is accumilator or total , curr is current value. Basically we iterate through each
// Add price (curr.price) and stack it to acc.

    const addTaxToPrice = price => price + (price * 0.2)

    return {
        calculateTotal: () => {
            return addTaxToPrice(total(items)).toFixed(2)
        }
    }

}

const items = [{
        name: 'Toy',
        price: 14.99
    },
    {
        name: 'Candy',
        price: 7.99
    }
]

const order = Order(items)
console.log(order.total) //undefined
console.log(order.addTaxToPrice) //undefined
console.log(order.calculateTotal()) //27.58


/**
* *.call, .apply, and .bind -----------------------------------------------------------------------------------------------------------
*/

/**
* ?The ‘this’ keyword is an extremely powerful tool for programmers. Tracking and using ‘this’ can be quite confusing at times. 
* ?Luckily there are methods to help keep ‘this’ simple.
* ?On the other hand understanding the methods .call, .apply, and .bind can be just as confusing. 
* ?Below we have an object and a function using the ‘this’ keyword to change the color property of an object. 
* ?Imagine the car has been replaced with a black Honda, how would one update the car object using updateVehicle (without modifying it)? 
*/

var car = { model: 'Ford', color: 'Red' }

function updateVehicle(model, color) {
this.model = model;
this.color = color;
}


/**
* *Using Call and Apply
*/

//?Call
updateVehicle.call(car, 'Honda', 'Black');

//?Apply
updateVehicle.apply(car, ['Honda', 'Black'])

console.log(car) //{ model: 'Honda', color: 'Black' }


/**
* ?Invoking the function with .call or .apply is a great on the fly solution. Inside of .call and .apply the first parameter is always the context to assign ‘this’. 
* ?The above examples are using the car object. The key difference between the two is how the arguments are applied after the context. 
* ?.apply uses the arguments in an array, while .call uses a comma to separate them
*/


/**
* * Using Bind
*/


/**
* ?Unlike .call and .apply, .bind isn’t used to invoke a function. Just like the name implies it binds the ‘this’ to the object given in it’s parameter. 
* ?This way whenever the function is invoked it will automatically use the context assigned to it.
*/

var car = { model: 'Ford', color: 'Red' };

function updateVehicle(model, color) {
this.model = model;
this.color = color;
}

var updateCar = updateVehicle.bind(car);
updateCar('Honda', 'Black')
console.log(car) //{ model: 'Honda', color: 'Black' }

/**
* ?In the example above the function updateCar will always use the updateVehicle function bound to the car object. Using the same parameters as 
* ?the updateVehicle function.
*/


/**
* * Hoisting ------------------------------------------------------------------------------------------------------------------------------------
*/


/**
* ?Function Declaration Overrides Variable Declaration When Hoisted
*  ?Both function declaration and variable declarations are hoisted to the top of the containing scope. And function declaration takes precedence over variable 
*  ?declarations (but not over variable assignment). As is noted above, variable assignment is not hoisted, and neither is function assignment. As a reminder,  
*  ?this is a function assignment: var myFunction = function () {} Here is a basic example to demonstrate:
*/




//?Both the variable and the function are named myName

var myName;

function myName () {
console.log (myName);
}

//?The function declaration overrides the variable name


var myName;

function myName () {
console.log (myName);
}

console.log(typeof myName); //function


//?But in this example, the variable assignment overrides the function declaration

var myName = "Richard"; //This is the variable assignment (initialization) that overrides the function declaration.

function myName() {
console.log("Rich");
}

console.log(typeof myName); //String


//?It is important to note that function expressions, such as the example below, are not hoisted.

var myName = function () {
console.log("Rich");
}

//?In strict mode, an error will occur if you assign a variable a value without first declaring the variable. Always declare your variables.

//? Higher order functions are same as call back functions



// *Object.entries() method

/**
* ?The Object.entries() method returns an array of a given object's own enumerable property [key, value] pairs, in the same order as that provided by a for...in loop 
* ?(the difference being that a for-in loop enumerates properties in the prototype chain as well).
*/

let meals = {  
 mealA: 'Breakfast',
 mealB: 'Lunch',
 mealC: 'Dinner',
 tree : {
   parent:true,
   child1 : false
 }
};
for (let [key, value] of Object.entries(meals)) {  
 console.log(key + ':' + value);
}


 "mealA:Breakfast"
 "mealB:Lunch"
 "mealC:Dinner"
 "tree:[object Object]"


 // * Factory functions


 //* Method chaining example via prototype.

 // define the class
 var Kitten = function () {
   this.name = 'Garfield';
   this.color = 'brown';
   this.gender = 'male';
 };

 Kitten.prototype.setName = function (name) {
   this.name = name;
   return this;
 };

 Kitten.prototype.setColor = function (color) {
   this.color = color;
   return this;
 };

 Kitten.prototype.setGender = function (gender) {
   this.gender = gender;
   return this;
 };

 Kitten.prototype.save = function () {
   console.log(
     'saving ' + this.name + ', the ' +
     this.color + ' ' + this.gender + ' kitten...'
   );
   // save to database here...
   return this;
 };


 //* Method chaining example 2

 var test = function () {

   var settings = {
     name : ''
   }

   var speak = function(){
     console.log("Speaking");
     return this;
   };

   var running = function(){
     console.log("Running");
     return this;
   };

   var setname = function(name){
     settings.name = name;
   };

   return {
     speak : speak,
     running : running,
     setname : setname,
     settings : settings
   };

 };

 var x = new test();
 var y = new test();


 //* Understanding ARROW FUNCTIONS scope of this.

 // As you’ll see, the function will log to the screen every second. But the result isn’t what we expect. NaN (Not a Number) is being logged. 
 // So, what went wrong? First thing is first, stop they annoying interval by running:

 function Counter() {
   this.num = 0;
   this.timer = setInterval(function add() {
     this.num++;
     console.log(this.num);
   }, 2000);
 }

 var a = new Counter();

//? Let’s back up. Our setInterval function isn’t being called on a declared object. It also isn’t being called with the new keyword (only the Counter() function is). 
//? And lastly, we’re not using call, bind, or apply. setInterval is just a normal function. In fact, the value of this in setIntervalis being bound to the global object! 
//? Lets test this theory by logging the value of this:


function Counter() {
this.num = 0;
this.timer = setInterval(function add() {
   console.log(this);
 }, 1000);
}
var b = new Counter();

//? As you’ll see, the window object is logged out every second.
//? Back to our original function. It was logging NaN because this.num was referring to the num property on the window object ( window.num which doesn’t exist), 
//? and not the b object ( b.num ) we had just created.
//? So how do we fix this? With an arrow function! We need a function that doesn’t bind this. With an arrow function, the this binding keeps its original binding from the context.
//? Lets take our original Counter function and replace our setInterval with an arrow function.

function Counter() {
this.num = 0;
this.timer = setInterval(() => {
 this.num++;
 console.log(this.num);
}, 1000);
}

//? As you’ll see, the console begins logging increasing numbers — it works! The original this binding created by the Counter constructor function is preserved. 
//? Inside the setInterval function, this is still bound to our newly created b object!


//* Real time example of prototyping

//? Adding a custom method to a built in data type like String

String.prototype.removeSecond = function(){
let cleanedString = this.substring(1,2);
return cleanedString;
}
console.log("vishnu".removeSecond()) //Outputs i



//* - Promise 

//?  I promise to do this whenever that is true. If it isn't true, then I won't.
//?  This is a simple illustration of JavaScript Promises. Sounds like an IF statement? We’ll soon see a huge difference.
//?  A promise is used to handle the asynchronous result of an operation. JavaScript is designed to not wait for an asynchrnous block of code to completely execute before other synchronous parts of the code can run. For instance, when making API requests to servers, we have no idea if these servers are offline or online, or how long it takes to process the server request.
//?  With Promises, we can defer execution of a code block until an async request is completed. This way, other operations can keep running without interruption.
//?  Promises have three states:
//?  Pending: This is the initial state of the Promise before an operation begins
//?  Fulfilled: This means the specified operation was completed
//?  Rejected: The operation did not complete; an error value is usually thrown
//?  Creating a Promise
//?  The Promise object is created using the new keyword and contains the promise; this is an executor function which has a resolve and a reject callback. As the names imply, each of these callbacks returns a value with the reject callback returning an error object.

const weather = true
const dates = new Promise(function(resolve,reject){
if (weather == true ) {
   setTimeout(function () {
      resolve('Yay will go');
   }, 3000);
}
else {
   reject(new Error("Nope !"))
}
});

dates.then(function(done){
   console.log(done)
}).catch(function(error){
   console.log(error.message)
})



//* Simple callback function example 

 var names = [];

 function inputname(name,callback){
   if (name != ''){
     names.push(name);
     callback(names);
   }
 } 

 function logname(namearray){
   console.log(namearray);
 }
 
 inputname("Vishnu",logname);


 //* Async function
 https://javascript.info/async-await
 //? The word “async” before a function means one simple thing: a function always returns a promise. 
 //? If the code has return <non-promise> in it, then JavaScript automatically wraps it into a resolved promise with that value.


 async function runner() {
   var datafetch = new Promise((resolve, reject) => {
     setTimeout(function() {
       resolve("data");
     }, 3000);
   });
 
   var datafetch2 = new Promise((resolve, reject) => {
     setTimeout(function() {
       resolve("data2");
     }, 5000);
   });
 
   let result = await datafetch;
   let result2 = await datafetch2;
   console.log(result);
   console.log(result2);
   console.log("asd");
 }


 //* Observables

 //? An Observable is a unique Object similar to a Promise that can help manage async code. Observables are not part of the JavaScript language 
 //? yet but are being proposed to be added to the language. Since we can’t use a built-in Observable, 
 //? we rely on a popular Observable library called RxJS. RxJS provides an Observable implementation for use to 
 //? use as many other helpful utilities related to Observables.


 import { Observable } from 'rxjs';

 const observable = new Observable(observer => {
   setTimeout(() => {
     observer.next('Hello from a Observable!');
   }, 2000);
 });
 
 observable.subscribe(value => console.log(value));
 
 
//? In this example, we import the Observable from rxjs. Just like a Promise we instantiate and create our Observable by calling the new keyword. 
//? In the constructor, we pass a function that will handle our async task. The Observable will pass us a reference to an object called an Observer. 
//? The Observer is similar to the resolve function from our Promise example.
//? In the Observable, we create a setTimeout like our Promise example. In the Observable we call observer.next() to trigger and emit our value to the consumer 
//? of our Observable. To get the value of our Observable we call the subscribe() method.

//? The subscribe() method similar to the Promise then() will pass the value to our function when the async task has completed. As you can see the 
//? Observable API is very similar to the Promise API. Observable have the same feature set as Promises plus additional features we will cover next.

//? We have seen how Observables are very similar to Promises, but what is different between the two? One of the significant differences between Observables and 
//? Promises is Observables support the ability to emit multiple asynchronous values. A Promise once it has resolved its async value it completes and can no 
//? longer be used. The one shot use falls short for the use case where we need multiple values over time. Some common use cases of this, web sockets with push 
//? notifications, user input changes, repeating intervals, etc.