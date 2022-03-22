// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads and is where you should call your functions.
$(document).ready(function(){
    const $display = $('#display');

    // Multiple TODOs: Call your apply function(s) here
    applyFilterNoBackground(reddify);
    applyFilterNoBackground(decreaseBlue);
    applyFilterNoBackground(increaseGreenByBlue);



    render($display, image);
});

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2 & 4: Create the applyFilter function here
function applyFilter(filterFunction){
for(var a = 0; a < image.length; a++){
    for(var b = 0; b < image[a].length; b++){
        var rgbString = image[a][b];
        var rgbNumbers = rgbStringToArray(rgbString);
        console.log(rgbNumbers);
        filterFunction(rgbNumbers);
        rgbString = rgbArrayToString(rgbNumbers);
        image[a][b] = rgbString;
    }
}
}

// TODO 7: Create the applyFilterNoBackground function
function applyFilterNoBackground(filterFunction){
    for(var a = 0; a < image.length; a++){
        for(var b = 0; b < image[a].length; b++){
            var rgbString = image[a][b];
            var rgbNumbers = rgbStringToArray(rgbString);
            console.log(rgbNumbers);
            if (rgbNumbers[BLUE] === 150 && rgbNumbers[RED] === 150){
            } else {
                filterFunction(rgbNumbers);
                rgbString = rgbArrayToString(rgbNumbers);
                image[a][b] = rgbString;
            }
        }
    }
    }
    

// TODO 5: Create the keepInBounds function
function keepInBounds(color){
    color = Math.min(color, 255);
    color = Math.max(color, 0);
    return color
}

// TODO 3: Create reddify function
function reddify(angry){
    angry[RED] = 200;
}


// TODO 6: Create more filter functions
function decreaseBlue(pixelArray){
   return keepInBounds(pixelArray[BLUE] -= 50);
}
function increaseGreenByBlue(pixArray){
    return keepInBounds(pixArray[GREEN] + pixArray[BLUE]);
}


// CHALLENGE code goes below here
