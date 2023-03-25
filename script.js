function clearName() {
  if (
    document.getElementById("nameField").value == "First and Last Name"
  ) {
    document.getElementById("nameField").value = "";
  }
}

function resetName() {
  if (document.getElementById("nameField").value == "") {
    document.getElementById("nameField").value = "First and Last Name";
  }
}

function clearPhone() {
  if (
    document.getElementById("phoneField").value == "example: 212-123-1234"
  ) {
    document.getElementById("phoneField").value = "";
  }
}

function resetPhone() {
  if (
    document.getElementById("phoneField").value == ""
  ) {
    document.getElementById("phoneField").value = "example: 212-123-1234";
  }
}

function clearWeb() {
  if (
    document.getElementById("webField").value == "Web Design"
  ) {
    document.getElementById("webField").value = "";
  }
}

function resetWeb() {
  if (
    document.getElementById("webField").value == ""
  ) {
    document.getElementById("webField").value = "Web Design";
  }
}

function alertThanks() {
  alert('Thank you for the info');
}
