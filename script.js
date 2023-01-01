window.onload = function () {
  const formElm = document.querySelector(".needs-validation");
  formElm.addEventListener("submit", (e) => {
    e.preventDefault();

    /// input,select,textrea validation
    const inputEmailElm = document.querySelector("#inputEmail1");
    const inputNameElm = document.querySelector("#inputName1");
    const selectCityElm = document.querySelector("#selectCity");
    const textareaElm = document.querySelector("#textarea1");
    validation(inputEmailElm);
    validation(inputNameElm);
    validation(selectCityElm);
    validation(textareaElm);

    //checkbox validation
    const rulesCheckElm = document.querySelector("#rulesCheck");
    checkboxValidation(rulesCheckElm);
    //radio validation
    const radioElm1 = document.querySelector("#genderRadio1");
    const radioElm2 = document.querySelector("#genderRadio2");
    radioValidation(radioElm1, radioElm2);
  });
};

function validation(element) {
  if (!element.value) {
    isNotValid(element);
  } else {
    isValid(element);
  }
}

function checkboxValidation(element) {
  if (!element.checked) {
    isNotValid(element);
  } else {
    isValid(element);
  }
}

function radioValidation(radioButton1, radioButton2) {
  if (!radioButton1.checked && !radioButton2.checked) {
    radioNotValid(radioButton1, radioButton2);
  } else {
    radioIsValid(radioButton1, radioButton2);
  }
}

function isNotValid(tag) {
  if (tag.classList.contains("is-valid")) {
    tag.classList.remove("is-valid");
  }
  tag.classList.add("is-invalid");

  const div = document.createElement("div");
  div.className = "invalid-feedback";
  div.innerText = "please fill the form and accept term and conditions!";

  tag.parentNode.lastChild.remove();
  tag.parentNode.appendChild(div);
}

function isValid(tag) {
  if (tag.classList.contains("is-invalid")) {
    tag.classList.remove("is-invalid");
  }
  tag.classList.add("is-valid");

  const div = document.createElement("div");
  div.className = "valid-feedback";
  div.innerText = "looks good!";

  tag.parentNode.lastChild.remove();
  tag.parentNode.appendChild(div);
}

function radioNotValid(...radioButtons) {
  for (const button of radioButtons) {
    if (button.classList.contains("is-valid")) {
      button.classList.remove("is-valid");
    }
    button.classList.add("is-invalid");
  }
  const div = document.createElement("div");
  div.className = "invalid-feedback";
  div.innerText = "please choose one of the option!";

  radioButtons[1].parentNode.lastChild.remove();
  radioButtons[1].parentNode.appendChild(div);
}

function radioIsValid(...radioButtons) {
  for (const button of radioButtons) {
    if (button.classList.contains("is-invalid")) {
      button.classList.remove("is-invalid");
    }
    button.classList.add("is-valid");
  }
  const div = document.createElement("div");
  div.className = "valid-feedback";
  div.innerText = "looks good!";

  radioButtons[1].parentNode.lastChild.remove();
  radioButtons[1].parentNode.appendChild(div);
}
