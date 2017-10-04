
var newTable = document.createElement("table");

var headerRow = document.createElement("tr");
headerRow.id = "Header";
for (var i=0;i<4;i++) {
  var headerData = document.createElement("td");
  headerData.style.border = "1px solid #000";
  headerData.textContent = "Header " + (i + 1);
  headerRow.appendChild(headerData);
}
newTable.appendChild(headerRow);

for (var i=0; i<3; i++) {
  var newRow = document.createElement("tr");
  newRow.id = "row" + i;
  for (var j=0; j<4;j++) {
    var newData = document.createElement("td");
    newData.style.border = "1px solid #000";
    newData.textContent = i + "," + j;
    newData.id = i + "," + j;
    newRow.appendChild(newData);
  }
  newTable.appendChild(newRow);
}

document.getElementById("listContainer").appendChild(newTable);

newTable.style.border = "1px solid #000";

var upButton = document.createElement("button");
upButton.textContent = "Up";

document.body.appendChild(upButton);

var downButton = document.createElement("button");
downButton.textContent = "Down";

document.body.appendChild(downButton);

var leftButton = document.createElement("button");
leftButton.textContent = "Left";

document.body.appendChild(leftButton);

var rightButton = document.createElement("button");
rightButton.textContent = "Right";

document.body.appendChild(rightButton);

var markButton = document.createElement("button");
markButton.textContent = "Mark Cell";

document.body.appendChild(markButton);

var currentCell = newTable;
currentCell = currentCell.children[1];
currentCell = currentCell.children[0];
currentCell.style.border = "3px solid #000";

function upClick(event) {
  var oldCell = currentCell;
  if (oldCell.id == "0,0" || oldCell.id == "0,1" || oldCell.id == "0,2" || oldCell.id == "0,3") {
    // do nothing
  }
  else {
    oldCell.style.border = "1px solid #000";
    if (oldCell.id == "1,0") {
      currentCell = document.getElementById("0,0");
      currentCell.style.border = "3px solid #000";
    }
    if (oldCell.id == "1,1") {
      currentCell = document.getElementById("0,1");
      currentCell.style.border = "3px solid #000";
    }
    if (oldCell.id == "1,2") {
      currentCell = document.getElementById("0,2");
      currentCell.style.border = "3px solid #000";
    }
    if (oldCell.id == "1,3") {
      currentCell = document.getElementById("0,3");
      currentCell.style.border = "3px solid #000";
    }
    if (oldCell.id == "2,0") {
      currentCell = document.getElementById("1,0");
      currentCell.style.border = "3px solid #000";
    }
    if (oldCell.id == "2,1") {
      currentCell = document.getElementById("1,1");
      currentCell.style.border = "3px solid #000";
    }
    if (oldCell.id == "2,2") {
      currentCell = document.getElementById("1,2");
      currentCell.style.border = "3px solid #000";
    }
    if (oldCell.id == "2,3") {
      currentCell = document.getElementById("1,3");
      currentCell.style.border = "3px solid #000";
    }
  }
}
function downClick(event) {
  var oldCell = currentCell;
  if (oldCell.id == "2,0" || oldCell.id == "2,1" || oldCell.id == "2,2" || oldCell.id == "2,3") {
    // do nothing
  }
  else {
    oldCell.style.border = "1px solid #000";
    if (oldCell.id == "1,0") {
      currentCell = document.getElementById("2,0");
      currentCell.style.border = "3px solid #000";
    }
    if (oldCell.id == "1,1") {
      currentCell = document.getElementById("2,1");
      currentCell.style.border = "3px solid #000";
    }
    if (oldCell.id == "1,2") {
      currentCell = document.getElementById("2,2");
      currentCell.style.border = "3px solid #000";
    }
    if (oldCell.id == "1,3") {
      currentCell = document.getElementById("2,3");
      currentCell.style.border = "3px solid #000";
    }
    if (oldCell.id == "0,0") {
      currentCell = document.getElementById("1,0");
      currentCell.style.border = "3px solid #000";
    }
    if (oldCell.id == "0,1") {
      currentCell = document.getElementById("1,1");
      currentCell.style.border = "3px solid #000";
    }
    if (oldCell.id == "0,2") {
      currentCell = document.getElementById("1,2");
      currentCell.style.border = "3px solid #000";
    }
    if (oldCell.id == "0,3") {
      currentCell = document.getElementById("1,3");
      currentCell.style.border = "3px solid #000";
    }
  }
}
function leftClick(event) {
  var oldCell = currentCell;
  if (oldCell.id == "0,0" || oldCell.id == "1,0" || oldCell.id == "2,0") {
    // do nothing
  }
  else {
    oldCell.style.border = "1px solid #000";
    if (oldCell.id == "1,1") {
      currentCell = document.getElementById("1,0");
      currentCell.style.border = "3px solid #000";
    }
    if (oldCell.id == "1,2") {
      currentCell = document.getElementById("1,1");
      currentCell.style.border = "3px solid #000";
    }
    if (oldCell.id == "1,3") {
      currentCell = document.getElementById("1,2");
      currentCell.style.border = "3px solid #000";
    }
    if (oldCell.id == "0,1") {
      currentCell = document.getElementById("0,0");
      currentCell.style.border = "3px solid #000";
    }
    if (oldCell.id == "0,2") {
      currentCell = document.getElementById("0,1");
      currentCell.style.border = "3px solid #000";
    }
    if (oldCell.id == "0,3") {
      currentCell = document.getElementById("0,2");
      currentCell.style.border = "3px solid #000";
    }
    if (oldCell.id == "2,1") {
      currentCell = document.getElementById("2,0");
      currentCell.style.border = "3px solid #000";
    }
    if (oldCell.id == "2,2") {
      currentCell = document.getElementById("2,1");
      currentCell.style.border = "3px solid #000";
    }
    if (oldCell.id == "2,3") {
      currentCell = document.getElementById("2,2");
      currentCell.style.border = "3px solid #000";
    }
  }
}
function rightClick(event) {
  var oldCell = currentCell;
  if (oldCell.id == "0,3" || oldCell.id == "1,3" || oldCell.id == "2,3") {
    // do nothing
  }
  else {
    oldCell.style.border = "1px solid #000";
    if (oldCell.id == "0,0") {
      currentCell = document.getElementById("0,1");
      currentCell.style.border = "3px solid #000";
    }
    if (oldCell.id == "0,1") {
      currentCell = document.getElementById("0,2");
      currentCell.style.border = "3px solid #000";
    }
    if (oldCell.id == "0,2") {
      currentCell = document.getElementById("0,3");
      currentCell.style.border = "3px solid #000";
    }
    if (oldCell.id == "1,0") {
      currentCell = document.getElementById("1,1");
      currentCell.style.border = "3px solid #000";
    }
    if (oldCell.id == "1,1") {
      currentCell = document.getElementById("1,2");
      currentCell.style.border = "3px solid #000";
    }
    if (oldCell.id == "1,2") {
      currentCell = document.getElementById("1,3");
      currentCell.style.border = "3px solid #000";
    }
    if (oldCell.id == "2,0") {
      currentCell = document.getElementById("2,1");
      currentCell.style.border = "3px solid #000";
    }
    if (oldCell.id == "2,1") {
      currentCell = document.getElementById("2,2");
      currentCell.style.border = "3px solid #000";
    }
    if (oldCell.id == "2,2") {
      currentCell = document.getElementById("2,3");
      currentCell.style.border = "3px solid #000";
    }
  }
}

function markCell (event) {
  currentCell.style.backgroundColor = "yellow";

}
upButton.addEventListener("click", upClick);
downButton.addEventListener("click", downClick);
leftButton.addEventListener("click", leftClick);
rightButton.addEventListener("click", rightClick);
markButton.addEventListener("click", markCell);
