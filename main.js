console.log("Hello World!");
function removeSomeButtons() {
  // Select all elements with the 'toRemove' class
  const elements = document.querySelectorAll(".toRemove");

  // Loop through each element and remove it from the DOM
  elements.forEach(element => {
    element.remove();
  });
}
function openPopup() {
  document.getElementById("popup").style.display = "flex";
  
}

// Function to close the popup
function closePopup() {
  document.getElementById("popup").style.display = "none";
}

// Event listeners for popup actions
document.querySelector("#openPopupButton").addEventListener("click", openPopup);
document.querySelector("#closePopupButton").addEventListener("click", closePopup);
document.querySelector("#remover").addEventListener("click", removeSomeButtons);
