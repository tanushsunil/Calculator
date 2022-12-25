let counter = 1;
let compute_count = 0;

function display_op(value) {
  let current = document.getElementById("current-h1");
  if (current.innerText == "0") {
    current.innerText = "";
  }
  current.innerText = current.innerText + value;
  counter = 0;
}

function operator(value) {
  if (counter == 0) {
    let previous_op = document.getElementById("previous-op");
    let current = document.getElementById("current-h1");
    previous_op.innerText = previous_op.innerText + current.innerText + value;
    current.innerText = "0";
    counter = 1;
  }
}

let current = document.getElementById("current-h1");
if (current.innerText == "") {
  current.innerText = "0";
}

function compute() {
  let previous_op = document.getElementById("previous-op");
  let current = document.getElementById("current-h1");
  previous_op.innerText = previous_op.innerText + current.innerText;
  let answer = eval(previous_op.innerText);
  current.innerText = answer;
  compute_count = 1;
}

function AC() {
  document.getElementById("previous-op").innerText = "";
  document.getElementById("current-h1").innerText = "";
}

function Clear() {
  let previous_op = document.getElementById("previous-op");
  let current = document.getElementById("current-h1");
  if (counter == 1) {
  } else {
    if (compute_count == 1) {
      previous_op.innerText = "";
      compute_count = 0;
    } else if (current.innerText == "") {
      current.innerText = previous_op.innerText;
      previous_op.innerText = "";
    } else if (current.innerText=="0") {
      current.innerText = previous_op.innerText;
      previous_op.innerText = "";
    } else {
      current.innerText = current.innerText.substring(
        0,
        current.innerText.length - 1
      );
    }
  }
}
