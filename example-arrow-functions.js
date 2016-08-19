// var names = ['Andrew' , 'Jelia' , 'Jen'];
//
// names.forEach(function (name) {
//   console.log('forEach' , name);
// });
//
// names.forEach((name) => {
//   console.log('ArrowFunc' , name);
// });
//
// names.forEach((name) => console.log(name));

// var retrunMe = (name) => name + "!";
// console.log(retrunMe('Beard'));

// var Person_err = {
//   name: 'Beard',
//   greet: function() {
//     names.forEach(function (name){
//       console.log(this.name + ' say hi to '+ name);
//     });
//   }
// }
// Person_err.greet();
//
// var Person = {
//   name: 'Beard',
//   greet: function(){
//       names.forEach((name) => {
//         console.log(this.name + ' say hi to '+ name);
//       });
//   }
// }
// Person.greet();

// Challenge Area
function add (a , b ) {
  return a + b;
}
console.log(add(1 , 3));
console.log(add(9 , 0));

// addStatement
var addStatement = (a , b) => {
  return a + b;
}
console.log(addStatement(3,5));

// addExpression
var addExpression = (a ,b ) => a+b;
console.log(addExpression(3, -2));
