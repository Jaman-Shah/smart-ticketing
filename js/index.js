//getting the values with the help of id

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
