//  1

 // Here we ask the user if they eat fish, and store the result (true/false) in a variable.
 var eatFish= prompt("Do you eat fish?"); 

 // If the user eats fish (eatFish === true) doument.write, "Fish is rich in B12".
            if (eatFish=== "yes") {
                document.write("Fish is rich in B12");
            } 
            
            else if (eatFish !==  "yes"){
                document.write("You must be a meateater.")
            }

            else {
                document.write("You must be a meatatrian"); 
            }; 
 // If the above condition isn't met (eatFish !== true), doument.write, "You must be a meateater".
 

 // 2
 // Ask the user what year they were born, and store their response to a variable.
 var birthYear= prompt("What year were you born?");
 
        
 // If the user was born before 1997, alert "You are in Generation Z"
 if (birthYear < 1997){
     alert("You are in Generation Z.")
 }
            
 // Else if the user was born after 1997, alert "You are a millennial!"
 else if(birthYear > 1997){
     alert("You are a millinial.")
 }
 
 // If neither of the previous conditions was true (birthYear === 1995) we alert "You inched by!"
 else if (birthYear === 1995){
     alert("You inched by!")
 }


// 3//

 // Create an array called  animals.
 var animals= [
     "bird", 
     "cat", 
     "dog", 
     "hamster", 
     "turtle", 
     "fish"];  
 // Log the length of the  animals array to the document
 
document.write(animals.length);
 // Log an animal in the cat.
 console.log(animals [1]);

 // Log the animal dog.
 console.log(animals [2]);

 // Log the animal bird.
 console.log(animals [0]);

 // Log the animal[13]. //what result do you get
 console.log(animals[13]);
 //Undefined

 // Add an new animal to the [2] position of the array with out changing the array
animals [2]="chimpanzee";
 console.log(animals);

//4//

// Created an array named myBands.
 var myBands = [
     "the rolling stones",
     "khruangbin",
     "polo & pan"
 ];

 // Created a prompt to get the user's favorite band.
var userGuess = prompt("What is your favorite band?");


 // Converts the user's answer to lowercase.
 var userGuessLower = userGuess.toLowerCase();
 // Now we check the myBands array to see if it contains the user's answer.
 // If the user's band is not in the array...
//  ??

// if (myBands.indexOf) != 
 // If it is in the array...

 if (myBands.indexOf(userGuessLower) === -1) {
    alert("Nah! They're pretty lame...");
}
// // If it is in the array...
else {
    alert("OMG! I love them too!");
};

 //You can use a for loop for this?


//5//

// song-object
// // Create a constructor function called Song. Song should take in two arguments, title and artist, which should both be added 
// as properties when the Song constructor function is used. The Song function should also have a method called play on 
// its prototype. When called, the play function should console.log the name of that specific song preceded by the word 'Playing:'.
// // function should also have a method called play on its prototype. When called, the play function should console.log the name 
// of that specific song preceded by the word 'Playing:'.




function Song (title, artist) {
    this.title = title;
    this.artist = artist;
}
Song.prototype.play = function (){
    console.log ("Playing" + this.title);
  };
  
var song1 = new Song("Small Worlds", "Mac Miller");
song1.play();
var song2 = new Song("Scott Street", "Phoebe Bridgers");
song2.play();
  
//This is not working ^^ :( 

/*6//
----------------------------------------
CHALLENGE
----------------------------------------

Write function named sum that will take an array of numbers and return the sum of them.

// // Example: if you pass it [1,2,3] then it should return 6 (which is 1 + 2 + 3)

NOTE: always look at the test results to see further details about what the test is expecting.
For example, the tests require that to complete this challenge, your function must return
0 if the input is empty. Please see the README file for an explanation of how to expand the test
results on the index page in the browser.
*/









//7/*
// ----------------------------------------
// CHALLENGE
// ----------------------------------------

// Write function named doubleLetters that will take a string and double every letter in the string

// Example: if you pass it "abc" then it should return "aabbcc"
// */




/*8//
----------------------------------------
CHALLENGE
----------------------------------------

Write function named doubleNumbers that will take an array of numbers and return an array with those numbers doubled

// Example: if you pass it [1,2,3] then it should return [2,4,6]
*/
