var alertButton = document.querySelector("#alert-button");
alertButton.addEventListener("click", showAlert);
function showAlert() {
  console.log("Showing alert-modal")
  document.querySelector("alert-modal").visible = true;
}