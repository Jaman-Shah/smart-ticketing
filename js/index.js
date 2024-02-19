//getting the necessary  values with the help of id

const totalSeatCounter = document.getElementById("total-seat-counter");
let totalSeatCounterValue = parseFloat(totalSeatCounter.innerText);

const totalSeatBought = document.getElementById("total-seat-bought");
let totalSeatBoughtValue = parseFloat(totalSeatBought.innerText);

const totalSeatPrice = document.getElementById("total-seat-price");
let totalSeatPriceValue = parseFloat(totalSeatPrice.innerText);

const grandPrice = document.getElementById("grand-total-price");
let grandPriceValue = parseFloat(grandPrice.innerText);

//adding click event for every button seats with the help of seats button container

const seatButtonsContainer = document.getElementById("seat-buttons-container");

seatButtonsContainer.addEventListener("click", function (e) {
  const targetedButton = e.target;

  if (targetedButton.tagName === "BUTTON") {
    if (totalSeatBoughtValue < 4) {
      // updating the values where needed

      totalSeatCounterValue -= 1;
      totalSeatCounter.innerText = totalSeatCounterValue;

      totalSeatBoughtValue += 1;
      totalSeatBought.innerText = totalSeatBoughtValue;

      totalSeatPriceValue += 550;
      grandPriceValue += 550;
      totalSeatPrice.innerText = totalSeatPriceValue;
      grandPrice.innerText = totalSeatPriceValue;

      // Getting  the update ticket  parent element, creating model and appending it to the parent

      const parentElement = document.getElementById("update-ticket-area");

      const htmlCode = `
      <div class="flex justify-between mt-4">
        <h1>${targetedButton.innerText}</h1>
         <h1>Economy</h1>
        <h1>550</h1>
      </div>
      `;
      parentElement.insertAdjacentHTML("beforeend", htmlCode);

      // styling the selected buttons
      targetedButton.style.backgroundColor = "green"; //setting the bg color
      targetedButton.style.color = "white"; //setting the text color
      targetedButton.setAttribute("disabled", true); // disabling the seat selected
    } else {
      alert("You cannot buy more than 4 seats");
    }
  }
});

// coupon button functionalities starts

const couponApplyBtn = document.getElementById("coupon-apply-button");

couponApplyBtn.addEventListener("click", function () {
  const couponInsertFieldValue = document.getElementById(
    "coupon-insert-field"
  ).value;

  if (totalSeatBoughtValue !== 4) {
    alert("Please buy 4 tickets to apply coupon");
  } else {
    if (
      couponInsertFieldValue !== "NEW15" &&
      couponInsertFieldValue !== "Couple 20"
    ) {
      alert("please provide correct coupon code");
    } else {
      if (couponInsertFieldValue === "NEW15") {
        grandPriceValue -= grandPriceValue * (15 / 100);
        console.log(grandPriceValue);
        grandPrice.innerText = grandPriceValue;
      }
      if (couponInsertFieldValue === "Couple 20") {
        grandPriceValue -= grandPriceValue * (20 / 100);
        grandPrice.innerText = grandPriceValue;
      }
      couponApplyBtn.disabled = true;
    }
  }
});
// coupon button functionalities ends

// next button functionalities starts

const numberField = document.getElementById("number-field");
const finalSubmitBtn = document.getElementById("final-submit-btn");
const header = document.getElementById("header");
const main = document.getElementById("main");
const footer = document.getElementById("footer");
const successMessage = document.getElementById("success-message-model");

function checkEnableButton() {
  if (numberField.value && totalSeatBoughtValue > 0) {
    finalSubmitBtn.disabled = false;
  } else {
    finalSubmitBtn.disabled = true;
  }
}

checkEnableButton();

numberField.addEventListener("input", checkEnableButton);
totalSeatBought.addEventListener("change", checkEnableButton);

finalSubmitBtn.addEventListener("click", function () {
  header.classList.add("hidden");
  main.classList.add("hidden");
  footer.classList.add("hidden");
  successMessage.classList.remove("hidden");
});

// next button functionalities ends
