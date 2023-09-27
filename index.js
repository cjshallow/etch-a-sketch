const container = document.getElementById('container');
let rows = document.getElementsByClassName('gridRows');


defaultGrid();

function defaultGrid(){
    createRows(16);
    createCells(16);
    onmousedown = () => {
        hoverColor();
    }
    onmouseup = () => {
        stopHoverColor();
    }
};



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

function fillCell() {
    this.classList.add('filled');
}


function hoverColor() {
  const cellColor = document.querySelectorAll(".cell");
  cellColor.forEach((cell) => {
      cell.addEventListener('mouseover', fillCell)
      });
    }

function stopHoverColor() {
    const cellColor = document.querySelectorAll(".cell");
    cellColor.forEach((cell) => {
        cell.removeEventListener('mouseover', fillCell)
        });
      }





function changeGrid(){
  rn = window.prompt("Input number of rows", 1);
  cn = window.prompt("Input number of Columns", 1);

  if (cn > 100 || cn < 10 || rn > 100 || rn < 10) {
    alert("Please choose a number between 10 and 100");
  } else {
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
  onmousedown = () => {
    hoverColor();
  }
  onmouseup = () => {
    stopHoverColor();
  }

}




