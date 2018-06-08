/**
 ** Data Types -----------------------------------------------------------------------------------------------------------
 */

//? In JS, there are six primitive data types:

//?Boolean
//?Number
//?String
//?Null
//?Undefined
//?Symbol

//?----------Boolean
/**   
 * ?Boolean
 * ?A boolean represents only one of two values: true, or false. Think of a boolean as an on/off or a yes/no switch.
 */
// var boo1 = true;
// var boo2 = false;

//?----------Number
/**
 * ?There is only one type of Number in JavaScript. Numbers can be written with or without a decimal point. A number can also be +Infinity, -Infinity, and NaN (not a number).
 */

// var num1 = 32;
// var num2 = +Infinity;


//?----------String
/**
 * ?Strings are used for storing text. Strings must be inside of either double or single quotes. In JS, Strings are immutable (they cannot be changed).
 */
// var str1 = 'hello, it is me';
// var str2 = "hello, it's me";


//?----------Null
/**
 * ?Null has one value: null. It is explicitly nothing.
 */

// var nothing = null;

//?----------Undefined
/**
 * ?A variable that has no value is undefined.
 */

// var testVar;
// console.log(testVar); //undefined

//?----------Symbol
/**
 * ?Symbols are new in ES6. A Symbol is an immutable primitive value that is unique. For the sake of brevity, 
 * ?that is the extent that this article will cover Symbols.
 */

// const mySymbol = Symbol('mySymbol');


/**
 ** Objects -----------------------------------------------------------------------------------------------------------
 */

 
/**
 * ?An object is an unordered list of primitive data types (and sometimes reference data types) that is stored as a series of name-value pairs.
 * ?Each item in the list is called a property (functions are called methods).
 */

    // var myFirstObject = {firstName: "Richard", favoriteAuthor: "Conrad"};

/**
 * ?Think of an object as a list that contains items, and each item (a property or a method) in the list is stored by a name-value pair. 
 * ?The property names in the example above are firstName and favoriteAuthor. And the values are “Richard” and “Conrad.”
 * ?Property names can be a string or a number, but if the property name is a number, it has to be accessed with the bracket notation.0 
 * ?More on bracket notation later. Here is another example of objects with numbers as the property name:*/

    // var ageGroup = {30: "Children", 100:"Very Old"};
    // console.log(ageGroup.30) //This will throw an error
    //This is how you will access the value of the property 30, to get value "Children"
    // console.log(ageGroup["30"]); //Children

    //It is best to avoid using numbers as property names.


 //?As a JavaScript developer you will most often use the object data type, mostly for storing data and for creating your own custom methods and functions.


 /**
 ** Reference Data Type and Primitive Data Types -----------------------------------------------------------------------------------------------------------
 */

 /**
  * ?One of the main differences between reference data type and primitive data types is reference data type’s value is stored as a reference, 
  * ?it is not stored directly on the variable, as a value, as the primitive data types are. For example:
  */
  
//     The primitive data type String is stored as a value

//     var person = "Kobe";  
//     var anotherPerson = person; //anotherPerson = the value of person
//     person = "Bryant"; //value of person changed

//     console.log(anotherPerson); //Kobe
//     console.log(person); //Bryant


/**
 * ?It is worth noting that even though we changed person to “Bryant,” the anotherPerson variable still retains the value that person had.
 * ?Compare the primitive data saved-as-value demonstrated above with the save-as-reference for objects:
 */

    // var person = {name: "Kobe"};
    // var anotherPerson = person;
    // person.name = "Bryant";

    // console.log(anotherPerson.name); //Bryant
    // console.log(person.name); //Bryant

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

    //This is an empty object initialized using the object literal notation

    // var myBooks = {};

    //This is an object with 4 items, again using object literal
    // var mango = {
    //   color: "yellow",
    //   shape: "round",
    //   sweetness: 8,

    //   howSweetAmI: function () {
    //     console.log("Hmm Hmm Good");
    //   }
    // }
    

     /**
   * ?----Object Constructor
   */
    
   /**
    * ?The second most common way to create objects is with Object constructor. 
    * ?A constructor is a function used for initializing new objects, and you use the new keyword to call the constructor.
    */

    // var mango = new Object();
    // mango.color = "yellow";
    // mango.shape = "round";
    // mango.sweetness = 8;

    // mango.howSweetAmI = function () {
    //   console.log("Hmm Hmm Good");
    // }

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

// (function shouter() {
//   var role = "Developer"; //Private Declarations
//   this.publicrole = "Someeeee"; //Public access Variables
//   this.shout = function () { //Public methods
//     alert("Hello !!!" + role);
//   }
//   return this;
// })();

/**
 * ?Constructor initialised , initialise via var new shouter = shouter() , then access 
 */


// function shouter() {
//   var role = "Developer"; //Private Declarations
//   this.publicrole = "Someeeee"; //Public access Variables
//   this.shout = function () { //Public methods
//     alert("Hello !!!" + role);
//   }
//   return this;
// }

/**
 * *Scopes examples -----------------------------------------------------------------------------------------------------------
 */

// var global = "Global scope";
// (function () {
//     this.public = "vishnu";
//     function shout() {
//         var private = "secret";
//         console.log("Private is : " + private + " and Public is : " + this.public + " and global is" + global);
//     }
//     shout();
// })();


/**
 * *Closures -----------------------------------------------------------------------------------------------------------
 */

//?A closure in JavaScript is like keeping a copy of all the local variables, just as they were when a function exited
//??Closure is when a function is able to remember and access its lexical scope even when that function is executing outside its lexical scope.

// function sayHello2(name) {

//   var text = 'Hello ' + name; //Local variable

//   var say = function () {
//     console.log(text);
//   }
//   return say;

// }

// var say2 = sayHello2('Bob');


// say2(); //logs "Hello Bob"

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



//    function person(name) {
//        return {
//            greet: function () {
//                console.log('hello from ' + name)
//            }
//        }
//    }

//    let alex = person('alex');
//    alex.greet(); //hello from alex
//    console.log(alex.name); //undefined
//    console.log(name); / will throw ReferenceError





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

//   function Person(firstName, lastName, age) {

//     var privateDef = 'this is a private member';

//     return {
//       getName: function() {
//         console.log('My name is ' + firstName + ' ' + lastName);
//       },
//       getAge: function() {
//         console.log('I am ' + age + ' years old')
//       }
//     }
//   }

//   let person = new Person('Alex', 'Kondov', 22);
//   person.getName();
//   person.getAge();


//   console.log(person.privateDef); //Undefined can't access


/**
 * ?In this slightly more realistic example we have a function which returns an order object. The only exposed function is calculateTotal. 
 * ?It has a closure over the Order function which allows it to use its variables and passed arguments. 
 * ?It also hides what is actually happening when you are calculating the order total, 
 * ?allowing you to add a shipping cost or something else in the future.
 * 
 */


//    function Order(items) {

//        const total = items => {
//            return items.reduce((acc, curr) => {
//                return acc + curr.price
//            }, 0)
//        }

//reduce itterates through the object , acc is accumilator or total , curr is current value. Basically we iterate through each
//Add price (curr.price) and stack it to acc.

//        const addTaxToPrice = price => price + (price * 0.2)

//        return {
//            calculateTotal: () => {
//                return addTaxToPrice(total(items)).toFixed(2)
//            }
//        }

//    }

//    const items = [{
//            name: 'Toy',
//            price: 14.99
//        },
//        {
//            name: 'Candy',
//            price: 7.99
//        }
//    ]

//    const order = Order(items)
//    console.log(order.total) //undefined
//    console.log(order.addTaxToPrice) //undefined
//    console.log(order.calculateTotal()) //27.58


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

// var car = { model: 'Ford', color: 'Red' }

// function updateVehicle(model, color) {
//   this.model = model;
//   this.color = color;
// }


/**
 * *Using Call and Apply
 */

//?Call
// updateVehicle.call(car, 'Honda', 'Black');

//?Apply
// updateVehicle.apply(car, ['Honda', 'Black'])

// console.log(car) //{ model: 'Honda', color: 'Black' }


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

// var car = { model: 'Ford', color: 'Red' };

// function updateVehicle(model, color) {
//   this.model = model;
//   this.color = color;
// }

// var updateCar = updateVehicle.bind(car);
// updateCar('Honda', 'Black')
// console.log(car) //{ model: 'Honda', color: 'Black' }

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

// var myName;

// function myName () {
// console.log (myName);
// }

//?The function declaration overrides the variable name


// var myName;

// function myName () {
// console.log (myName);
// }

// console.log(typeof myName); //function


//?But in this example, the variable assignment overrides the function declaration

// var myName = "Richard"; //This is the variable assignment (initialization) that overrides the function declaration.

// function myName() {
//   console.log("Rich");
// }

// console.log(typeof myName); //String


//?It is important to note that function expressions, such as the example below, are not hoisted.

// var myName = function () {
//   console.log("Rich");
// }

//?In strict mode, an error will occur if you assign a variable a value without first declaring the variable. Always declare your variables.
