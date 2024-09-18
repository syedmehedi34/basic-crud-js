document.getElementById("input-btn").addEventListener("click", function () {
  // step - 1 => get the value from the box
  const inputField = document.getElementById("input-field");
  const newInput = inputField.value;

  // set the value to a new tag
  const listContainer = document.getElementById("list-container");
  const newList = document.createElement("li");
  newList.innerText = newInput;
  //   newList.id = `item-${i}`;
  // listContainer.appendChild(newList);
  if (newList.innerText == "") {
    return;
  } else {
    listContainer.appendChild(newList);
  }

  //clear the input field
  inputField.value = "";
});

// ! need to check here

document.addEventListener("DOMContentLoaded", function () {
  const listContainer = document.getElementById("list-container");

  listContainer.addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
      event.target.setAttribute("hidden", true);
    }
  });
});
