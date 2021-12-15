
// FIZZBUZZ!
// Write a function that checks each number from 1 to 25 and prints "Fizz" for each number that is evenly divisible by 3, 
// "Buzz" for each number that is evenly divisible by 5, and "FizzBuzz" for each 
// number that is evenly divisible by both 3 and 5.


// var x = 1 % 5
// console.log(x)
function fizzBuzz(){
    for(var i = 0; i < 26; i++){
        if(i % 3 === 0){
            console.log(`Fizz ${i}`)
        }
        if(i % 5 === 0){
            console.log(`Buzz ${i}`)
        }
        if(i % 3 === 0 && i % 5 === 0){
            console.log(`FizzBuzz ${i}`)
        }
    }
}
fizzBuzz()





















function fizzBuzzA(){
     var output;
     for (var i = 1; i <= 25; i++){
         output = "";
         if ( i % 3 === 0){
             output += "Fizz"
         }
         if ( i % 5 === 0){
            output += "Buzz"
        }
         if (output !== ""){
             console.log(output + " " + i);
         }
     }
 }
    
    
    // TEST
     fizzBuzzA();