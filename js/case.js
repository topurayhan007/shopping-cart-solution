function updateCaseNumber(isIncrease) {
  const caseNumberField = document.getElementById("case-number-field");
  const caseNumberString = caseNumberField.value;
  const previousCaseNumber = parseInt(caseNumberString);

  let newCaseNumber;
  if (isIncrease === true) {
    newCaseNumber = previousCaseNumber + 1;
    caseNumberField.value = newCaseNumber;
  } else {
    if (previousCaseNumber > 0) {
      newCaseNumber = previousCaseNumber - 1;
      caseNumberField.value = newCaseNumber;
    }
  }
  return newCaseNumber;
}

function updateCaseTotalPrice(newCaseNumber) {
  if (newCaseNumber.toString() != "NaN") {
    const caseTotalPrice = newCaseNumber * 59;
    document.getElementById("case-total").innerText = caseTotalPrice;
  } else {
    document.getElementById("case-total").innerText = "59";
  }
}

document.getElementById("btn-case-plus").addEventListener("click", function () {
  const newCaseNumber = updateCaseNumber(true);
  updateCaseTotalPrice(newCaseNumber);

  calculateSubTotal();
});

document
  .getElementById("btn-case-minus")
  .addEventListener("click", function () {
    const newCaseNumber = updateCaseNumber(false);

    updateCaseTotalPrice(newCaseNumber);
    calculateSubTotal();
  });
