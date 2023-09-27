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

function createCells(cn) {
    for (a = 0; a < rows.length; a++) {
        for (b = 0; b < cn; b++) {
            let newCell = document.createElement('div');
            rows[b].appendChild(newCell).className = "cell";
        }
    }
}

const cellColor = document.querySelectorAll(".cell");

cellColor.forEach((cell) => {
    cell.addEventListener('mouseover', () => {
        cell.style.background = "black";
    });
});


function changeGrid(){
  rn = window.prompt("Input number of rows", 1);
  cn = window.prompt("Input number of Columns", 1);


  container.innerHTML = '';
  
  for (i = 0; i < parseInt(rn, 10); i++){
    let row = document.createElement('div');
    container.appendChild(row).className = "gridRows";
  }
  for (a = 0; a < rows.length; a++) {
    for (b = 0; b < cn; b++) {
        let newCell = document.createElement('div');
        rows[b].appendChild(newCell).className = "cell";
  }
}
}


//change the cell size when new grid is made to fit into same pixels of 
//container//




