// Step - 1: getting the total seat counter

const totalSeatCounter = document.getElementById("total-seat-counter");

let totalSeatCounterValue = parseFloat(totalSeatCounter.innerText);

// Step - 2: getting the total ticket bought value

const totalSeatBought = document.getElementById("total-seat-bought");

let totalSeatBoughtValue = parseFloat(totalSeatBought.innerText);
console.log(totalSeatBoughtValue);

// Step - 3: adding click event for every button seats with the help of seats button container

const seatButtonsContainer = document.getElementById("seat-buttons-container");

seatButtonsContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "BUTTON") {
    totalSeatCounterValue -= 1; // decreasing the total seats value

    totalSeatCounter.innerText = totalSeatCounterValue; //updating the value of total seats

    totalSeatBoughtValue += 1; //increasing the value of total seat bought

    totalSeatBought.innerText = totalSeatBoughtValue; // updating the value of total seat bought
  }
});
