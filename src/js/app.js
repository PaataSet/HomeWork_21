console.log("HomeWork_21"); /*
/*
 1. არსებულ ფორმში დაამატეთ 2 ველი personal-number, mobile-number
*/
// OK
/*
 2.  personal_number - ვალიდაცია:  სავალდებულოა, უნდა შეიცავდეს მხოლოდ რიცხვებს, შეყვანილი სიმბოლოების რაოდენობა უნდა 
  იყოს 11 ის ტოლი.
*/
const form = document.querySelector("#registration-form");
const personalNumber = form.querySelector("input[name='personal-number']");
/*
const isValidNumber = (personalNumber) => {
  const re = /^\d+$/;
  return re.test(string(personalNumber));
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
});
*/
const isNameValidFn = () => {
  const personalNumber = personalNumber.value.trim();
  if (personalNumber === "") {
    setErrorMessage(personalNumber, "personal-number is required");
    // nameInput.nextElementSibling.innerText = "Name is required";
    // nameInput.parentElement.classList.add("fail");
    // nameInput.parentElement.classList.remove("success");
  } else if (personalNumber.length < 11) {
    setErrorMessage(
      personalNumber,
      "personal-number must be at least 11 characters"
    );
    // nameInput.nextElementSibling.innerText =
    //   "Name must be at least 6 characters";
    // nameInput.parentElement.classList.add("fail");
    // nameInput.parentElement.classList.remove("success");
  } else if (personalNumber.lenght < 11) {
    setErrorMessage(
      personalNumber,
      "personal-number must be at most 20 characters"
    );
  } else {
    clearErrorMessage(personalNumber);
    return true;
  }
};

/*
 3.  mobile_number - ვალიდაცია: სავალდებულოა, უნდა შეიცავდეს მხოლოდ რიცხვებს, შეყვანილი სიმბოლოების რაოდენობა უნდა 
  იყოს 9-ის ტოლი.
*/

/*
 4*. დაამატეთ checkbox ინფუთი Terms and Conditions-სთვის,  რომელიც სავალდებულოა და submit ღილაკი იყოს  disabled თუ 
  იუზერი ამ ჩექბოქსს არ მონიშნავს.
*/

let checker = document.getElementById("Terms");
let subButton = document.getElementById("formbutton");
checker.onchange = function () {
  subButton.disabled = !!this.checked;
};

// $("#check").click(function () {
//   if ($(this).is(":checked")) {
//     $("#submit").removeAttr("disabled");
//   } else {
//     $("#submit").attr("disabled", "disabled");
//   }
// });
