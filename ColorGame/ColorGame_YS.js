// alert("CONNECTED!");
var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var h1 = document.querySelector("h1");
var modeButtons = document.querySelectorAll(".mode");



for (var i = 0; i < modeButtons.length; i++){
    modeButtons[i].addEventListener("click", function(){
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        this.classList.add("selected");

        this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
        // ternary operator
        // if (this.textContent === "Easy"){
        //     numSquares = 3;
        // } else {
        //     numSquare = 6;
        // }
        reset();
        //figure out how many squares to show
        //pick new colors
        //pick a new pickedColor
        //update page to reflect changes

    })
}

function reset(){
    // generate all new colors
    colors = generateRandomColors(numSquares);
    // pick a new random color from array
    pickedColor = pickColor();
    // change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";

    // to get the correct disappear when play again clicked. 
    messageDisplay.textContent = "";
    // change colors of squares
    for (var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    // the h1 color in css was overwritten by javascrip 
    h1.style.backgroundColor = "steelblue"; 
}

// // Easy button event listner
// easyBtn.addEventListener("click", function(){
//     //alert("Easy Button works!")
//     hardBtn.classList.remove("selected");
//     easyBtn.classList.add("selected");
//     numSquares = 3;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for(var i = 0; i < squares.length; i++){
//         if(colors[i]){ //meaning if there is a next color[i]
//             squares[i].style.backgroundColor = colors[i];
//         } else{
//             squares[i].style.display = "none";
//         } 
//     }
// });

// //Hard button event listner
// hardBtn.addEventListener("click", function(){
//     //alert("Hard Button works!")
//     easyBtn.classList.remove("selected");
//     hardBtn.classList.add("selected");
//     numSquares = 6
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for(var i = 0; i < squares.length; i++){
//             squares[i].style.backgroundColor = colors[i];
//             squares[i].style.display = "block";
//         }
//     }
// );


resetButton.addEventListener("click", function(){
    // generate all new colors
    colors = generateRandomColors(numSquares);
    // pick a new random color from array
    pickedColor = pickColor();
    // change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    this.textContent = "New Colors";

    // to get the correct disappear when play again clicked. 
    messageDisplay.textContent = "";
    // change colors of squares
    for (var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    // the h1 color in css was overwritten by javascrip 
    h1.style.backgroundColor = "steelblue"; 
});


colorDisplay.textContent = pickedColor;


for (var i = 0; i < squares.length; i++ ){
    // add initial colors to squares
    squares[i].style.backgroundColor = colors[i]
    // use style.backgroundColor, instead of style.background b/c ..Color is for all browsers.
    
    // add click listners to squares
    squares[i].addEventListener("click", function(){
    //alert("clicked a square")

    // grab color of clicked square 
        var clickedColor = this.style.backgroundColor;
        // compare color to pickedcolor
        console.log(clickedColor, pickedColor);
        if (clickedColor == pickedColor){
            messageDisplay.textContent = "Correct!";
            resetButton.textContent = "Play Again?";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
        }else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    });
}

function changeColors(color){
    //loop through all squares
    for(var i = 0; i < colors.length; i++){
        //change each color to match the given color
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    //make an array
    var arr = []
    //add num random colors to array
    for (var i = 0; i < num; i++){
        arr.push(randomColor());
        
    }
    //return that array
    return arr;
}

function randomColor(){
    //pick a "red" from 0 - 255
    var r = Math.floor(Math.random() * 256)
    //pick a "green" from 0 - 255
    var g = Math.floor(Math.random() * 256)
    //pick a "blue" from 0 - 255
    var b = Math.floor(Math.random() * 256)

    return "rgb(" + r + ", " + g + ", " + b + ")";
}

//1: add six squares
//2. connect the picked square to the text
//3. add event handler: 1) when wrong, change color; 2) text display; 3) when correct, change all square color
//4. pick a random color
//5. generate six random colors
//6. reset the game with the button
//7. add the banner and make the event listener "reset" and switch between "Play Again" and "New Color"
//8. Two buttons "Easy" and "Hard". A problem: when on easy mode and hit "play again", it would generate six squares but only three shown 
//9. after the logics works, focus on the styling: h1 -> buttons -> square curve