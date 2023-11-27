//console log just to test that your JS is linked properly
console.log("working?")

//create a variable for the number of buildings in the city and start it at zero
var buildNum=0
//send a message to the page to inform the user of how many buildings there are in their city. This will happen right away when the page loads
document.getElementById('city').innerHTML="<p>You currently have "+buildNum+" buildings in your shitty- I mean city!!<p>";
//Functions -- 
//Think of this as a group of instructions that will always run together
//Create a function that will run when the first button is clicked
//This gets trigger by the submit button in the form. This trigger is known as an EVENT! (Button click event)
//It will:
    //-- Print a message to teh console
    //--Add one to the variable that is tracking the number of buildings
    //---Print a message with the number of buildings
    //---Place an image graphic into the other div
function buildOne(){
    console.log("do da shit");
buildNum++


    document.getElementById('city').innerHTML="<p>You currently have "+buildNum+" buildings in your shitty- I mean city!!<p>";

    document.getElementById('cityGraphic').innerHTML+="<img src='images/BuildingBlock1.png'>"

}
function buildTwo(){
    console.log("do da shit");
buildNum++


    document.getElementById('city').innerHTML="<p>You currently have "+buildNum+" buildings in your shitty- I mean city!!<p>";

    document.getElementById('cityGraphic').innerHTML+="<img src='images/BuildingBlock2.png'>"

}
function buildThree(){
    console.log("do da shit");
buildNum++


    document.getElementById('city').innerHTML="<p>You currently have "+buildNum+" buildings in your shitty- I mean city!!<p>";

    document.getElementById('cityGraphic').innerHTML+="<img src='images/BuildingBlock3.png'>"

}
function DESTROY(){
    console.log("do da shit");
buildNum=0


    document.getElementById('city').innerHTML="<p>You currently have "+buildNum+" buildings in your shitty- I mean city!!<p>";

    document.getElementById('cityGraphic').innerHTML="<p>you monster...<p>"

}

//Create a function for the second button that prints a message with the number of buildings and the graphic for the second building


//Create a function for the third button that prints a message with the number of buildings and the graphic for the second building

