         // Chapter 1 (Alerts) ///

// var names = prompt("Enter Your First Name");
// alert("ABDUL")

// var names = prompt("Enter Your Last Name");
// alert("RAFFAY")


// var num = prompt("Enter Your Phone Number");
// alert("03232120288")



      // Chapter 2 (Variables for string) //

//  var myName = "Raffy";
//  alert("Raffay")
      



// var a = ("abc");
// var b = (2);
// alert   (a+b);


// var a = (4);
// var b = (2);
// var c = a-b;
// alert (c);


  
           // Chapter 4 (Variable names Legal and Illegal) //

                   // legal //
// var $Abc = 12;
// var names = ("Raffay");
// alert($Abc+names)

 
                      // Illegal //
// var name = ("4");
// var Names = ("Raffay");
// alert(Abc+names)



                 // Chapter 5 (Math Expression //

// var num = 20 % 6;
// alert(20 % 6);



                 // Chapter 6 (Math Expression II) //


             // Y value 49 //
// var y = 50;
// var z = --y;
// alert(z)


            // X Value 51 //
// var x = 50;
// var y = x++;
// alert(x)


// var num = 1;
// var newNum = num++;
// alert(newNum)
   


                  // Chapter 7 (Math Expression III) //
                 
                               // Num ans 33 // 
// var num = 1 + (4 * 8); 
// alert(num);   


                              // numValue ans 42 //
// var numValue = (5 + 1) * 7;
// alert(numValue)

                             // num1 ans 43 //
// var num1 = 4 + 4 * 6 + 15;
// alert(num1)



                  // Chapter 8 (Concatenating Text Strings) //


                     // a ans 43 //
// var a = "1" + "9"; 
// alert(a);                



// var names = ("Hello," + "World");
// alert(names)


                       // num ans 207 //
// var num = ("hello");
// alert("20" + 7);



                              // Chapter 9 (Prompts) //



// var myNAme = prompt("Enter Your Name"); 
// var names = ("Abdul RaffaY");
// alert(myNAme + names);

   
// var country = prompt("Enter Your Country"); 
// var  countryNames = ("Karachi");
// alert(country + countryNames);



                        // Chapter 10 (if statments) //


 
// var a = prompt("Enter city Name");
// if (a = "karachi") {
// alert("This is Correct");
//  }
             

 
// var a = prompt("Enter city Name");
// if (a === "karachi") {
// alert("This is Correct");
//  }
// 

                  // Chapter 11 (Comparison Operators) //

// var ticketNumber = prompt ("Enter your ticket Nunber");
//  if (yourTicketNumber !== 487208) {
//        alert("Better luck next time.");
//        }
      


             // Chapter 12 (if...else and else if statements) //


// var  perc = prompt ("Enter Your Percentage");
// if (perc >= 80 && perc <= 100){
//       alert("A+")
// }
// else if (perc >= 70 && perc <= 80){
//       alert("A")
// }
// else if (perc >= 60 && perc <= 70){
//       alert("B")
// }
// else if (perc >= 50 && perc <= 60){
//       alert("C")
// }
// else if (perc >= 33 && perc <= 50){
//       alert("D")
// }
// else if (perc >= 0 && perc <= 33){
//       alert("Fail")
// }else{
//       alert("This is Wrong")
// }





                        // Chapter 15 (Array I) //


//  var name1 = "Raffay";
//  var name2 = "Zuhad";  
//  var name3 = "Huamzi";  
//  var name3 = "Waleed";
 
//  var names = ["Raffay","Zuhad","Humaiz", "Waleed"];
// alert(names[2]);




                          // Chapter 16 (Array III) //


// var arr = ["karachi", "lahore", "Islamabad", "faislabad", "Pindi"];
// console.log(arr)
// console.log(arr.shift("karachi"));                        



                       // Chapter 17 - 20 (for Loops) //

var inputCity = prompt("Enter City Name");
var names = ["karachi","lahore", "islamabad", "peshawar"];
for(var i = 0; i < names.length; i++){
      if(names[i] == inputCity){ 
      alert("found City")
}else {
      alert("Not found");
}
      console.log();
}