const showInputError = (formElement, inputElement, settings) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  const lineElement = inputElement.nextElementSibling;

  inputElement.classList.add(settings.inputErrorClass, "error");
  lineElement.classList.add("error");

  errorElement.textContent = inputElement.validationMessage;
};

const hideInputError = (formElement, inputElement, settings) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  const lineElement = inputElement.nextElementSibling;

  inputElement.classList.remove(settings.inputErrorClass, "error");
  lineElement.classList.remove("error");

  errorElement.textContent = "";
};

const checkInputValidity = (formElement, inputElement, settings) => {

  inputElement.setCustomValidity("");

  if (inputElement.type === "text") {
    if (inputElement.validity.valueMissing) {
    inputElement.setCustomValidity("Por favor, rellena este campo.");
  } else if (inputElement.validity.tooShort){
    inputElement.setCustomValidity("El texto debe tener al menos dos caracteres.");
  } else if (inputElement.validity.tooLong) {
    inputElement.setCustomValidity("El texto ha excedido el numero de caracteres.");
  }
  }

  if (inputElement.type === "url" && inputElement.validity.typeMismatch) {
    inputElement.setCustomValidity("Por favor, introduce una dirección web válida.");
  }

  if (!inputElement.validity.valid){
    showInputError(formElement, inputElement, settings);
  } else {
    hideInputError(formElement, inputElement,settings);
  }

};

const setEventListeners = (formElement, settings) => {
  const inputList = Array.from(
    formElement.querySelectorAll(settings.inputSelector));
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      inputElement.setCustomValidity("");
      checkInputValidity(formElement, inputElement, settings);
      toggleButtonState(inputList, formElement.querySelector(settings.submitButtonSelector), settings);
    });
  });
};

const toggleButtonState = (inputList, buttonElement, settings) => {
  const hasInvalidInput = inputList.some(inputElement => !inputElement.validity.valid);
  if (hasInvalidInput) {
    buttonElement.classList.add(settings.inactiveButtonClass);
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove(settings.inactiveButtonClass);
    buttonElement.disabled = false;
  }
};

function enableValidation (settings){
  const formList = Array.from(document.querySelectorAll(settings.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });

    setEventListeners(formElement, settings);
    });
};


enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__form-input",
  submitButtonSelector: ".popup__form-btn",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__form-input-error",
  errorClass: "popup__error_visible"
});