'use strict';

// let validatorInput = document.querySelector('#validation-input');

// let totalLenght = validatorInput.getAttribute('data-length');
// let intTotallenght = parseInt(totalLenght, 10);

// validatorInput.oninput = function () {
//     if (validatorInput.value.length === 0) {
//     validatorInput.classList.remove('valid');
//     validatorInput.classList.remove('invalid');
//   }
//   if (validatorInput.value.length === intTotallenght) {
//     validatorInput.classList.remove('invalid');
//     validatorInput.classList.add('valid');
//   }
//   if (validatorInput.value.length !== intTotallenght && validatorInput.value.length !== 0) {
//     validatorInput.classList.add('invalid');
//   }
// };

const validationInput = document.querySelector('input#validation-input');

const validationInputAttribute = validationInput.getAttribute('data-length');
// console.log(Number(validationInputAttribute));

const onInputChange = (event) => {
    const eventValue = event.currentTarget.value;

    if (eventValue.length === Number(validationInputAttribute)) {
        validationInput.classList.add('valid');
        validationInput.classList.remove('invalid');
    } else {
        validationInput.classList.add('invalid');
        validationInput.classList.remove('valid');
    }


}

validationInput.addEventListener('change', onInputChange);