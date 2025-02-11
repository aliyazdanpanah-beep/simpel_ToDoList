let Input = document.getElementById("Input");
let ADDB = document.getElementById("ADDB");
let DELB = document.getElementById("DELB");

ADDB.onclick = () => {
  const INPV = Input.value;
  if (INPV == "") {
    let ListItem = document.createElement("li");
    let TaskList = document.querySelector("#tasks ul");
    TaskList.appendChild(ListItem);
    ListItem.textContent = INPV;
  } else {
    alert("something wrong");
  }
};
