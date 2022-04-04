let stocks = {
  Fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};
// function kitchen(){

//   return new Promise ((resolve, reject)=>{
//     if(true){
//        resolve("promise is fulfilled")
//     }

//     else{
//         reject("error caught here")
//     }
//   })
// }

// kitchen()  // run the code
// .then()    // next step
// .then()    // next step
// .catch()   // error caught here
// .finally() // end of the promise [optional]

//====================(async/await)
//👇 Magical keyword
function toppings_choice() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log("which topping would you love?"));
    }, 3000);
  });
}

async function kitchen() {
  console.log("A");
  console.log("B");
  console.log("C");

  await toppings_choice();

  console.log("D");
  console.log("E");
}

// Trigger the function

kitchen();
console.log("doing the dishes");
console.log("cleaning the tables");
console.log("taking orders");
