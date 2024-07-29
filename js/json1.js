let selectedOption = "";

function toggleDropdown() {
  document.getElementById("dropdownContent").classList.toggle("show");
}

function selectOption(value, text) {
  selectedOption = value;
  document.getElementById("dropdownButton").textContent = text;
  document.getElementById("dropdownContent").classList.remove("show");
}

function showLanguageAlert(message) {
  alert(message);
  document.getElementById("dropdownContent").classList.remove("show");
}

window.onclick = function (event) {
  if (!event.target.matches("#dropdownButton")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

function preventFormSubmit(event) {
  event.preventDefault();
}

function submitForm() {
  const textInput = document.getElementById("textInput").value.trim();

  if (textInput === "" || selectedOption === "") {
    document.getElementById("textInput").style.borderColor =
      textInput === "" ? "red" : "#ccc";
    document.getElementById("dropdownButton").style.borderColor =
      selectedOption === "" ? "red" : "#ccc";

    setTimeout(() => {
      document.getElementById("textInput").style.borderColor = "#ccc";
      document.getElementById("dropdownButton").style.borderColor = "#ccc";
    }, 2500);

    return;
  }

  console.log(`Текст: ${textInput}, Выбранный язык: ${selectedOption}`);

  document.getElementById("textInput").value = "";
  selectedOption = "";
  document.getElementById("dropdownButton").textContent = "Выберите опцию";

  document.getElementById("textInput").style.borderColor = "#ccc";
  document.getElementById("dropdownButton").style.borderColor = "#ccc";
}
