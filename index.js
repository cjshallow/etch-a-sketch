// https://www.w3resource.com/javascript-exercises/javascript-dom-exercise-7.php//

//for end of exercise, button popup// 

//

// Function that creates 16 rows, uses a for loop, and appends
// the rows to the container. "r" would be the number of rows. 
// but first, declare the container? via DOM Manip Lesson


// declarations for everything outside of the functions, so that 
// they work in multiple functions
const container = document.getElementById('container');
let rows = document.getElementsByClassName('gridRows');

defaultGrid();

function defaultGrid(){
    createRows(16);
    createCells(16);
}


function createRows(rn) {
    for (i = 0; i < rn; i++ ){
        let row = document.createElement('div');
        container.appendChild(row).className = "gridRows";
    }
}

// function that creates cells to put onto the rows, creating the grid.
// two loops. nested one creates the cell looped until "cn" amount of 
// times, and then the larger loop calls for the cell-creation-loop to 
// loop until it's reached the rows number. always making a square grid.
// end of function appends the cell divs to the row div, which is the 
// child of the main container

function createCells(cn) {
    for (a = 0; a < rows.length; a++) {
        for (b = 0; b < cn; b++) {
            let newCell = document.createElement('div');
            rows[b].appendChild(newCell).className = "cell";
        }
    }
}


//ran into issue trying to append 'newCell' with quotes...but it isn't a
// string! it's a node. no quotes. 



//---------------------------------------------------------------------//


// add event listener that changes the color of a cell on mouseover, and
// stays that way & a function that changes the color to black


const cellColor = document.querySelectorAll(".cell");

cellColor.forEach((cell) => {
    cell.addEventListener('mouseover', () => {
        cell.style.background = "black";
    });
});