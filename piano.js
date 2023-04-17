var numberOfBigButton = document.querySelectorAll(".big").length;

for(var i = 0; i < numberOfBigButton; i ++)
{
    document.querySelectorAll(".big")[i].addEventListener("click",function()
    {
        var bigButtonInnerHTML = this.lastElementChild.innerHTML;
        makeBigSound(bigButtonInnerHTML);
    });
}
document.addEventListener("keydown",function(event)
{
    makeBigSound(event.key);
});

function makeBigSound(key)
{
    switch (key) {
        case "q":
            case "Q":
            var one = new Audio("sound/c3.mp3");
            one.play();
            break;
        case "w":
            case "W":
            var two = new Audio("sound/d3.mp3");
            two.play();
            break;
        case "e":
            case "E":
            var three = new Audio("sound/e3.mp3");
            three.play();
            break;
        case "r":
            case "R":
            var four = new Audio("sound/f3.mp3");
            four.play();
            break;
        case "t":
            case "T":
            var five = new Audio("sound/g3.mp3");
            five.play();
            break;
        case "y":
            case "Y":
            var six = new Audio("sound/a3.mp3");
            six.play();
            break;
        case "u":
            case "U":
            var seven = new Audio("sound/b3.mp3");
            seven.play();
            break;
        case "i":
            case "I":
            var eight = new Audio("sound/c4.mp3");
            eight.play();
            break;
        case "o":
            case "O":
            var nine = new Audio("sound/d4.mp3");
            nine.play();
            break;
        case "p":
            case "P":
            var ten = new Audio("sound/e4.mp3");
            ten.play();
            break;
        default: console.log(bigButtonInnerHTML);
            break;
    }
}