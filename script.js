// Welcome to Kayne and Kim MadLibs!
// This game allows you to plug in certain parts of speech to a story depending on what the user types in.

//Directions: Create an input field and button for each part of speach in the story
//The first blank in this story is already completed for you. The value of what the user types in will be plugged into the story below. Try it out! Then use it as a guide when moving through this project 

var a;

$(".btn1").click(function(){
   a = $(".condition").val(); 
    console.log(a);
  $(".conditionVal").html(a);
});
$(".btn2").click(function(){
    a = $(".adjective1").val();
    console.log(a);
    $(".adjective1Val").html(a);
});
$(".btn3").click(function(){
    a = $(".noun1").val();
    console.log(a);
    $(".noun1Val").html(a);
});
$(".btn4").click(function(){
    a = $(".badSit").val();
    console.log(a);
    $(".badSitVal").html(a);
});
$(".btn5").click(function(){
    a = $(".verb1").val();
    console.log(a);
    $(".verb1Val").html(a);
});
$(".btn6").click(function(){
    a = $(".verb2").val();
    console.log(a);
    $(".verb2Val").html(a);
});$(".btn7").click(function(){
    a = $(".place").val();
    console.log(a);
    $(".placeVal").html(a);
});
