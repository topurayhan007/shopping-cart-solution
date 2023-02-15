function updatePhoneNumber(isIncrease) {
  const phoneNumberField = document.getElementById("phone-number-field");
  const phoneNumberString = phoneNumberField.value;
  const previousPhoneNumber = parseInt(phoneNumberString);

  let newPhoneNumber;
  if (isIncrease === true) {
    newPhoneNumber = previousPhoneNumber + 1;
    phoneNumberField.value = newPhoneNumber;
  } else {
    if (previousPhoneNumber > 0) {
      newPhoneNumber = previousPhoneNumber - 1;
      phoneNumberField.value = newPhoneNumber;
    }
  }
  return newPhoneNumber;
}

function updatePhoneTotalPrice(newPhoneNumber) {
  if (newPhoneNumber.toString() != "NaN") {
    const caseTotalPrice = newPhoneNumber * 1219;
    document.getElementById("phone-total").innerText = caseTotalPrice;
  } else {
    document.getElementById("phone-total").innerText = "1219";
  }
}

document
  .getElementById("btn-phone-plus")
  .addEventListener("click", function () {
    const newPhoneNumber = updatePhoneNumber(true);

    updatePhoneTotalPrice(newPhoneNumber);
    calculateSubTotal();
  });

document
  .getElementById("btn-phone-minus")
  .addEventListener("click", function () {
    const newPhoneNumber = updatePhoneNumber(false);

    updatePhoneTotalPrice(newPhoneNumber);
    calculateSubTotal();
  });
