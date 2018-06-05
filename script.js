/**
 ** Plugin structure (Self executing)
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

/**
 * ?Closure is when a function is able to remember and access its lexical scope even when that function is executing outside its lexical scope.
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

// var car = { model: 'Ford', color: 'Red' }
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
 * * Closures------------------------------------------------------------------------------------------------------------------------------------
 */



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