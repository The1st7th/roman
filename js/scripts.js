//business end logic
var numbers = [1000,900,500,400,100,50,40,10,9,5,4,1];
var romanNumerals= ["M","CM","D","CD","C","L","XL","X","IX","V","IV","I"];
// var roman =[];



function dectoro (number){ //1001
  var roman=[];
  var check;
 for (var i =0; i<numbers.length;i++){
   while(number>=numbers[i]) {
     roman.push(romanNumerals[i]);
     number-=numbers[i];
   }
 }
 console.log(roman);
 return roman.join(""); //MI
 }






//    var counter = 0;
//    counter = Math.floor(number/numbers[i]);
//    number = number % numbers[i];
//    var check = 9 * parseInt(numbers[i+2]);
//    var test = true;
//
//    if (counter < 4){
//      console.log(counter);
//      for (var j = 0; j < counter; j++){
//        console.log("initial");
//        roman.push(romanNumerals[i]);
//      }
//    }
//
//     if(number >= check) {
//       console.log('hello 9');
//       roman.push(romanNumerals[i+2]);
//       roman.push(romanNumerals[i]);
//       i = i++;
//       test = false
//     }
//     if ((counter == 4) && (test == true)) {//&& (romanNumerals[i-1] == "D")) || ((counter == 4 ) && (romanNumerals[i-1] == "L")) ){
//      console.log("the 4");
//     console.log(romanNumerals[i]);
//     roman.push(romanNumerals[i]);
//     roman.push(romanNumerals[i-1]);
//
//
//   }
//
//
// }



//useinterface logic

$(document).ready(function() {
  $("#button1").click(function() {
    var userInput = parseInt($("#decimal").val());
    var result = dectoro(userInput);
    $("#results").text(result);
  });
});
