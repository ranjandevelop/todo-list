// variables

const alert = document.querySelector(".status");
const form = document.querySelector(".form-control");
const groceryItem = document.getElementById("grocery-item");
const submitBtn = document.querySelector(".submit-btn");
const list = document.querySelector(".grocery-list");
const groceryListItems = document.querySelector(".grocery-list-items");

// Event Listener to add items
form.addEventListener("submit", addItems);

// Add items to the list
function addItems(e) {
  e.preventDefault();
  const value = groceryItem.value;
  if (value !== "" && value.length <= 13) {
    list.style.visibility = "visible";
    groceryListItems.innerHTML += `
            <li>
                <h4>${value}</h4>
                <div class="btn-container">
                    <button id ="del" class="bi bi-trash"></button>
                </div>
            </li>
        `;
    // display the customised alert
    displayAlert("value succesfully added", "green");
    setDefaults();
  } else if (value.length > 13) {
    displayAlert("enter only 13 chracter word", "red");
  } else if (value === "") {
    displayAlert("Please enter value", "red");
  }
}

// display alert
function displayAlert(text, action) {
  alert.style.visibility = "visible";
  alert.textContent = text;
  alert.classList.add(`status-${action}`);

  // Remove alert
  setTimeout(function () {
    alert.textContent = "";
    alert.classList.remove(`status-${action}`);
  }, 1000);
}

// Count the character to check
function countChar() {
  document.querySelector(".count").textContent = groceryItem.value.length;

  if (groceryItem.value.length > 13) {
    displayAlert("Enter only 13 chracter word", "red");

    // change color to red
    document.querySelector(".character").style.color = "red";
  } else if (groceryItem.value.length <= 13) {
    document.querySelector(".character").style.color = "green";
  }
}

// Event elistener to check count on input
groceryItem.addEventListener("input", countChar);

// Set to defaults
function setDefaults() {
  groceryItem.value = "";
  document.querySelector(".count").textContent = 0;
  document.querySelector(".character").style.color = "black";
}

// delete the items
function deleteItem(e) {
  if (e.target.id === "del") {
    e.target.parentElement.parentElement.remove();
    displayAlert("item succesfully removed", "red");
  }
}

// Event Lsiteners to delete the items
groceryListItems.addEventListener("click", deleteItem);
