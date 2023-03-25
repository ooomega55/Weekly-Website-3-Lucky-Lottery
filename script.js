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
    document.getElementById("phoneField").value == "Example: 999-999-9999"
  ) {
    document.getElementById("phoneField").value = "";
  }
}

function resetPhone() {
  if (
    document.getElementById("phoneField").value == ""
  ) {
    document.getElementById("phoneField").value = "Example: 999-999-9999";
  }
}

function clearWeb() {
  if (
    document.getElementById("webField").value == "ethanmarioman@wahoo.com"
  ) {
    document.getElementById("webField").value = "";
  }
}

function resetWeb() {
  if (
    document.getElementById("webField").value == ""
  ) {
    document.getElementById("webField").value = "ethanmarioman@wahoo.com";
  }
}

function alertSignUp() {
  alert('Thank you for the info');
}
